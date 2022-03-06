/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import Card from "./Card";
import { getMovies, filterMovieByGenre, getGenres } from "../Actions";

import Slider from "./Slider/Slider.jsx"
import { topRated } from "./constants/top_rated.js"
import { upcoming } from "./constants/upcoming.js"
import "./Home.css"



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
      <Slider/>
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
      <div classname="row">
        <h2>Top Rated</h2>
        <div className="row__posters">
          {topRated?.map((e) => (
            <div>
              {/* <h3 key={e.id}>{e.name}</h3> */}
              <img key={e.id} src={e.img} className="row__poster" />
            </div>
          )
          )}
        </div>
      </div>
      <br />
      <div classname="row">
        <h2>Upcoming</h2>
        <div className="row__posters">
          {upcoming?.map((e) => (
            <div>
              {/* <h3 key={e.id}>{e.name}</h3> */}
              <img src={e.img} className="row__poster" />
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
}
