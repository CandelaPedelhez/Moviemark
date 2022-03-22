const { Router } = require("express");
const router = Router();
const { Product } = require("../db");

router.post("/", async (req, res, next) => {
  const { name, price, stock, description, typeGrocerie, img } = req.body;
  //console.log

  try {
    var creatingGrocerie = await Product.findOrCreate({
      where: {
        name,
        price,
        stock,
        description,
        typeGrocerie,
        img,
      },
    });

    res.status(200).send(creatingGrocerie);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
