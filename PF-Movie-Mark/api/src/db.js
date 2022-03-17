require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const Functions = require("./models/Functions");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Movie, Ticket, User, Grocerie, Genre, Hall, Available, Funcion } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Movie.belongsToMany(Ticket, { through: "movie_tickets" });
Ticket.belongsToMany(Movie, { through: "movie_tickets" });

Movie.belongsToMany(Genre, { through: "movie_genres" });
Genre.belongsToMany(Movie, { through: "movie_genres" });

Grocerie.belongsToMany(Ticket, { through: "groceries_tickets" });
Ticket.belongsToMany(Grocerie, { through: "groceries_tickets" });

/* Movie.belongsToMany(Ticket, { through: "movies_tickets" });
Ticket.belongsToMany(Movie, { through: "movies_tickets" }); */

Available.belongsToMany(Ticket, { through: "availables_tickets" });
Ticket.belongsToMany(Available, { through: "availables_tickets" });

Available.belongsToMany(Funcion, { through: "available_functions" });
Funcion.belongsToMany(Available, { through: "available_functions" });

Ticket.belongsToMany(Hall, { through: "ticket_halls" });
Hall.belongsToMany(Ticket, { through: "ticket_halls" });

// puede ser hasOne, revisar
//User.hasOne(Ticket, { through: "user_tickets" });
//Ticket.belongsTo(User, { through: "user_tickets" });

//Relación de uno a muchos:
User.hasMany(Ticket);

Ticket.belongsTo(User);
//Seats.hasOne(Ticket, { through: "ticket_seats" });
//Ticket.hasOne(Seats, { through: "ticket_seats" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};