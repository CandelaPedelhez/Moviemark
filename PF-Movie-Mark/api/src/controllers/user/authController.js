require("dotenv").config();
const {User} = require('../../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET, 
      JWT_EXPIRES_IN,
      JWT_ROUNDS} = process.env;

const signUp = async (req, res) =>{
    try {
        const user = await User.findOne({
            where:{email:req.body.email}
        })
        if(user){
            return res.status(200).json({msg: "Email registered"})
        }
        let passwordEncrypted = bcrypt.hashSync(req.body.password, Number.parseInt(JWT_ROUNDS));
                await User.create({
                    name:     req.body.name, 
                    lastName: req.body.lastName,
                    email:    req.body.email.trim().toLowerCase(),
                    password: passwordEncrypted,
                    role:     "user",
                    allowed: "true",
                    // authorization: false,
                }).then(user => {
                    let token = jwt.sign({user: user}, JWT_SECRET, {
                        expiresIn: JWT_EXPIRES_IN
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
    
    await User.findOne({
        where: {email: email}
    }).then(user => {
        if(!user){
            res.status(200).json({msg: "Email not found :("})
        }else{
            if(bcrypt.compareSync(password, user.password)){
                if(user.allowed===false){
                    return res.status(200).json({msg: "Revoke"})
                }
                //Creo el token:
                let token = jwt.sign({user: user}, JWT_SECRET, {
                    expiresIn: JWT_EXPIRES_IN
                });
                res.json({
                    token: token
                })
            }else{
                res.status(200).json({msg: "Incorrect password :("})
            }
        }
    })

};//END SIGNIN

const loginGoogle = async (req, res, next) => {
    const {name, lastName, email} = req.body;
    try {
        let user = await User.findOne({
            where: {email}
        });

        if(!user){
            user  = await User.create({
                name: name, 
                lastName: lastName,
                email: email
            });
        }

        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);        
    }
};

module.exports = {
    signIn,
    signUp,
    loginGoogle
}