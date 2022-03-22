const { Router } = require("express");
const router = Router();
const { Movie, Genre } = require("../db");
const { getGenres } = require("../controllers/genres");
const { moviesdb } = require("../controllers/moviesdb");

router.get("/", async (req, res) => {
  const { title } = req.query;

  try {
    if (title) {
      let movieByName = moviesdb.filter(
        (nameMovie) => nameMovie.title.toLowerCase() === title.toLowerCase()
      );

      movieByName.length
        ? res.status(200).send(movieByName)
        : res.status(404).send("Sorry, Movie not found :(");
    } else {
      const result = await Movie.findAll();
      res.status(200).send(result);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/filter/:genre", async (req, res) => {
  const { genre } = req.params;
  const getAllMoviesByGenre = moviesdb.filter((e) =>
    e.movie_genre.includes(genre)
  );
  res.status(200).send(getAllMoviesByGenre);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let all = await Movie.findAll();
  try {
    if (id) {
      let movieId = all.filter((founded) => founded.id.toString() === id);
      movieId.length
        ? res.status(200).send(movieId)
        : res.status(404).send({ msg: "Movie not found :(" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
