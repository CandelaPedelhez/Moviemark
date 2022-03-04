import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByName } from "../Actions";
//import "./searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    //console.log(name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovieByName(title));
    setTitle("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => handleChange(e)}
        className="input-search-bar"
      ></input>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </>
  );
}
