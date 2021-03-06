const { Router } = require("express");
const router = Router();
const { Movie } = require("../db");

const { getTopRated } = require("../controllers/top_rated");

// -- All pelis
router.get("/", async (req, res) => {
  try {
    let allMovies = await getTopRated();
    //console.log(allMovies);
    return res.status(200).send(allMovies);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let movieId = await getTopRated();
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
