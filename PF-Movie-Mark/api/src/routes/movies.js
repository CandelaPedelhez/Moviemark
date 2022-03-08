const { Router } = require("express");
const router = Router();
const { Movie } = require("../db");
const { getMovies } = require("../controllers/movies");

// -- All pelis
router.get("/", async (req, res) => {
  const { title } = req.query;
  let allMovies = await getMovies();

  try {
    if (title) {
      let movieByName = await allMovies.filter(
        (nameMovie) => nameMovie.title.toLowerCase() === title.toLowerCase()
      );

      movieByName.length
        ? res.status(200).send(movieByName)
        : res.status(404).send("Sorry, Movie not found :(");
    } else {
      res.status(200).send(allMovies);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let movieId = await getMovies();
  try {
    if (id) {
      //console.log(id);
      let movId = movieId.filter(
        (movieFound) => movieFound.id.toString() === id
      );
      movId.length
        ? res.status(200).send(movId)
        : res.status(404).send({ msg: "Movie not found :(" });
    }
  } catch (error) {
    console.log(error.message);
  }
}); //Cierre get /:id

module.exports = router;
