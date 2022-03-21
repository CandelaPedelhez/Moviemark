const { Router } = require("express");
const router = Router();
const { Review } = require("../db");

 /*  NO SE NI CREO QUE FUNCIONE */

router.get("/", async (req, res, next) => {
    try {
      Review.findAll({
          where: {
            name: a.name,
            date: a.date,
            hour: a.hour,
            hall: a.hall,
            hallTickets: a.tickets,
          },
        })
      const allReviews = await Review.findAll();
      res.status(200).send(allReviews);
    } catch (error) {
      console.log(error.message);
    }
  });

  module.exports = router;