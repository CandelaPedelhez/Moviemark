/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import Card from "./Card";
import { getMovies, filterMovieByGenre, getGenres } from "../Actions";
import Slider from "./Slider/Slider.jsx";
// IMPLEMENTAR carrito full front para setear un estado local donde se carguen+
//-las cosas que el cliente clickee useState();
export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  //console.log("esta son las pelis", movies);
  const genres = useSelector((state) => state.genres);

  function handleFilteredGenre(e) {
    e.preventDefault();
    dispatch(filterMovieByGenre(e.target.value));
  }

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <NavBar />
      <Link to="/groceries">
        <button>Groceries</button>
      </Link>
      <select onChange={(e) => handleFilteredGenre(e)}>
        <option value="genre" disabled />
        <option value="All">All</option>
        {genres?.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
      </select>
      <Slider />
      {movies?.map((movie) => {
        return (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            //genres={movie.genres}
            vote_average={movie.vote_average}
            img={movie.img}
          />
        );
      })}
    </div>
  );
}
