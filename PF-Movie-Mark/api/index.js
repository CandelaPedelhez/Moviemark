//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {Grocerie} = require("./src/db");
const {groceries} = require("./src/controllers/groceries.js");


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {

 groceries.forEach((g) => {
      Grocerie.findOrCreate({
        where: {
          name: g.name,
          price: g.price,
          //stock: g.stock, /* Para que no rompa, en controller de groceries está comentado stock */
          description: g.description,
          typeGrocerie: g.type,
          img: g.img,
        },
      });
    });  


  server.listen(3001, () => {
    console.log(`Server on port 3001`); // eslint-disable-line no-console
  });
});
