const { Router } = require("express");
const router = Router();
const { User, Ticket } = require('../db.js');

//Ticket-users:
router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    let userTi = [];
    let tickets= [];
    //Obtengo user por id:
    let user  = await User.findOne({ where: { id: id} });
    let userTickets  = await Ticket.findAll({where: {userId: id}});
    //  console.log(userTickets);
    if (user) {
        let userFound = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email
        };

         userTi.push(userFound);
        };

    if (userTickets) {
        let ticketFound = {
            userId: userTickets[0].userId,
            movie_title: userTickets[0].movie_title,
            price: userTickets[0].price,
            date: userTickets[0].date,
            userGroceries: userTickets[0].userGroceries,
            hall: userTickets[0].hall,
        };
        tickets.push(ticketFound);
    };
    let results = userTi.concat(tickets);
    res.status(200).send(results);     
});

// //Ruta para crear usuario
// server.post('/', (req, res, next) => {
//     User.create({
//         email: req.body.email,
//         name: req.body.name,
//         surname: req.body.surname,
//         password: req.body.password
//     })
//     .then( user => {
//         Order.create({
//             status: "created",
//             price: 0,
//             quantity: 0,
//             userId: user.dataValues.id    
//         })
//     })
//     .then( order => {
//         res.status(201).send("Usuario creado con éxito")
//     })
//     .catch(error => {
//         console.log(error)
//         res.sendStatus(400)
//     })
// })

// server.get("/", (req,res, next)=>{
//     User.findAll()
//     .then(users =>{
//         res.json(users)
//     }).catch(e => console.log(e))
// })


 module.exports = router;