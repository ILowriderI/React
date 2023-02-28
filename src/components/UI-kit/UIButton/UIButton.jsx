import PropTypes from 'prop-types';
import styles from './UIButton.module.css';

const UIButton = ({text ,onClick,disabled})=>{
    return(
        <>
         <button 
           disabled={disabled}
            onClick={onClick}
             className={styles.btn}
             > {text}</button>
        </>
    )
}
 

UIButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    
}

export default UIButton;

