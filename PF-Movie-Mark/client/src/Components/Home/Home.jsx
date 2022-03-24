/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartContext from '../../Context/CartContext';
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card.jsx";
import Slider from "../Slider/Slider.jsx";
import styles from "./Home.module.css";
import {
  getMovies,
  filterMovieByGenre,
  getGenres,
  getUpcoming,
  getTopRated,
  orderBy,
} from "../../Actions";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);
  const [order, setOrder] = useState("");
  //const [ticket, setTicket] = useState([]);
  const upcoming = useSelector((state) => state.upcoming);
  const topRated = useSelector((state) => state.topRated);
  const { addTicketToCart, tickets } = useContext(CartContext);


  function handleFilteredGenre(e) {
    console.log("tickets",tickets)
    e.preventDefault();
    dispatch(filterMovieByGenre(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setOrder(`ordenado, ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getMovies(movies));
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
        <Slider />
      </div>
      <div className={styles.filters}>
        <select
          className={styles.select1}
          onChange={(e) => handleFilteredGenre(e)}
        >
          <option className={styles.option} value="genre" disabled>
            Filter by genre
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
        <select className={styles.select2} onChange={(e) => handleSort(e)}>
          <option className={styles.option} value="order by" disabled>
            Sort:
          </option>
          <option value="default">All</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <h2 className={styles.onStream}>On Stream</h2>
        <div className={styles.row__posters}>
          {movies.map((movie, i) => 
            
             (
              <div key={i}>
              <Card
                movies={"movies"}
                id={movie.id}
                // title={movie.name}
                //genres={movie.genres}
                // vote_average={movie.vote_average}
                img={movie.img}
              />

</div>

            
          ))}
        </div>
      </div>
      <br />
      <div classname={styles.row}>
        <h2 className={styles.topRated}>Top Rated</h2>
        <div className={styles.row__posters}>
          {topRated?.map((e) => {
            return <Card movies={"topRated"} id={e.id} img={e.img} />;
          })}
        </div>
      </div>
      <br />
      <div className={styles.row}>
        <h2 className={styles.upcoming}>Upcoming</h2>
        <div className={styles.row__posters}>
          {upcoming?.map((e) => {
            return (
              <Card key={e.id} movies={"upcoming"} id={e.id} img={e.img} />
            );
          })}
        </div>
      </div>
      <div className={styles.button_about}>
        <Link to="/aboutUs">
          <button>About us</button>
        </Link>
      </div>
    </div>
  );
}
