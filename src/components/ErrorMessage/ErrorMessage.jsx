
import styles from './ErrorMessage.module.css';
import video from './video/han-solo.mp4';
import UiVideo from '../UI-kit/UiVideo/UiVideo';

const ErrorMessage = ()=>{
   
return(
    <>
    <p className={styles.text}>
        The dark side of the force has won <br/>
       We cannot display data <br/>
       Come back when we fix everithing <br /> 
       
    </p>
    <UiVideo  classes={styles.video} src={video} playbackRate={1.5} />
    </>
)
}
export default ErrorMessage;