const { Router } = require("express");
const router = Router();
const { Ticket, Available, Grocerie } = require("../db");

//// Relación de availables y groceries:

router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  let rs = await Ticket.findAll({
    where: {'userId': id},
  });
  console.log("Rs en ticket: ",rs)
});



//Setear cantidad de tickets:
router.put('/updateTicket/:id',async (req, res, next) => {
    Ticket.findByPk(req.params.id)
    .then(dataTicket => {
      dataTicket.update({
        stock: req.body.stock
      }, {
          where: {
              id: req.params.id
           }
        })
        .then(response => {
        res.status(200).json(response)      
      })
      .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
  });

module.exports = router;