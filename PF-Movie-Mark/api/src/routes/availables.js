const { Router } = require("express");
const router = Router();
const { Available } = require("../db");
const { availables } = require("../controllers/availables.js");

router.get("/", async (req, res, next) => {
  //console.log("holis:", availables);
  try {
    availables?.map((a) => {
      Available.findOrCreate({
        where: {
          movie_title: a.name,
          date: a.functions.map((e) => e.date),
          hour: a.functions.map((e) => e.hour),
          hall: a.functions.map((e) => e.hall),
          hall_tickets: a.functions.map((e) => e.hall_tickets),
        },
      });
    });

    const allAvailables = await Available.findAll();
    return res.status(200).send(allAvailables);
  } catch (error) {
    console.log(error);
    //next(error);
  }
});

module.exports = router;
