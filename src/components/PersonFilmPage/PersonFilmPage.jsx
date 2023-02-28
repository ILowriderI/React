import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import React, { useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { setPersonToFavorite , removePersonFromFavorites  } from '../../store/actions';
import {API_FILMS} from '../../constans/api';
import {getApiRecourse} from '../../utils/network'
import { withErrorAppi } from '../../hoc-halper/withErrorapi';
import {errorImg,getFilmsImg} from '../../services/getPeopleData';
import ico from '../../img/favorite.svg';
import icoFill from '../../img/favorite-fill.svg';
import PersonInfo from '../PersonInfo/PersonInfo';
import LinkBack from '../LinkBack/LinkBack';

import styles from './PersonFilmPage.module.css';


const PersonFilmPage = ({setErrorApi}) =>{
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);
    const [description, setDescription] = useState(null);
    const {id} = useParams();
    const storeData = useSelector(state => state.favoriteReducer);
    

   
    
   
    useEffect(() => {
        (async () => {
           // setPersonFavorite(!!storeData[id]);
           storeData['film'+id]? setPersonFavorite(true):setPersonFavorite(false);
            setPersonId(id);
           

            const res = await getApiRecourse(`${API_FILMS}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Release date', data: res.release_date },
                    { title: 'Director', data: res.director },
                    { title: 'Producer', data: res.producer },
                    { title: 'Episode', data: res.episode_id },
                   
                    
                ]);
                setPersonName(res.title);
                setPersonPhoto(getFilmsImg(id));
                setDescription(res.opening_crawl)
               
               // res.films.length && setPersonFilms(res.films);
            }

            setErrorApi(!res);
        })();
    }, []);

 const dispatch = useDispatch();
 const dispatchFavoritePeople = () => {
    if (personFavorite) {
        dispatch(removePersonFromFavorites('film'+personId));
    } else {
        dispatch(setPersonToFavorite({
            ['film'+personId]: {
                name: personName,
                img: personPhoto,
                category:'films/'+personId
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
   
    <div className={styles.description}> Opening Crawl:<br/>{description}</div>
    
    </div>
    
     </div>
</>
)


}


PersonFilmPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorAppi(PersonFilmPage);