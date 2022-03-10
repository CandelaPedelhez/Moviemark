// hay que traer el estado de cartItems
import CartContext from "../../Context/CartContext"
import { useContext } from 'react'

let date = new Date();

export default function Resumen(){

    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <div>
            <h1>Movie-Mark</h1>
            <p>Adress: Calle sin nombre 123</p>
            <p>Date: {date}</p>
            </div>
            <div>
            <h3>Description</h3>
            <h3>Price</h3>
            </div>
            <div>
                {
                   cartItems.map(e => <li>{e.items}</li>)
                }
                {
                    cartItems.map(e => <li>{e.price}</li>)
                }
            </div>
            <div>
                <h2>Total:</h2>
                <h2>{cartItems.total}</h2>
            </div>

        </div>
    );
}