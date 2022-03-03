import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import { filterMovieByGenre } from "../Actions";
export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);

  function handleFilteredType(e) {
    e.preventDefault();
    dispatch(filterMovieByGenre(e.target.value));
  }

  return (
    <div>
      <NavBar />
      <h2>Hola soy el Home</h2>
      <h3>Si lo sabemos</h3>
      <h4>Ah ok.</h4>

      <select onChange={(e) => handleFilteredType(e)}>
        <option value="type" disabled>
          filter by genre:
        </option>
        <option value="All">All</option>
        {genres?.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
