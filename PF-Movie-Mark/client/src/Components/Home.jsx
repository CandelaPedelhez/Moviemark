/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import { getMovies, filterMovieByGenre, getGenres } from "../Actions";
export default function Home() {
  const dispatch = useDispatch();
  //const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);

  function handleFilteredGenre(e) {
    e.preventDefault();
    dispatch(filterMovieByGenre(e.target.value));
  }

  /*useEffect(() => {
    dispatch(getMovies());
  }, []);*/

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Hola soy el Home</h1>
      <h2>Si lo sabemos</h2>
      <h3>Ah ok.</h3>
      <Link to="/groceries">
        <button>Groceries</button>
      </Link>
      <select onChange={(e) => handleFilteredGenre(e)}>
        <option value="genre" disabled>
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
