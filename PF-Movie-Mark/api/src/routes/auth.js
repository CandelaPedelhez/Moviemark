require("dotenv").config();
const { Router } = require('express');
const router = Router();
const {User} = require('../db');
const bcrypt = require('bcrypt');
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
          

module.exports = router;
