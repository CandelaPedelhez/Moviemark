require("dotenv").config();
const { Router } = require('express');
const router = Router();
const {User} = require('../db');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const authConfig = require('../config/auth.js');
const {signUp, signIn} = require('../controllers/user/authController');


router.post('/signUp', signUp);
router.post('/signIn', signIn);

//Get users:
router.get("/", async (req,res)=>{
    User.findAll()
    .then(data=>{
        res.json(data);
    })
    .catch(e=>{return e;})
});

// GET /api/user/:id
// Trae un usuario por id
router.get('/:id',(req,res)=>{
    User.findByPk(req.params.id)
    .then(data=>res.status(200).json(data))
    .catch(e=>res.status(500).send({error:'Error'}))
});

// PUT /api/user/:id
// Actualizar datos de un usuario
router.put('/:id',(req,res)=>{
    
    User.findOne({
        where:{id:req.params.id}
    })
    .then(data=>{
     
        if(req.body.name && req.body.password){
            let passwordEncrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
            data.update({
                name    : req.body.name,
                password: passwordEncrypted,
            })
            .then(response=>{res.status(200).json(response)})
            .catch(e=>{res.status(500).json({e})});
        }
        else if(req.body.name){
            data.update({
                name:req.body.name,
            })
            .then(response=>{res.status(200).json(response)})
            .catch(e=>{res.status(500).json({e})});
        }
        else{
            let passwordEncrypted = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
            data.update({
                password: passwordEncrypted,
            })
            .then(response=>{res.status(200).json(response)})
            .catch(e=>{res.status(500).json({e})});
        }
    })
    .catch(e=>res.status(500).json({e}))
});


// PUT /api/user/roleadmin/:id
// Hacer admin a un usuario
router.put('/roleadmin/:id',(req,res)=>{
    User.findByPk(req.params.id)
    .then(data=>{
        data.update({
            role: req.body.role,
        })
        .then(response=>{res.status(200).json(response)})
        .catch(e=>{res.status(500).json({e})});
    })
    .catch(e=>res.status(500).json({e}))
})

const token=Math.floor((Math.random()*1000000)+1);

// Gmail account
// moviemarkstore@gmail.com
// Store123

// Forgot password
// Enviar email al usuario
// Json{ "email":"email@email.com"}
router.post('/forgot',(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(!user){
            res.status(200).send({error:'Invalid email'});
        }
        else{
            user.update({
                ...user,
                passwordResetToken: token,
            })
            .then(()=>{
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: "moviemarkstore@gmail.com",
                        pass: "Store123",
                    }
                })
                const resetLink = 'http://localhost:3000/login/reset';
                const mailOptions = {
                    from: "MovieMark <moviemarkstore@gmail.com>",
                    to: req.body.email,
                    subject: 'Reset your password',
                    html:  `<html>
                        <head>
                            <body>
                                <h3>To reset your password follow this link ${resetLink} and enter this token: 
                    ${token}</h3>
                            </body>
                        </head>
                    </html>`
                }
                transporter.sendMail(mailOptions,(e,success)=>{
                    e
                    ?res.status(500).send(e.message)
                    :res.status(200).send({success:'Done'});
                })    
            })
            
        }
    })
})


// Reset password
// Aca se ingresa el token y el nuevo password
// Json{ "passwordResetToken":"tokenemail","password":"nuevopass"}
router.use('/reset',async (req,res)=>{
    try{
        const user = await User.findOne({
            where:{passwordResetToken:req.body.passwordResetToken}
        })
        if(!user) res.status(404).json({error:"Token not valid"});
        else{
            const hash = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
            const aux = user.update({
                ...user,
                password:hash,
                passwordResetToken:null,
            })
            res.status(200).json({success:"Password reset done"})
        }
    }
    catch(e){ res.status(500).json({error:"ERROR"})}
})
          

module.exports = router;
