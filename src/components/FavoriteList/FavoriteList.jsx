import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { errorImg } from '../../services/getPeopleData';
import CircularProgress from '@mui/material/CircularProgress';
import styles from "./FavoriteList.module.css"


const FavoriteList = ({people }) =>{
    
   
    return(
        <>
        <ul className={styles.list__conatainer}>
       {people === null ? <CircularProgress color="secondary" />     // если появляются данные , то убираем лоадер и выводим их
    : people.map(({id,name,img,category})=>{
        
         
          return <li className={styles.list__item} key={id}>
           <Link to={`/${category}` }>
            <img className={styles.person__photo} src={img} alt={name} onError={errorImg} />
           
            <p>{name}</p>
            </Link>
            </li>
           
        })}
    </ul>
        </>
    )
}

FavoriteList.propTypes = {          // указываем тип пропса
    people : PropTypes.array
}


export default FavoriteList