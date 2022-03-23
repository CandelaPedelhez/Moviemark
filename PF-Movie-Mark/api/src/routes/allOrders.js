const { Router } = require("express");
const router = Router();

const {
    ACCESS_TOKEN,
  } = process.env;

const mercadopago = require ('mercadopago');
mercadopago.configure({
    access_token: ACCESS_TOKEN
  });

  router.get("/", (req, res)=>{
    const mp = new mercadopago (ACCESS_TOKEN)
    mp.get(`/v1/payments/search`, {'status': 'approved'})//{"external_reference":id})
    .then(resultado  => (
        resultado.body.results.map((e) => ({
            transaction_amount: e.transaction_amount,
            external_reference: e.external_reference,
            payment_type_id: e.payment_type_id,
            additional_info: e.additional_info.items.map((e) => ({
              quantity: e.quantity,
              title: e.title,
              unit_price: e.unit_price
            }))
          }))
    ))
    .then(allOrders => {
        res.json({"allOrders": allOrders})
      })
    
    .catch(err => {
      console.error('No se consulto:', err)
      res.json({
        error: err
      })
    })
  
  })

  module.exports = router;