import styles from "./Slider.module.css";
import left from "./images/left.png";
import right from "./images/next.png";
import { useState } from "react";
import batman from "./images/batman.jpg";
import kimi from "./images/kimi.jpeg";
import scream from "./images/scream.png";
import combo from "./images/combo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Slider = () => {
  let films = useSelector((state) => state.forslider);
  const [current, setCurrent] = useState(0);
  //movies = movies.slice(0,4);
  let movies = [];
  for (let i = 0; i < films.length; ++i) {
    if (films[i].title === "Kimi") {
      movies.push(films[i]);
    } else if (films[i].title === "The Batman") {
      movies.push(films[i]);
    } else if (films[i].title === "Scream") {
      movies.push(films[i]);
    }
  }
  movies.push({ id: 768744 });
  console.log(movies);
  const length = movies.length;
  const imagesData = [
    { image: batman },
    { image: scream },
    { image: kimi },
    { image: combo },
  ];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <img
        src={left}
        alt="left"
        className={styles.leftarrow}
        onClick={prevSlide}
      />
      <img
        src={right}
        alt="right"
        className={styles.rightarrow}
        onClick={nextSlide}
      />
      {movies.map((el, index) => {
        return (
          <div
            className={index === current ? styles.slideact : styles.slide}
            key={index}
          >
            {index === current ? (
              <div className={styles.cont}>
                {el.id !== 768744 ? (
                  <div className={styles.text}>
                    <div className={styles.columnadj}>
                      <div className={styles.col1}>
                        <img
                          className={styles.poster}
                          src={el.img}
                          alt="poster"
                        />
                      </div>
                      <div className={styles.col2}>
                        <h1 className={styles.title}>{el.title}</h1>
                        <p className={styles.texttop}>
                          {el.description.slice(0, 50) + "..."}
                        </p>
                        <Link to={`/movies/${el.id}`}>
                          <button className={styles.button}>See more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {el.id !== 768744 ? (
                  <div>
                    <img
                      className={styles.img}
                      src={imagesData[index].image}
                      alt="slide"
                    />
                  </div>
                ) : (
                  <div>
                    <Link to={"/groceries/"}>
                      <img
                        className={styles.img}
                        src={imagesData[index].image}
                        alt="slide"
                      />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
