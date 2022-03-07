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
      <hr color="#b983ff"></hr>
      <Slider movies={movies}/>
      </div>
      <div className="filters">
      <select className="select1" onChange={(e) => handleFilteredGenre(e)}>
        <option className="option" value="genre" disabled>Filter by genre</option>
        <option value="All">All</option>
        {genres?.map((genre) => {
          return (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          );
        })}
      </select>
      <select className="select2" onChange={(e) => handleSort(e)}>
        <option className="option" value="order by" disabled>
          Sort:
        </option>
        <option value="default">All</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      </div>
      <div>        
        <h2 className="onStream">On Stream</h2>
      <div className="row__posters">
      {movies?.map((movie) => {
        return (
          <Card
            movies={"movies"}
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
        <h2 className="topRated">Top Rated</h2>
        <div className="row__posters">
          {topRated?.map((e) => {
            return (
              <Card
                movies={"topRated"}
                id={e.id}
                img={e.img}
              />
            );
            }
          )}
        </div>
      </div>
      <br />
      <div className="row">
        <h2 className="upcoming">Upcoming</h2>
        <div className="row__posters">
          {upcoming?.map((e) => {
            return (
              <Card
                movies={"upcoming"}
                id={e.id}
                img={e.img}
              />
            );
            }
          )}
        </div>
      </div>
    </div>
  );
}