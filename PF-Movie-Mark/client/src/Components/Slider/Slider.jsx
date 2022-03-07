import styles from './Slider.module.css';
import left from './images/left.png'
import right from './images/next.png'
import { useState } from 'react';
import batman from './images/batman.jpg'
import kimi from './images/kimi.jpg'
import scream from './images/scream.png'
import { Link } from 'react-router-dom';

const Slider = ({ movies }) => {
    const [current, setCurrent] = useState(0);
    movies = movies.slice(0,3);
    const length = movies.length;
    const imagesData = [{ image: batman }, { image: scream }, { image: kimi }]

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div className={styles.slider}>
            <img src={left} alt='left' className={styles.leftarrow} onClick={prevSlide} />
            <img src={right} alt='right' className={styles.rightarrow} onClick={nextSlide} />
            {
                movies.map((el, index) => {
                    return (
                        <div className={index === current ? styles.slideact : styles.slide} key={index}>
                            {index === current ?
                                <div className={styles.cont}>
                                    <div className={styles.text}>
                                        <div className={styles.columnadj}>
                                            <div className={styles.col1}>
                                                <img className={styles.poster} src={el.img} alt="poster" />
                                            </div>
                                            <div className={styles.col2}>
                                                <h1 className={styles.title}>{el.title}</h1>
                                                <p className={styles.texttop}>{el.description.slice(0,50)+"..."}</p>
                                                <Link to={`/movies/${el.id}`}>
                                                    <button className={styles.button}>See more</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img className={styles.img} src={imagesData[index].image} alt="slide" />
                                    </div>
                                </div> : <></>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;