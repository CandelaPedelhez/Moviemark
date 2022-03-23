/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import Cart from "../Cart/index";
//import { useSelector } from "react-redux";

export default function NavBar() {
  let aux = { name: "" };
  if (localStorage.getItem("user")) {
    aux = localStorage.getItem("user");
    aux = JSON.parse(aux);
  }
  return (
    <div className={styles.nav}>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <img src="https://i.imgur.com/INE654E.png" alt="Logo in process" />
      </Link>

      <Link to="/groceries" style={{ textDecoration: "none" }}>
        <h3 className={styles.btn}>Groceries</h3>
      </Link>
      <div>
        <SearchBar placeholder="Search..." />
      </div>
      <Cart />
      {!aux.id ? (
        <Link to="/login">
          <FontAwesomeIcon className={styles.user} icon={faUser} />
        </Link>
      ) : aux.role === "admin" ? (
        <Link to="/admin">
          <FontAwesomeIcon className={styles.user} icon={faUser} />
        </Link>
      ) : (
        <Link to="/account">
          <FontAwesomeIcon className={styles.user} icon={faUser} />
        </Link>
      )}
    </div>
  );
}
