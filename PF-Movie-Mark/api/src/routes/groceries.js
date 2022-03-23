const { Router } = require("express");
const router = Router();
const { Product } = require("../db");
const { Grocerie } = require("../db");
const { getAdmin } = require("../controllers/admin/getAdmins.js");

router.get("/getAll", async (req, res, next) => {
  try {
    let allGroceries = await Product.findAll();
    return res.status(200).send(allGroceries);
  } catch (error) {
    res.status(500).send(eror.message);
  }
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

//Ruta para actualizar stock:
router.put("/updateStock/:id", async (req, res, next) => {
  const { id } = req.params;
  let { stock } = req.body;

  Grocerie.findOne({ where: { id: id } })

    .then((dataTicket) => {
      dataTicket
        .update(
          {
            stock: stock,
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

//Ruta para actualizar precio:
router.put("/updatePrice/:id", async (req, res, next) => {
  const { id } = req.params;
  let { price } = req.body;

  Grocerie.findOne({ where: { id: id } })
    .then((dataTicket) => {
      dataTicket
        .update(
          {
            price: price,
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
//   Grocerie.findByPk(req.params.id)
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
