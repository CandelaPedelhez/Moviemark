/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import Cart from "../Cart/index";
import { useSelector } from "react-redux";

export default function NavBar() {
  const isLogged = useSelector((state) => state.isLogged);
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
      {
        isLogged===true?<Link to="/profile">
        <FontAwesomeIcon className="user" icon={faUser} />
        </Link>:<Link to="/login">
        <FontAwesomeIcon className="user" icon={faUser} />
        </Link>
      }
      </div>
  );
}
