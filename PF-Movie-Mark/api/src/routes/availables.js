const { Router } = require("express");
const router = Router();
const { Available, Funcion } = require("../db");
const { availables } = require("../controllers/availables.js");
//const { getFunctions } = require("../controllers/functions.js");

router.get("/", async (req, res, next) => {
  //console.log("holis:", availables);

  try {
    availables.map((a) =>
      Available.findOrCreate({
        where: {
          name: a.name,
        },
      })
    );

    const allAvailables = await Available.findAll({
      include: {
        model: Funcion,
        attributes: ["date", "hour", "hall", "hallTickets"],
        through: {
          attributes: [],
        },
      },
    });

    availables.map(async (e) => {
      let availableMovie = await Available.findOne({
        where: {
          name: e.name,
        },
      });
      e.funciones.map(async (r) => {
        let [funcionMovie, created] = await Funcion.findOrCreate({
          where: {
            date: r.date,
            hour: r.hour,
            hall: r.hall,
            hallTickets: r.tickets,
          },
        });
        //console.log("funciones:", funcionMovie);
        availableMovie.addFuncion(funcionMovie);
      });
    });

    //getFunctions();

    res.status(200).send(allAvailables);
  } catch (error) {
    console.log(error);
    //next(error);
  }
});

module.exports = router;
