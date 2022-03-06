import React from "react";
import styles from './Landing.module.css';
import popcorn from './assets/popcorn.png';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.imgdiv}>
        <img src={popcorn} className={styles.img}alt="img popcorn"/>
      </div>
      <div className={styles.textland}>
        <h1>Movie Mark</h1>
        <h2>CINEMA</h2>
        <Link to="/home">
          <button className={styles.button}>Enter</button>
        </Link>
        <p>
          This e-commerce was created by students of the
        </p>
        <p>
          full stack developer career for the Henry academy, 
        </p>
        <p>
          we hope you enjoy it.
        </p>
      </div>
    </div>
  );
}
