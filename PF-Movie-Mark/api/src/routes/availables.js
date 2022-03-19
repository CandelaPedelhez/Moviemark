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

router.delete("/deleteAvailable", (req, res, next) => {
let { id } = req.body
  Grocerie.findOne( {where: {id : id} } )
    .then((selectedGrocerie) => {
      selectedGrocerie
        .destroy({
          where: {
            id: id,
          },
        })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;

