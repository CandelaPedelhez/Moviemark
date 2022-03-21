const {User} = require("../../db.js");

const getAdmin = async (req, res, next) => {
    const { id } = req.params;
    try {
        let admin = await User.findOne({
            where: {
                id: id,
                role: 'admin'
            }
        });
        console.log("Admin in: getAdmin: ",admin);
        if(!admin){
            return res.status(404).json({
                message: "Sorry, not found :("
            });
        }else{
            // return res.status(200).send(admin);}
            next();
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: "What are you trying to do?" });   
    }
};
///////////////////////////////////
const getAllAdmin = async (req, res, next) => {
    try {
        let allAdminsFound = await User.findAll({where: {role: 'admin'}});
        console.log("All Admins: ", allAdminsFound);
        res.status(200).send(allAdminsFound);        
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: "Sorry, no admins found :(" });   
        
    }
};

module.exports = {
    getAdmin,
    getAllAdmin
}