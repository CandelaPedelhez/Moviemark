const { Router } = require("express");
const router = Router();
const { Movie, Genre } = require("../db");
const { getGenres } = require("../controllers/genres");
//const { moviesdb } = require("../controllers/moviesdb");

router.get("/", async (req, res) => {
  const { title } = req.query;

  try {
    if (title) {
      let movieByName = await moviesdb.filter(
        (nameMovie) => nameMovie.title.toLowerCase() === title.toLowerCase()
      );

      movieByName.length
        ? res.status(200).send(movieByName)
        : res.status(404).send("Sorry, Movie not found :(");
    } else {
      const result = await Movie.findAll();
      //console.log("el resultado del findAll:", result);
      res.status(200).send(result);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let all = await Movie.findAll();
  //console.log("este es el id de insomnia:", id);
  try {
    if (id) {
      let movieId = all.filter((founded) => founded.id.toString() === id);
      //console.log(movieId);
      //console.log("estas son las movies:", moviesdb);
      //console.log("esta es la movieId:", movieId);
      movieId.length
        ? res.status(200).send(movieId)
        : res.status(404).send({ msg: "Movie not found :(" });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
