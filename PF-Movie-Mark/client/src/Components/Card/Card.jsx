import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.scss";
//import error from "./images/error.jpg";

export default function Card({ movies, id, title, img, genres, vote_average }) {
  return (
    <div>
      {movies === "movies" ? (
        <Link to={`/movies/${id}`}>
          <h1>{title}</h1>
          <img
            alt="img not found"
            className={style.card}
            src={img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/9556d16312333.5691dd2255721.jpg";
            }}
            style={{ width: "240px", height: "340px" }}
          />
        </Link>
      ) : (
        <></>
      )}
      {movies === "upcoming" ? (
        <Link to={`/upcoming/${id}`}>
          <h1>{title}</h1>
          <img
            className="card "
            src={img}
            alt="img not found"
            style={{ width: "180px", height: "280px" }}
          />
        </Link>
      ) : (
        <></>
      )}
      {movies === "topRated" ? (
        <Link to={`/toprated/${id}`}>
          <h1>{title}</h1>
          <img
            className="card "
            src={img}
            alt="img not found"
            style={{ width: "180px", height: "280px" }}
          />
        </Link>
      ) : (
        <></>
      )}
      {/*genres?.map((genre) => (
        <h2 key={genre.name}>{genre.name}</h2>
      ))*/}
      <h3 key={vote_average}>{vote_average}</h3>
    </div>
  );
}
