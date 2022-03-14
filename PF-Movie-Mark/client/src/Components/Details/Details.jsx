/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, getTopRatedForId, getUpcomingForId, getAvailables } from "../../Actions";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faAdd } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/index";
import { CartContext } from "../../Context/CartContext";
import "./Details.css";

export default function Details({ movies }) {
  const dispatch = useDispatch();
  const movieId = useParams();
  const myMovie = useSelector((state) => state.details);
  const availables = useSelector((state) => state.availables)
  const { addItemToCart } = useContext(CartContext);
  
  
  const makedispatch = () => {
    if (movies === "movies") {
      dispatch(getDetails(movieId.id));
    } else if (movies === "upcoming") {
      dispatch(getUpcomingForId(movieId.id));
    } else {
      dispatch(getTopRatedForId(movieId.id));
    }
  };
  

  let movieFunctions = []
  
  if(availables.length > 0 && myMovie.length > 0){
    function myMovieFunction(){
      movieFunctions = availables.filter(e => e.name === myMovie[0].title)
    } myMovieFunction()
  }
  

  
  let funcion = []
  
  function handleSelect(r){
    r.preventDefault();
    console.log("TARGET", r.target.value)
    funcion = movieFunctions[0].funcions.filter(e => e.date === r.target.value)
    console.log(funcion)
  }
  
  const handleAdd = () => {
    const movieFunction = myMovie.map(e => {
      return{
        id: e.id,
        title: e.title,
        description: e.description,
        genres: e.genres,
        img: e.img,
        price: e.price,
        function: funcion
      }
    })
    addItemToCart(movieFunction);
    console.log(movieFunction)
  };

  
  useEffect(() => {
    makedispatch();
  }, []);
  
  useEffect(() => {
    dispatch(getAvailables());
  }, [dispatch])
  
  return (
    <>
      <div>
        <Link to="/home">
          <button className="btnBack">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
        <Cart />
      </div>
      <div className="detail">
        {myMovie.length === 0 ? (
          <div>
            <p>Loading ...</p>
          </div>
        ) : (
          <div>
            <h1>{myMovie[0].title}</h1>
            <img src={myMovie[0].img} alt="img not found" />
            <div>
              <span>+16</span>
            </div>
            <div className="genre">
              <h3>Action</h3>
            </div>
            <div className="duration">
              <h3>Duration:</h3>
              <b>120min</b>
            </div>
            <div className="div2">
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
              {
                (movieFunctions.length > 0) ? 
                <div>
                  <h3>Functions availables:</h3>
                <select onChange={r => handleSelect(r)}>
                  <option value="">Availables</option>
                  {
                    movieFunctions[0].funcions.map(e => <option value={e.date}>{e.date} at {e.hour}hs</option>) /* TODAVÍA NO FUNCIONA */
                  }
                </select>
              <button onClick={() => handleAdd()}>
                <FontAwesomeIcon icon={faAdd} /> Buy Tickets
              </button>
              </div>

                  : <p>There are not functions availables</p>
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
}