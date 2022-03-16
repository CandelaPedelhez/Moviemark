require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Movie } = require("../db");

const getMovies = async (req, res) => {
  try {
    let movies = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    let auxMovies = movies.data.results.map(async (movie) => {
      let allMovies = await Movie.findOrCreate ({
        where: {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        popularity: movie.popularity,
        release_date: movie.release_date,
        movGenres: movie.genre_ids,
        languages: movie.original_language,
        vote_average: movie.vote_average,
        img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        price: 1000
      }})
      // console.log(allMovies)
          return allMovies;
    });

    const allMoviesFound = Movie.findAll();
    return allMoviesFound;




  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getMovies };
