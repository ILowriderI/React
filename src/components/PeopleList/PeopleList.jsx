import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { errorImg } from "../../services/getPeopleData";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__conatainer}>
        {people === null ? (
          <CircularProgress color="secondary" />
        ) : (
          people.map(({ id, name, img, category }) => {
            return (
              <li className={styles.list__item} key={id}>
                <Link to={`/${category}/${id}`}>
                  <img
                    className={styles.person__photo}
                    src={img}
                    alt={name}
                    onError={errorImg}
                  />

                  <p>{name}</p>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
