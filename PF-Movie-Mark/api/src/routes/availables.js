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

router.delete("/deleteAvailable/:id", (req, res, next) => {

  Available.findByPk(req.params.id)
    .then((selectedAvailable) => {
      selectedAvailable
        .destroy({
          where: {
            id: req.params.id,
          },
        })
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
});

router.put("/update", async (req, res, next) => {
  let { id , hallTickets } = req.body

  Available.findOne({ where: { id: id } })
    .then((dataAvailable) => {
      dataAvailable
        .update(
          {
            hallTickets: hallTickets
          },
          {
            where: {
              id: id,
            },
          }
        )
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;

