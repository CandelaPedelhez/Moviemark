/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../Actions/index";
import { useEffect } from "react";

export default function Details() {

  const dispatch = useDispatch();
  const movieId = useParams();
  const myMovie = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(movieId.id));
  }, [dispatch]);

  return (
    <div>
      {
        (myMovie.length === 0) ?
          <div >
            <p >Loading ...</p>
          </div>
          :
          <div>
            <h1>{myMovie[0].title}</h1>
            <img src={myMovie[0].img} alt="img not found" />
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
          </div>
      }
    </div>
  );
}
