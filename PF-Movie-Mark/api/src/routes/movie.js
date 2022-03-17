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
    movGenres,
    price
  } = req.body;

  const id=Math.floor((Math.random()*1000000)+1);

  try {
    var creatingMovie = await Movie.findOrCreate({
      where: {
        id:id,
        title,
        img,
        description,
        popularity,
        release_date,
        languages,
        vote_average,
        movGenres,
        price
      },
    });

    res.status(200).send(creatingMovie);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
