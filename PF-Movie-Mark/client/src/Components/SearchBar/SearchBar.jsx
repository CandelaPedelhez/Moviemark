import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieByTitle } from "../../Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
    //console.log(name);
  }

  function handleSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getMovieByTitle(title));
      setTitle("");
    }
  }

  const handleClearInput = (e) => {
    e.preventDefault();
    setTitle("");
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Ej: 'The Godfather'"
        value={title}
        onChange={(e) => handleChange(e)}
        className="input"
        onKeyPress={handleSubmit}
      ></input>
      {title.length === 0 ? (<button className="btnSearch"><FontAwesomeIcon icon={faSearch} />
      </button>) : (<button type="button" onClick={(e) => handleClearInput(e)} className="btnClear">
        <FontAwesomeIcon icon={faTimes} />
      </button>)}
    </div>
  );
}