import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { setPersonToFavorite , removePersonFromFavorites  } from '../../store/actions';
import {API_PERSON_PLANETS} from '../../constans/api';
import {getApiRecourse} from '../../utils/network'
import { withErrorAppi } from '../../hoc-halper/withErrorapi';
import {errorImg,getPlanetsImage} from '../../services/getPeopleData';
import ico from '../../img/favorite.svg';
import icoFill from '../../img/favorite-fill.svg';
import PersonInfo from '../PersonInfo/PersonInfo';
import LinkBack from '../LinkBack/LinkBack';
import UILoading from '../UI-kit/UILoading/UILoading'
import styles from './PersonPlanetsPage.module.css';

const PersonFilms = React.lazy(() => import('../PersonFilms/PersonFilms'));
const PersonPlanetsPage = ({setErrorApi}) =>{
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
          
           storeData['planet'+id]? setPersonFavorite(true):setPersonFavorite(false);
            setPersonId(id);
           

            const res = await getApiRecourse(`${API_PERSON_PLANETS}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Climate', data: res.climate },
                    { title: 'Diameter', data: res.diameter },
                    { title: 'Gravity', data: res.gravity },
                    { title: 'Orbital period', data: res.orbital_period },
                    { title: 'Population', data: res.population},
                    
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPlanetsImage(id));
               
                res.films.length && setPersonFilms(res.films);
            }

            setErrorApi(!res);
        })();
    }, []);

 const dispatch = useDispatch();
 const dispatchFavoritePeople = () => {
    if (personFavorite) {
        dispatch(removePersonFromFavorites('planet'+ personId));
    } else {
        dispatch(setPersonToFavorite({
            ['planet'+ personId]: {
                name: personName,
                img: personPhoto,
                category:'planets/'+ personId
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
        <img className={styles.person_img} src={personPhoto} alt={personName} onError={errorImg} />
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


PersonPlanetsPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorAppi(PersonPlanetsPage);


