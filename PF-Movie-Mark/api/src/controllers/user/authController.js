require("dotenv").config();
const {User} = require('../../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.js');

//Registro -- creación de usuario
const signUp = async (req, res) =>{
    try {
        //encripto pass:
        let passwordEncrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
            // if(role === "user"){
                await User.create({
                    name:     req.body.name, 
                    lastName: req.body.lastName,
                    email:    req.body.email.trim().toLowerCase(),
                    password: passwordEncrypted,
                    role:     "user",
                    
                    // authorization: false,
                }).then(user => {
                    //Cuando un usuario es creado, creo el token:
                    let token = jwt.sign({user: user}, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({ 
                        user: user,
                        token: token
                    });
                }).catch((err) => {
                    res.status(500).json(err);
                });
    } catch (error) {
        console.log(error.message);
    }

};//END SIGNUP

//Login:
const signIn = async (req, res) => {
    let {email, password} = req.body;

    //Busco el email del user:
    await User.findOne({
        where: {email: email}
    }).then(user => {
        if(!user){
            res.status(404).json({msg: "Email not found :("})
        }else{
            //Comparo las password, la que recibo y la que estaba en la db
            if(bcrypt.compareSync(password, user.password)){
                //Creo el token:
                let token = jwt.sign({user: user}, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    user: user,
                    token: token
                })
            }else{
                //Msg unauthorized
                res.status(401).json({msg: "Incorrect password :("})
            }
        }
    })

};//END SIGNIN

// GET /api/user
// Obtener todos los usuarios



module.exports = {
    signIn,
    signUp
}