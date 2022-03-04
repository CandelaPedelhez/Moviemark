const { Router } = require("express");
const router = Router();
const { getMovies } = require("../controllers/movies");
const { Movie } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allMovies = await getMovies();
    return res.status(200).send(allMovies);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
