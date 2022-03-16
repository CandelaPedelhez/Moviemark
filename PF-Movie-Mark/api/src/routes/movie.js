const { Router } = require("express");
const router = Router();
const { Movie } = require("../db");

router.post("/", async (req, res, next) => {
  const {
    title,
    img,
    description,
    popularity,
    release_date,
    languages,
    vote_average,
  } = req.body;

  try {
    var creatingMovie = await Movie.findOrCreate({
      where: {
        title,
        img,
        description,
        popularity,
        release_date,
        languages,
        vote_average,
      },
    });

    res.status(200).send(creatingMovie);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
