import { useNavigate } from 'react-router-dom';
import icon from '../../img/back.svg';
import styles from './LinkBack.module.css';

const LinkBack = ()=>{

    const navigate = useNavigate();
    
    const handleGoBack = (e)=>{
        e.preventDefault();
        navigate(-1);
        
    }

    return(
        <a href='#'  onClick={handleGoBack} className={styles.link}>
             <img className={styles.link__img} src={icon} alt="Go back" />
            <span>Go Back</span>
        </a>
    )
}


export default LinkBack;