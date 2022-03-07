import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ movies, id, title, img, genres, vote_average }) {
  return (
    <div>
      {
        movies==="movies"?<Link to={`/movies/${id}`}>
        <h1>{title}</h1>
        <img className="card "src={img} alt="img not found" style={{ width: "180px", height: "280px"}} />
      </Link>:<></>
      }
      {
        movies==="upcoming"?<Link to={`/upcoming/${id}`}>
        <h1>{title}</h1>
        <img className="card "src={img} alt="img not found" style={{ width: "180px", height: "280px"}} />
      </Link>:<></>
      }
      {
        movies==="topRated"?<Link to={`/toprated/${id}`}>
        <h1>{title}</h1>
        <img className="card "src={img} alt="img not found" style={{ width: "180px", height: "280px"}} />
      </Link>:<></>
      }
      {/*genres?.map((genre) => (
        <h2 key={genre.name}>{genre.name}</h2>
      ))*/}
      <h3 key={vote_average}>{vote_average}</h3>
    </div>
  );
}
