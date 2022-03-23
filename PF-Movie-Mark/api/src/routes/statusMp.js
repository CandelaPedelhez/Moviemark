const { Router } = require("express");
const router = Router();
const { Order} = require('../db.js');

const {
    ACCESS_TOKEN,
  } = process.env;

const mercadopago = require ('mercadopago');
mercadopago.configure({
    access_token: ACCESS_TOKEN
  });

router.get("/", async (req, res)=>{
    // const ordenId = await Order.findOne({where: {userId: userId, status: 'carrito'}})
    // console.log("ORDEN ID", typeof ordenId.id === 'number')
    // const id_orden = await Cart.findAll({where: {orderId: ordenId.id}});
      console.info("EN LA RUTA PAGOS ", req)
      const payment_id= req.query.payment_id
      const payment_status= req.query.status
      const external_reference = req.query.external_reference
      const merchant_order_id= req.query.merchant_order_id
      console.log("EXTERNAL REFERENCE ", external_reference)
    
      //Aquí edito el status de mi orden
    
      Order.findByPk(external_reference)
      .then((order) => {
        order.payment_id= payment_id
        order.payment_status= payment_status
        order.merchant_order_id = merchant_order_id
        order.status = 'created'
        console.info('Salvando order')
        order.save()
        .then((_) => {
          console.info('redirect success')
          
        //   return res.redirect('http://localhost:3000')
        return res.send(order)
        }).catch((err) =>{
          console.error('error al salvar', err)
          return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
        })
      }).catch(err =>{
        console.error('error al buscar', err)
        return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
      })
    
    
      //proceso los datos del pago 
      // redirijo de nuevo a react con mensaje de exito, falla o pendiente
      //res.send(`${payment_id} ${payment_status} ${external_reference} ${merchant_order_id} `)
    })

    router.get("/:id", (req, res)=>{
          const mp = new mercadopago (ACCESS_TOKEN)
          const id = req.params.id
          // console.info("Buscando el id", id)
          mp.get(`/v1/payments/search` /*{'status': 'approved'})*/ ,{"external_reference":id})
          .then(resultado  => (
            resultado.body.results.map((e) => ({
              transaction_amount: e.transaction_amount,
              external_reference: e.external_reference,
              payment_type_id: e.payment_type_id,
              additional_info: e.additional_info.items.map((e) => ({
                quantity: e.quantity,
                title: e.title,
                unit_price: e.unit_price
              })),
              status: e.status,
            }))
            )
            // console.info('resultado', resultado)
            // res.json({"resultado": resultado})
          )
          .then(summary => {
            res.json({"summary": summary})
          })
          .catch(err => {
            console.error('No se consulto:', err)
            res.json({
              error: err
            })
          })
        })



module.exports = router;