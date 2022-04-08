/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetails,
  getTopRatedForId,
  getUpcomingForId,
  getAvailables,
  getReviews,
  postReview,
} from "../../Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAdd } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/index";
import CartContext from "../../Context/CartContext";
import CardReview from "./CardReview";
import styles from "./Details.module.scss";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function Details({ movies }) {
  const dispatch = useDispatch();
  const movieId = useParams();
  const myMovie = useSelector((state) => state.details);
  const availables = useSelector((state) => state.availables);

  //const loggedIn = useSelector((state) => state.loggedIn);
  //const reviews = useSelector((state) => state.reviews);
  const [funcionCarrito, setFuncionCarrito] = useState({});

  const { addTicketToCart, tickets } = useContext(CartContext);
  const [value, setValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  //const user = useSelector((state) => state.user);

  /* ACA TENEMOS QUE TRAERNOS LOS TICKETS DEL USUARIO Y COMPARARLO CON EL TITULO DE LA PELICULA */

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);

  function handleClick(e) {
    setValue(e);
    setInput({
      ...input,
      score: value,

      //movieId: myMovie[0].id,
    });
  }

  function handleHover(e) {
    setHoverValue(e);
  }

  function handleMouseLeave() {
    setHoverValue(undefined);
  }

  const [input, setInput] = useState({
    /* input = estado local */
    name: "",
    useReview: "",
    score: "",
  });

  function handleChange(e) {
    console.log("este es el input", input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("holi", input);
    if (input.name && input.useReview && input.score) {
      dispatch(postReview(input));
      setInput({
        name: "",
        useReview: "",
        score: "",
      });
    } else {
      alert("You should check the score and review fields!");
    }
  }

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
      movieFunctions = availables.filter((e) => e.name === myMovie[0].name);
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


  function handleOption(e) {
    setFuncionCarrito({
      ...funcionCarrito,
      funcionCarrito: e,
    });
    console.log("1111111111111", funcionCarrito);
  }


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

          <div className={styles.detail_child}>
            <div className={styles.dh1}>
              <h1>{myMovie[0].name}</h1>
            </div>
            <div className={styles.image}>
              <img src={myMovie[0].img} alt="img not found" />
            </div>
            <div className={styles.edad}>

              <span>+16</span>
            </div>
            <div className={styles.genre}>
              <h3>Action</h3>
            </div>
            <div className={styles.duration}>
              <h3>120min</h3>
            </div>
            {movieFunctions.length > 0 ? (
              <div>
                <select
                  className={styles.select2}
                  onChange={(r) => handleSelect(r)}
                >
                  <option value="">Choose function here</option>
                  {movieFunctions.map((e) => (
                    <option
                      value={e.date}
                      name={e}
                      onChange={(r) => handleOption(r)}
                    >
                      {e.date.split("-").reverse().join("/")} at {e.hour}hs
                    </option>
                  ))}
                </select>

                <button
                  className={styles.buttdet}
                  onClick={() => addTicketToCart(funcion[0])}
                >
                  <FontAwesomeIcon icon={faAdd} /> Buy Tickets
                </button>
                {/* ) : (
            <button>En el carrito</button>
          )} */}
              </div>
            ) : (
              <p>There are not functions availables</p>
            )}

            <div className={styles.div2}>
              <h3>Description</h3>
              <p>{myMovie[0].description}</p>
              <div className={styles.video}>
                <h3>Trailer</h3>
                <ReactPlayer
                  url={myMovie[0].trailer}
                  muted={false}
                  playing={true}
                />
              </div>

              <h3>Released</h3>
              <p>{myMovie[0].release_date}</p>

              <h3>Languages</h3>
              <p>{myMovie[0].languages}</p>

              <h3>Popularity</h3>
              <p>{myMovie[0].popularity}</p>

              <h3>Vote average</h3>
              <p>{myMovie[0].vote_average}</p>
            </div>
            <div>
              {/*<div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label>Did you enjoy the movie? Let us know!</label>
                  <div>
                    {stars.map((e, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                          color={
                            (hoverValue || value) > index
                              ? colors.orange
                              : colors.grey
                          }
                          onClick={(e) => handleClick(index + 1)}
                          onMouseOver={(e) => handleHover(index + 1)}
                          onMouseLeave={() => handleMouseLeave()}
                        />
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <textarea
                    placeholder="The movie was..."
                    name="useReview"
                    onChange={(e) => handleChange(e)}
                  />

                  <button type="submit">Submit review</button>
                </form>
                  </div>*/}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
