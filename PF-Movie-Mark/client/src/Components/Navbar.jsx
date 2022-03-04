/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">MOVIE MARKET</Link>
      <SearchBar />
    </div>
  );
}
