/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Cart from "../Cart/index";
import { useSelector } from "react-redux";

export default function NavBar() {
  const loggedIn = useSelector((state) => state.loggedIn);
  let aux = 0;
  if (localStorage.getItem("token")) {
    aux = localStorage.getItem("token");
  }
  return (
    <div className="nav">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <img src="https://i.imgur.com/INE654E.png" alt="logo in process" />
      </Link>
      {/* <FontAwesomeIcon className="movieIcon" icon={faClapperboard} />*/}
      <Link to="/groceries" style={{ textDecoration: "none" }}>
        <h3 className="btn">Groceries</h3>
      </Link>
      <SearchBar />
      <Cart />
      {loggedIn === true || aux.length > 10 ? (
        <Link to="/account">
          <FontAwesomeIcon className="user" icon={faUser} />
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon className="user" icon={faUser} />
        </Link>
      )}
    </div>
  );
}
