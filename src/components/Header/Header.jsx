import { NavLink, Link } from "react-router-dom";
import ico from "../../img/star-wars.svg";
import Favorite from "../Favorite/Favorite";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <NavLink className={styles.ico} to="/">
          <img src={ico} />
        </NavLink>

        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles/?page=1">Vehicles</NavLink>
        </li>
        <li>
          <NavLink to="/starships/?page=1">Starships</NavLink>
        </li>
        <li>
          <NavLink to="/planets/?page=1">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
