const { Router } = require("express");
const router = Router();
const { Review } = require("../db");

router.post("/", async (req, res) => {
  let { useReview, score } = req.body;
  try {
    let newReview = await Review.findOrCreate({
      where: {
        useReview,
        score,
      },
    });

    res.status(200).send(newReview);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
