import { useLocation } from 'react-router';
import img from '../../img/404 error lost in space-amico.svg';
import styles from './NotFoundPage.module.css';


const NotFoundPage = () =>{
    let location = useLocation();
    
    return(
        <div className={styles.cont}>
        <img className={styles.img} src={img} alt="Not found" />
        <p className={styles.text} > No math for <u>{location.pathname}</u></p>
        </div>
    )
}


export default NotFoundPage;