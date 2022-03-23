require("dotenv").config();
const { User, Order, Cart } = require('../../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.js');

//Registro -- creación de usuario
const signUp = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email }
        })
        if (user) {
            return res.status(200).json({ msg: "Email registered" })
        }
        //encripto pass:
        let passwordEncrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
        // if(role === "user"){
        await User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email.trim().toLowerCase(),
            password: passwordEncrypted,
            role: "user",
            // authorization: false,
        }).then(user => {
            //Cuando un usuario es creado, creo el token:
            let token = jwt.sign({ user: user }, authConfig.secret, {
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
    let { email, password } = req.body;

    //Busco el email del user:
    await User.findOne({
        where: { email: email }
    }).then(async (user) => {
        if (!user) {
            res.status(200).json({ msg: "Email not found :(" })
        } else {
            //Comparo las password, la que recibo y la que estaba en la db
            if (bcrypt.compareSync(password, user.password)) {
                //Creo el token:
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                res.json({
                    token: token
                })
                // let cart = await Cart.findAll()
                // if(cart) {
                console.log("USSSSSSSSSSSSSSSSSSSSSSSSSER",user)
                let orden = await Order.findOne({where: {status: 'carrito'}},{defaults: { userId: user.dataValues.id }})
                Order.update({
                    userId: user.dataValues.id
                }, {
                    where: {userId: null}
                })
                console.log("orden", orden)
                let updateCart = await Cart.findAll({ where: { orderId: null } })
                if (updateCart.length) {
                    Cart.update({
                        orderId: orden.dataValues.id
                    }, {
                        where: { orderId: null }
                    })
                }
            }
             else {
                //Msg unauthorized
                res.status(200).json({ msg: "Incorrect password :(" })
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