import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import { filterMovieByGenre } from "../Actions";
import Slider from "./Slider/Slider.jsx"
import { topRated } from "./constants/top_rated.js"
import { upcoming } from "./constants/upcoming.js"
import "./Home.css"

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
      <Slider />
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

