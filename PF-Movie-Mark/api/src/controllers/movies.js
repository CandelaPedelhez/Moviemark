require("dotenv").config();
//const { API_KEY } = process.env;
const axios = require("axios");
//const BASE_URL = "https://api.themoviedb.org/3";
const { Movie } = require("../db");
const { all } = require("../routes/availables");
//const { Genre } = require("../db");
const { allMovies } = require("./allMovies.js");

/*const getMovies = async (req, res) => {
  try {
    let movies = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    movies.data.results.map(async (movie) => {
      let aux = await Movie.findOne({
        where: { id: movie.id },
      });
      if (!aux) {
        let created = await createMovie(
          movie.id,
          movie.title,
          movie.overview,
          movie.popularity,
          movie.release_date,
          movie.original_language,
          movie.genre_ids,
          movie.vote_average,
          "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          1000
        );
        let movGenres = movie.genre_ids;
        let genresdb = await Genre.findAll({
          where: { id: movGenres },
        });
        created.addGenre(genresdb);
      }
    });
    const allMoviesFound = await Movie.findAll();
    return allMoviesFound;

    
  
  } catch (error) {
    console.log(error.message);
  }
}*/

/*async function createMovie(
  id,
  title,
  description,
  popularity,
  release_date,
  languages,
  movGenres,
  vote_average,
  img,
  price
) {
  let onemovie = await Movie.create({
    id,
    title,
    description,
    popularity,
    release_date,
    languages,
    movGenres,
    vote_average,
    img,
    price,
  });
  return onemovie;
}*/

//module.exports = { getMovies };
