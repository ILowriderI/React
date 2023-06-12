import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import UIButton from "../UI-kit/UIButton/UIButton";

import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({
  previousPage,
  nextPage,
  getRecourse,
  counterPage,
  category,
}) => {
  const changeNext = () => getRecourse(nextPage);
  const changePrevious = () => getRecourse(previousPage);

  return (
    <div className={styles.cont}>
      <Link
        to={`/${category}/?page=${counterPage - 1}`}
        className={styles.link}
      >
        <UIButton
          text="Previous"
          onClick={changePrevious}
          disabled={!previousPage}
        />
      </Link>

      <Link
        to={`/${category}/?page=${counterPage + 1}`}
        className={styles.link}
      >
        <UIButton text="Next" onClick={changeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  previusPage: PropTypes.string,
  nextPage: PropTypes.string,
  getApiRecourse: PropTypes.func,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
