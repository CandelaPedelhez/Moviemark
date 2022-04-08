const { Movie, Review, User, Ticket } = require("../../db.js");

const postReview = async (req, res) => {
  const { name, movieId, useReview, score } = req.body;
  try {
    const movieFound = await Movie.findOne({
      where: {
        id: movieId,
      },
    });
    console.log("Movie found: ", movieFound);
    if (!movieFound) {
      return res.status(404).send({ message: "Movie not found :(" });
    }

    /*const userFound = await User.findOne({
      where: {
        id: userId,
      },
    });*/
    // console.log("User found: ", userFound);
    /*if (!userFound) {
      return res.status(404).send({ message: "User not found :(" });
    }*/

    /*const created = await Review.findOne({
      where: {
        FKmovieId: movieFound.id,
        //FKuserId: userFound.id,
      },
      attributes: ["isCreatedReview"],
    });*/

    try {
      const createReview = await Review.create({
        score,
        useReview,
        //FKmovieId: movieFound.id,
        //FKuserId: userFound.id,
        movieId: movieId,
        name: name,
        isCreatedReview: true,
      });
      console.log("Review de peli: ", createReview);
      res.status(200).send({ createReview, message: "Succesfully created :)" });
    } catch (error) {
      res.status(404).send(error);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  postReview,
};
