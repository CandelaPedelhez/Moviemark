const { Router } = require("express");
const router = Router();
const { Grocerie } = require("../db");
const { groceries } = require("../controllers/groceries.js");

router.get("/", async (req, res, next) => {
  try {
    console.log(groceries);
    groceries.forEach((g) => {
      Grocerie.findOrCreate({
        where: {
          name: g.name,
          price: g.price,
          /* stock: g.stock, */ /* Para que no rompa, en controller de groceries está comentado stock */
          description: g.description,
          typeGrocerie: g.type,
          img: g.img,
        },
      });
    });
    const allGroceries = await Grocerie.findAll();
    return res.status(200).send(allGroceries);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
