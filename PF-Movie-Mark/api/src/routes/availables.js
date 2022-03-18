const { Router } = require("express");
const router = Router();
const { Available } = require("../db");
const { availables } = require("../controllers/availables.js");
//const { getFunctions } = require("../controllers/functions.js");

router.get("/", async (req, res, next) => {
  //console.log("holis:", availables);

  try {
    availables.map((a) =>
      Available.findOrCreate({
        where: {
          name: a.name,
          date: a.date,
          hour: a.hour,
          hall: a.hall,
          hallTickets: a.tickets,
        },
      })
    );
    const allAvailables = await Available.findAll();
    res.status(200).send(allAvailables);
  } catch (error) {
    console.log(error);
    //next(error);
  }
});

module.exports = router;
