const {Movie, Review, User} = require("../../db.js");

const postReview = async (req, res) => {
    const {userId, movieId,  useReview,
        score,} = req.body;
        try {
            const movieFound = Movie.findOne({
                where: {
                    id: movieId
                }
            })
            if(!movieFound){
                return res.status(404).send({message: "Movie not found :("});
            }

            const userFound = await User.findOne({
                where: {
                    id: userId
                }
            });

            if(!userFound){
                return res.status(404).send({message: "User not found :("})
            }

            

            const createReview = await Review.create({
                where: {
                    score,
                    useReview,
                    FKmovieId: FKmovieId.id,
                    FKuserId: FKuserId.id
                }
            });

            res.status(200).send(createReview, {message: "Successfuly created :)"})

            
        } catch (error) {
            console.log(error.message);
        }
}

module.exports = {
    postReview
}