import styles from "./PersonStarshipsPage.module.css";

import { useParams } from "react-router";
import PropTypes from "prop-types";
import React, { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorites,
} from "../../store/actions";
import { API_PERSON_STARSHIPS } from "../../constans/api";
import { getApiRecourse } from "../../utils/network";
import { withErrorAppi } from "../../hoc-halper/withErrorapi";
import { getStarshipsImage, errorImg } from "../../services/getPeopleData";
import ico from "../../img/favorite.svg";
import icoFill from "../../img/favorite-fill.svg";
import PersonInfo from "../PersonInfo/PersonInfo";
import LinkBack from "../LinkBack/LinkBack";
import UILoading from "../UI-kit/UILoading/UILoading";

const PersonFilms = React.lazy(() => import("../PersonFilms/PersonFilms"));
const PersonStarshipsPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);
  const { id } = useParams();
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      // setPersonFavorite(!!storeData[id]);
      storeData["starship" + id]
        ? setPersonFavorite(true)
        : setPersonFavorite(false);
      setPersonId(id);

      const res = await getApiRecourse(`${API_PERSON_STARSHIPS}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: "Model", data: res.model },
          { title: "Cost", data: res.cost_in_credits },
          { title: "Manufacturer", data: res.manufacturer },
          { title: "Max atmosphering speed", data: res.max_atmosphering_speed },
          { title: "Passengers", data: res.passengers },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getStarshipsImage(id));

        res.films.length && setPersonFilms(res.films);
      }

      setErrorApi(!res);
    })();
  }, []);

  const dispatch = useDispatch();
  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorites("starship" + personId));
    } else {
      dispatch(
        setPersonToFavorite({
          ["starship" + personId]: {
            name: personName,
            img: personPhoto,
            category: "starships/" + personId,
          },
        })
      );
    }

    setPersonFavorite(!personFavorite);
  };

  return (
    <>
      <LinkBack />

      <div className={styles.wrap}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.cont}>
          <div className={styles.photo__cont}>
            <img
              className={styles.person_img}
              src={personPhoto}
              alt={personName}
              onError={errorImg}
            />
            <img
              src={personFavorite ? icoFill : ico}
              onClick={dispatchFavoritePeople}
              className={styles.favorite}
              alt="Add to favorite"
            />
          </div>

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonStarshipsPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorAppi(PersonStarshipsPage);
