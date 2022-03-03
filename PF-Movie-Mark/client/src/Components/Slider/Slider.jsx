import styles from './Slider.module.css';
import left from './images/left.png'
import right from './images/next.png'
import { useState } from 'react';
import batman from './images/batman.jpg'
import jackass from './images/jackass.jpg'
import morbius from './images/morbius.webp'
import { Link } from 'react-router-dom';

const forslider=[   //Esto habria que pasarle desde el Home, haciendo request(s) a la API por esas peliculas.
    {
        id: 414906,
        name: "The Batman",
        image: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        tagline: "Unmask the truth.",
    },
    {
        id: 526896,
        name: "Morbius",
        image: "https://image.tmdb.org/t/p/original/o0DiJVE7titRdgcqIOFGKcVoBL0.jpg",
        tagline: "The line between hero and villain will be broken.",
    },
    {
        id: 656663,
        name: "Jackass Forever",
        image: "https://image.tmdb.org/t/p/original/ruHDFumJfW7F2vEqTZEQQ9xT7CA.jpg",
        tagline: "Some people never learn.",
    },
]

const Slider = ({arraywith3films}) => {
    const [current,setCurrent] = useState(0);
    const length = forslider.length;
    const imagesData = [{image:batman},{image:morbius},{image:jackass}]
    
    const nextSlide = () => {
        setCurrent(current===length-1?0:current+1);
    }
    const prevSlide = () => {
        setCurrent(current===0?length-1:current-1);
    }

    return (
        <div className={styles.slider}>
            <img src={left} alt='left' className={styles.leftarrow} onClick={prevSlide}/>
            <img src={right} alt='right' className={styles.rightarrow} onClick={nextSlide}/>
            {
                forslider.map((el,index)=>{
                    return(
                        <div className={index===current?styles.slideact:styles.slide} key={index}>
                            {index===current?
                            <div className={styles.cont}>
                                <div className={styles.text}>
                                    <div className={styles.columnadj}>
                                        <div className={styles.col1}>
                                            <img className={styles.poster} src={el.image} alt="poster"/>
                                        </div>
                                        <div className={styles.col2}>
                                            <h1 className={styles.title}>{el.name}</h1>
                                            <p className={styles.texttop}>{el.tagline}</p>
                                            <Link to={`/movie/${el.id}`}>
                                                <button className={styles.button}>See more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={styles.img} src={imagesData[index].image} alt="slide"/>
                                </div>
                            </div>:<></>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;