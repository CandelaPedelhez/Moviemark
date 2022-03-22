const { Router } = require("express");
const router = Router();
const { Product } = require("../db");

router.get("/getAll", async (req, res, next) => {
  try {
    let allGroceries = await Product.findAll();
    return res.status(200).send(allGroceries);
  } catch (error) {}
});

router.put("/update", async (req, res, next) => {
  let { id, price, stock } = req.body

  Product.findOne( {where: {id : id} } )
    .then((dataTicket) => {
      dataTicket
        .update(
          {
            price: price,
            stock: stock
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


router.delete("/deleteGrocerie/:id", (req, res, next) => {

  Product.findByPk(req.params.id)
    .then((selectedGrocerie) => {
      selectedGrocerie
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

module.exports = router;

/* router.put("/gro/:id", async (req, res, next) => {
  Grocerie.findByPk(req.params.id)
    .then((dataTicket) => {
      dataTicket
        .update(
          {
            price: req.body.price,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
}); */
