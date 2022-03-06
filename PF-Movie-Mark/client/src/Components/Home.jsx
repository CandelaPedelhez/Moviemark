/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import Card from "./Card";
import { getMovies, filterMovieByGenre, getGenres } from "../Actions";
import Slider from "./Slider/Slider.jsx";
import { topRated } from "./constants/top_rated.js";
import { upcoming } from "./constants/upcoming.js";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  //console.log("esta son las pelis", movies);
  const genres = useSelector((state) => state.genres);
  const [ticket, setTicket] = useState([]);

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
      <Slider />
      <select onChange={(e) => handleFilteredGenre(e)}>
        <option value="filter by genre" disabled />
        <option value="All">All</option>
        {genres?.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
      </select>
      {movies?.map((movie) => {
        return (
          <div>
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              //genres={movie.genres}
              vote_average={movie.vote_average}
              img={movie.img}
            />
            <button>Add to cart</button>
          </div>
        );
      })}
      <div className="row">
        <h2>Top Rated</h2>
        <div className="row__posters">
          {topRated?.map((e) => (
            <div>
              {/* <h3 key={e.id}>{e.name}</h3> */}
              <img
                key={e.id}
                src={e.img}
                alt="img not found"
                className="row__poster"
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="row">
        <h2>Upcoming</h2>
        <div className="row__posters">
          {upcoming?.map((e) => (
            <div>
              {/* <h3 key={e.id}>{e.name}</h3> */}
              <img src={e.img} alt="img not found" className="row__poster" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
