/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import Card from "./Card";
import { getMovies, filterMovieByGenre, getGenres, getUpcoming, getTopRated } from "../Actions";
import Slider from "./Slider/Slider.jsx"
import "./Home.css"


export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  //console.log("esta son las pelis", movies);
  const genres = useSelector((state) => state.genres);
  const upcoming = useSelector((state) => state.upcoming);
  const topRated = useSelector((state) => state.topRated);

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

  useEffect(() => {
    dispatch(getUpcoming());
  }, []);

  useEffect(() => {
    dispatch(getTopRated());
  }, []);

  return (
    <div>
      <NavBar />
      <Link to="/groceries">
        <button>Groceries</button>
      </Link>
      <Slider />
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
      <div>        
        <h2>On Stream</h2>
      <div className="row__posters">
      {movies?.map((movie) => {
        return (
          <Card
            id={movie.id}
            // title={movie.title}
            //genres={movie.genres}
            // vote_average={movie.vote_average}
            img={movie.img}
            className="row__poster"
          />
        );
      })}
      </div>
      </div>
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
      <div className="row">
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
