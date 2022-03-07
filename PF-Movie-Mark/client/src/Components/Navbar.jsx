/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/home" style={{ textDecoration: 'none' }}>
      <p className="btnHome">MovieMark</p>
        </Link>
      <Link to="/groceries" style={{ textDecoration: 'none' }}>
        <h3 className="btn">Groceries</h3>
      </Link>
      <SearchBar/>
      <Link to="/">
      <FontAwesomeIcon className="cart" icon={faCartShopping} />
      </Link>
      <Link to="/">
      <FontAwesomeIcon className="user" icon={faUser} />
      </Link>
    </div>
  );
}
