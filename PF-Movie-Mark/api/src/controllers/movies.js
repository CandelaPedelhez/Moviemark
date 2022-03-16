require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Movie } = require("../db");

const getMovies = async () => {
  try {
    let movies = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    let auxMovies = movies.data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        popularity: movie.popularity,
        release_date: movie.release_date,
        genres: movie.genre_ids,
        languages: movie.original_language,
        vote_average: movie.vote_average,
        img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        price: 1000,
      };
    });

    return auxMovies;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getMovies };
