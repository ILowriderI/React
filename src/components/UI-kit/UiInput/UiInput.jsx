import cn from 'classnames';


import icon from '../../../img/cancel.svg';


import styles from './UiInput.module.css';


const UiInput = ({
    value,
    inputChange,
    placeholder,
    
}) => (
    <div className={styles.wrapper__input}>
        
        <input
            type="text"
            value={value}
            onChange={(e) =>inputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
           
        />
         <img
            onClick={() => value && inputChange('')}
            src={icon}
            className={cn(styles.clear, !value && styles.clear__disabled)}
            alt="Clear"
        />
    </div>
)



export default UiInput;

/*
 <<input
            type="text"
            value={value}
            inputChange={(e) =>inputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
           
        />
         <img
            onClick={() => value && inputChange('')}
            src={icon}
            className={cn(styles.clear, !value && styles.clear__disabled)}
            alt="Clear"
        />
*/