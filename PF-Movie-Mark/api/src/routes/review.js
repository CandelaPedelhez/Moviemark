const { Router } = require("express");
const router = Router();
const { Review} = require("../db");
const {postReview} = require('../controllers/reviews/review.js');


//Create review: 
router.post('/create', postReview);
//End create review

//Get all reviews:
router.get('/getReview', async (req, res, next) => {
  try {
    const allReviews = await Review.findAll();
    res.status(200).send(allReviews)
    
  } catch (error) {
    console.log(error.message);    
  }
});
//End all reviews

//Get review by ID:
router.get('/getReviewId/:id', async (req, res, next) => {
  const { id } = req.params;
  let allReviewsFound = await Review.findAll();
  try {
    if(id){
        // console.log("Review found: ",id);
        let reviewId = allReviewsFound.filter((reviewFound) => reviewFound.id.toString() === id);

        reviewId.length
          ? res.status(200).send(reviewId)
          : res.status(404).send({ msg: "Sorry, review not found :(" });
      }    
  } catch (error) {
    console.log(error.message);    
  }
});

router.post('/create', postReview);

module.exports = router;
