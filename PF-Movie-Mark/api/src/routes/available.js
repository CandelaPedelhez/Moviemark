const { Router } = require("express");
const router = Router();
const { Available } = require("../db");
//const { getFunctions } = require("../controllers/functions.js");

router.post("/", async (req, res) => {
    let {name, date, hour, hall, hallTickets} = req.body;
    try{
      let availableCreated = await Available.create({name, date, hour, hall, hallTickets})
      res.status(200).send(availableCreated);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
