const { Router } = require("express");
const router = Router();
const { Review} = require("../db");
const {postReview} = require('../controllers/reviews/review.js');


router.post("/", async (req, res) => {
  let { username, description, score } = req.body;
  try {
    let newReview = await Review.findOrCreate({
      where: {
        username,
        description,
        score
      },
    });

    res.status(200).send(newReview);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/create', postReview);

module.exports = router;
