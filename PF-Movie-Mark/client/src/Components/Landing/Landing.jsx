import React from "react";
import styles from './Landing.module.css';
import { Link } from "react-router-dom";
import gif from "./assets/popcorn.gif"

export default function LandingPage() {
  return (
    <>
    <div className={styles.page}>
      <div className={styles.imgdiv}>
        <img src={gif} className={styles.img}alt="img popcorn"/>
      </div>
      <div className={styles.father}>
        <div className={styles.textland}>
        <h1>Movie Mark</h1>
        <h2>Get your tickets,</h2>
        <h2>fast and simple.</h2>
        <div className={styles.btnFather}>
        <Link to="/home">
          <button className={styles.button}>Shop now</button>
        </Link>
        </div>
        </div>
      </div>
    </div>
    <h4 className={styles.p}>
          This e-commerce was created by students of the
          full stack developer career for the Henry academy, 
          we hope you enjoy it.🚀
        </h4>
    </>
  );
}