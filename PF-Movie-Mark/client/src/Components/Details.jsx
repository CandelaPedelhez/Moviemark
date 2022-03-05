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
    }, [dispatch])

    return (
        <div >
            <h1>{myMovie.title}</h1>
            <img src={myMovie.img} />
            <div>
                <h3>Description</h3>
                <p >{myMovie.description}</p>
            </div>
            <div>
                <h3>Released</h3>
                <p >{myMovie.release_date}</p>
            </div>
            <div>
                <h3>Genres</h3>
                    {myMovie.genres.map(e => (<li>{e.name}</li>))}
            </div>
            <div>
                <h3>Languages</h3>
                {myMovie.languages.map(e => (<li>{e}</li>))}
            </div>
            <div>
                <h3>Popularity</h3>
                <p>{myMovie.popularity}</p>
            </div>
            <div>
                <h3>Vote average</h3>
                <p>{myMovie.vote_average}</p>
            </div>
        </div>
    )
}