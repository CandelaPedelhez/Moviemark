const {Ticket} = require("../../db.js");

const getTickets = async (req, res) => {
  const tickets = await Ticket.findAll();

  if (tickets) {
    res.json({ tickets });
  } else {
    res.json({ mensaje: "No hay tickets" });
  }
};

module.exports = getTickets;
