import loadIcon from "./img/loader.svg";
import styles from "./UILoading.module.css";

const UILoading = () => {
  return (
    <>
      <img className={styles.loader} src={loadIcon} alt="loader" />
    </>
  );
};

export default UILoading;
