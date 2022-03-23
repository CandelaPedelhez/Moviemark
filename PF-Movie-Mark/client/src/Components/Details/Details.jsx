/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetails,
  getTopRatedForId,
  getUpcomingForId,
  getAvailables,
  getReviews,
} from "../../Actions";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAdd } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/index";
import CartContext from "../../Context/CartContext";
import CardReview from "./CardReview";
import styles from "./Details.module.scss";

export default function Details({ movies }) {
  const dispatch = useDispatch();
  const movieId = useParams();
  const myMovie = useSelector((state) => state.details);
  const availables = useSelector((state) => state.availables);
  const loggedIn = useSelector((state) => state.loggedIn);
  const reviews = useSelector((state) => state.reviews);
  const { addItemToCart } = useContext(CartContext);

  let userSawMovie = true; /* ACA TENEMOS QUE TRAERNOS LOS TICKETS DEL USUARIO Y COMPARARLO CON EL TITULO DE LA PELICULA */

  const makedispatch = () => {
    if (movies === "movies") {
      dispatch(getDetails(movieId.id));
    } else if (movies === "upcoming") {
      dispatch(getUpcomingForId(movieId.id));
    } else {
      dispatch(getTopRatedForId(movieId.id));
    }
  };

  let movieFunctions = [];

  if (availables.length > 0 && myMovie.length > 0) {
    function myMovieFunction() {
      movieFunctions = availables.filter((e) => e.name === myMovie[0].title);
    }
    myMovieFunction();
  }

  let funcion = [];

  function handleSelect(r) {
    r.preventDefault();
    funcion = movieFunctions.filter((e) => e.date === r.target.value);
  }

  // const handleAdd = () => {
  //   const movieFunction = myMovie.map(e => {
  //     return{
  //       id: e.id,
  //       title: e.title,
  //       description: e.description,
  //       genres: e.genres,
  //       img: e.img,
  //       price: e.price,
  //       function: funcion
  //     }
  //   })
  //   addItemToCart(movieFunction);
  //   console.log(movieFunction)
  // };

  useEffect(() => {
    makedispatch();
  }, []);

  useEffect(() => {
    dispatch(getAvailables());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <div>
        <Link to="/home">
          <button className={styles.btnBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
        <Cart />
      </div>
      <div className={styles.detail}>
        {myMovie.length === 0 ? (
          <div>
            <p>Loading ...</p>
          </div>
        ) : (
          <div className={styles.title}>
            <h1>{myMovie[0].title}</h1>
            <img src={myMovie[0].img} alt="img not found" />
            <div>
              <span>+16</span>
            </div>
            <div className={styles.genre}>
              <h3>Action</h3>
            </div>
            <div className={styles.duration}>
              <h3>120min</h3>
            </div>
            <div className={styles.div2}>
              <div>
                <h3>Description</h3>
                <p>{myMovie[0].description}</p>
              </div>
              <div>
                <h3>Released</h3>
                <p>{myMovie[0].release_date}</p>
              </div>
              <div>
                <h3>Languages</h3>
                <p>{myMovie[0].languages}</p>
              </div>
              <div>
                <h3>Popularity</h3>
                <p>{myMovie[0].popularity}</p>
              </div>
              <div>
                <h3>Vote average</h3>
                <p>{myMovie[0].vote_average}</p>
              </div>
              {movieFunctions.length > 0 ? (
                <div>
                  <h3>Functions availables:</h3>
                  <select onChange={(r) => handleSelect(r)}>
                    <option value="">Availables</option>
                    {movieFunctions.map((e) => (
                      <option value={e.date}>
                        {e.date.split("-").reverse().join("/")} at {e.hour}hs
                      </option>
                    ))}
                  </select>
                  <button>
                    <FontAwesomeIcon icon={faAdd} /> Buy Tickets
                  </button>
                </div>
              ) : (
                <p>There are not functions availables</p>
              )}
            </div>
            <div>
              {loggedIn === true && userSawMovie === true ? (
                <div>
                  <form>
                    <label>Did you enjoy the movie? Let us know!</label>
                    <input placeholder="Your name" />
                    <input placeholder="The movie was..." />
                    <button type="submit">Submit review</button>
                  </form>
                  <div>
                    {reviews ? (
                      reviews.map((e) => (
                        <div>
                          <CardReview
                            username={e.username}
                            description={e.description}
                            score={e.score}
                          />
                        </div>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  {reviews ? (
                    reviews.map((e) => (
                      <div>
                        <CardReview
                          username={e.username}
                          description={e.description}
                          score={e.score}
                        />
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
