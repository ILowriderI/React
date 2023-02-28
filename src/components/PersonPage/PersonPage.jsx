import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { setPersonToFavorite , removePersonFromFavorites  } from '../../store/actions';
import { API_PERSON } from '../../constans/api';
import {getApiRecourse} from '../../utils/network'
import { withErrorAppi } from '../../hoc-halper/withErrorapi';
import {getPeopleImage} from '../../services/getPeopleData';
import ico from '../../img/favorite.svg';
import icoFill from '../../img/favorite-fill.svg';
import PersonInfo from '../PersonInfo/PersonInfo';
import LinkBack from '../LinkBack/LinkBack';
import UILoading from '../UI-kit/UILoading/UILoading'
//import PersonPhoto from '../PersonInfo/PersonInfo';
import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('../PersonFilms/PersonFilms'));
const PersonPage = ({setErrorApi}) =>{
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);
    const {id} = useParams();
    const storeData = useSelector(state => state.favoriteReducer);
    

   
    
   
    useEffect(() => {
        (async () => {
           // setPersonFavorite(!!storeData[id]);
           storeData['people'+id]? setPersonFavorite(true):setPersonFavorite(false);
            setPersonId(id);
           

            const res = await getApiRecourse(`${API_PERSON}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
               
                res.films.length && setPersonFilms(res.films);
            }

            setErrorApi(!res);
        })();
    }, []);

 const dispatch = useDispatch();
 const dispatchFavoritePeople = () => {
    if (personFavorite) {
        dispatch(removePersonFromFavorites('people'+personId));
    } else {
        dispatch(setPersonToFavorite({
            ['people'+personId]: {
                name: personName,
                img: personPhoto,
                category:'people/'+personId
            }
        }));
    }

    setPersonFavorite(!personFavorite);
}
    
    

   
return(
    <>
   <LinkBack/>

   <div className={styles.wrap}>

    <span className={styles.person__name}>{personName}</span>
    <div className={styles.cont} >
        <div className={styles.photo__cont}>
        <img className={styles.person_img} src={personPhoto} alt={personName} />
        <img
                    src={personFavorite ? icoFill : ico}
                    onClick={dispatchFavoritePeople}
                    className={styles.favorite}
                    alt="Add to favorite"
                />
        
         
        </div>
    
    {personInfo && <PersonInfo  personInfo={personInfo} />}
    {personFilms && (
                        <Suspense fallback={<UILoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>)}
   
    
    </div>
     </div>
</>
)


}


PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorAppi(PersonPage);
/*
 <>
   <LinkBack/>

   <div className={styles.wrap}>

    <span className={styles.person__name}>{personName}</span>
    <div className={styles.cont} >
        <div className={styles.photo__cont}>
        <img className={styles.person_img} src={personPhoto} alt={personName} />
        </div>
    
    {personInfo && <PersonInfo  personInfo={personInfo} />}
    {personFilms && (
                        <Suspense fallback={<UILoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>)}
   
    
    </div>
     </div>
</>

const add = ()=>{
    dispatch(setPersonToFavorite({
        [personId]:{
          name: personName,
          img:personPhoto
        },
    })) ;
    setPersonFavorite(true);
 }
 const remove = ()=>{
       dispatch(removePersonFromFavorites(personId));  
       setPersonFavorite(false);
 }
    

*/