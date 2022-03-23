import React from "react";
import styles from "./Loader.module.scss";
import gif from "./assets/popcorn.gif";

export default function Loader() {
  return (
    <div className={styles.cont}>
      <img src={gif} className={styles.gif} alt="gif" />
    </div>
  );
}
