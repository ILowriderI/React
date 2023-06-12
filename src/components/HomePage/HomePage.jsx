import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import ico from "./img/question.png";
import logo from "./img/logo.png";
import styles from "./HomePage.module.css";
import ImageSlider from "../Slider/Slider";
import Modal from "../Modal/Modal";
import { useState } from "react";

const HomePage = () => {
  const slides = [
    { url: img1, link: "/starships/?page=1" },
    { url: img2, link: "/people/?page=1" },
    { url: img3, link: "/people/?page=1" },
    { url: img4, link: "/starships/?page=1" },
    { url: img5, link: "/films" },
    { url: img6, link: "/people/?page=1" },
    { url: img7, link: "/planets/?page=1" },
    { url: img8, link: "/starships/?page=1" },
  ];

  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrap}>
      <img
        className={styles.about}
        src={ico}
        onClick={() => {
          setActive(true);
        }}
      />

      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.slider_cont}>
        <ImageSlider slides={slides} />
      </div>
      <Modal active={active} setActive={setActive} />
    </div>
  );
};

export default HomePage;
