const { Router } = require("express");
const router = Router();
const { Groceries } = require("../db");
const { groceries } = require("../controllers/groceries.js");

router.get("/", async (req, res, next) => {
  try {
    groceries.forEach((g) => {
      Groceries.findOrCreate({
        where: {
          id: g.id,
          name: g.name,
          price: g.price,
          stock: g.stock,
          description: g.description,
          typeGrocerie: g.type,
          img: g.img,
        },
      });
    });
    const allGroceries = await Groceries.findAll();
    return res.status(200).send(allGroceries);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
