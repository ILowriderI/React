import cn from 'classnames';

import styles from './Modal.module.css';
import ico from './cross .png'

const Modal = ({active,setActive})=>{


    

    return(
       <div className={active? cn(styles.modal,styles.active):styles.modal} onClick={()=>{setActive(false)}}>
       <div className={styles.modal_content} onClick={e=>e.stopPropagation()}>
<img className={styles.close} src={ico} alt="close" onClick={()=>{setActive(false)}} />
<p className={styles.text}>
<h3>Hi! </h3> React based web application. Everything is click based,
 so if you are interested in seeing all the characters from the Star Wars films,
  click the characters category.
  After that, simply click on any picture to learn more about that.
 You can also add your favorite character to favorites.
 This app utilizes the Star Wars API.
</p>
       </div>

       </div>
    )
}

export default Modal;