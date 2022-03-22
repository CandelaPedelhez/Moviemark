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
const { Grocerie, Movie, Ticket } = require("./src/db");
const { moviesdb } = require("./src/controllers/moviesdb.js");
const { groceries } = require("./src/controllers/groceries.js");
//console.log("las movies son estas:", moviesdb);
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  groceries.forEach((g) => {
    moviesdb.forEach((m) =>
      Movie.findOrCreate({
        where: {
          title: m.title,
          description: m.description,
          popularity: m.popularity,
          release_date: m.release_date,
          languages: m.languages,
          movie_genre: m.movie_genre.map((e) => e),
          img: m.img,
          vote_average: m.vote_average,
          trailer: m.trailer,
          price: m.price,
        },
      })
    );

    moviesdb.forEach((m) =>
      Ticket.findOrCreate({
        where: {
          name: m.title,
          img: m.img,
          price: m.price,
        },
      })
    );

    Product.findOrCreate({
      where: {
        name: g.name,
        price: g.price,
        description: g.description,
        stock: g.stock,
        typeGrocerie: g.typeGrocerie,
        img: g.img,
      },
    });
  });

  server.listen(3001, () => {
    console.log(`Server on port 3001`);
  });
});
