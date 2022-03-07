/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/Navbar";
import Card from "./Card";
import Slider from "./Slider/Slider.jsx";
import "./Home.css";
import {
  getMovies,
  filterMovieByGenre,
  getGenres,
  getUpcoming,
  getTopRated,
  orderBy,
} from "../Actions";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  //console.log("esta son las pelis", movies);
  const genres = useSelector((state) => state.genres);
  const [order, setOrder] = useState("");
  //const [ticket, setTicket] = useState([]);
  const upcoming = useSelector((state) => state.upcoming);
  const topRated = useSelector((state) => state.topRated);

  function handleFilteredGenre(e) {
    e.preventDefault();
    dispatch(filterMovieByGenre(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setOrder(`ordenado, ${e.target.value}`);
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
      <div>
      <NavBar />
      <Slider/>
      </div>
      <div>
      <h3>Filter by genre</h3>
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
      <select onChange={(e) => handleSort(e)}>
        <option value="order by" disabled>
          Sort:
        </option>
        <option value="default">All</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      </div>
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
          />
        );
      })}
      </div>
      </div>
      <br />
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
    </div>
  );
}