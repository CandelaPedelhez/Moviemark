/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import Cart from "../Cart/index";
// import hola from "./hola.png"

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/home" style={{ textDecoration: 'none' }}>
      <h1 className="btnHome">MOVIEMARK</h1>
        </Link>
        <FontAwesomeIcon className="movieIcon" icon={faClapperboard} />
      <Link to="/groceries" style={{ textDecoration: 'none' }}>
        <h3 className="btn">Groceries</h3>
      </Link>
      <SearchBar/>
      <Cart/>
      {/* <Link to="/cart">
      <FontAwesomeIcon className="cart" icon={faCartShopping} />
      </Link> */}
      {/* <Link to="/"> */}
      <FontAwesomeIcon className="user" icon={faUser} />
      {/* </Link> */}
      </div>
  );
}
