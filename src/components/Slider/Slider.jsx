import { useState } from "react";
import styles from "./Slider.module.css";
import arrow from "./arrow.png";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide_cont}>
        <img src={arrow} onClick={goToPrevious} className={styles.left_arrow} />

        <NavLink className={styles.link} to={slides[currentIndex].link}>
          <img
            src={slides[currentIndex].url}
            alt=""
            className={styles.img_slide}
          />
        </NavLink>

        <img src={arrow} onClick={goToNext} className={styles.right_arrow} />
      </div>
      <div className={styles.dots_cont}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dot}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
