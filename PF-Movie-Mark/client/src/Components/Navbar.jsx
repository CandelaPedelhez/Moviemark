import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>MOVIE MARKET</h2>
      <SearchBar />
    </div>
  );
}
