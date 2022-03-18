const { Router } = require("express");
const router = Router();
const { Available } = require("../db");
const { availables } = require("../controllers/availables.js");

router.get("/", async (req, res, next) => {
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
    console.log(error.message);
  }
});

module.exports = router;

