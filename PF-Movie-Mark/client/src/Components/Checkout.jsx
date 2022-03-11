import { useEffect, useState } from 'react'
import Comprar from './Comprar'
import axios from 'axios'

export default function Checkout() {
  const [datos, setDatos] = useState("")
  
  useEffect(()=>{
    axios
    .get('http://localhost:3001/api/mercadopago')
    .then((data)=>{
      setDatos(data.data)
      console.info('Contenido de data:', data)
    }).catch(err => console.error(err)) 
  },[])

  //puedo mostrar los productos de mi carrito u orden detalle
  const productos = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]
  return (
    <div>
      { !datos
        ? <p>Please wait...</p> 
        : 
       <>
        <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>

          </tr>
        </thead>
        <tbody>
        {
        productos.map((producto, i) => {
            return(
              <tr key={producto.title}>
                <td>{producto.title}</td>
                  <td>{producto.price}</td>
                  <td>{producto.quantity}</td> 
              </tr>
            )
        })} 
        </tbody>  
        </table>
        <Comprar data={datos}/>
        </>
      }
    </div>
  );
}