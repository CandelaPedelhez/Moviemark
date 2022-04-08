import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <>
      <Link to="/home">
        <button className={styles.buttonabout}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className={styles.about}>
        <h1>About Us</h1>
      </div>

      <div className={styles.text}>
        <h2>
          Hello, this project was carried out by Henry's students with the aim
          of finalizing the bootcamp by presenting this final project. Its
          objective is to make it easier for moviegoers to acquire movie tickets
          remotely. In addition, we have the possibility of adding your favorite
          treats and thus, save you long waiting lines.
        </h2>
        <div className={styles.text}>
          <h2>Thanks for the support. Popcorn'ya!</h2>
        </div>
        {/*<h2>Here is our contact information</h2>*/}
      </div>
      <div className={styles.aboutfather}>
        <div className={styles.item}>
          <h3>Rocio Garcia Lofrano</h3>
          <div className={styles.imgabout}>
            <img
              src="https://i.imgur.com/bs6mAJd.png"
              alt="Img not found"
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Nacarith Sequera</h3>
          <div className={styles.imgabout}>
            <img
              src="https://i.imgur.com/ITssu8w.jpg"
              alt="Img not found"
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Juan Manuel Vergara</h3>
          <div className={styles.imgabout}>
            <img
              src="https://i.imgur.com/mF1nwgF.png"
              alt="Img not found"
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Candela Pedelhez</h3>
          <div className={styles.imgabout}>
            <img
              src="https://i.imgur.com/Z1upvRn.png"
              alt="Img not found"
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Francisco Cedermaz</h3>
          <div className={styles.imgabout}>
            <img
              src="https://i.imgur.com/vKCsoFi.png"
              alt="Img not found"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
