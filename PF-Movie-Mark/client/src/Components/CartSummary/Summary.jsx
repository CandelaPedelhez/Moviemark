// hay que traer el estado de cartItems
import CartContext from "../../Context/CartContext"
import { useContext } from 'react'
import { Link } from "react-router-dom"


export default function Resumen(){

    const { cartItems } = useContext(CartContext);
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div>
            <h1>Order summary</h1>
            <div>
            <h3>Description</h3>
            <h3>Price</h3>
            </div>
            <div>
                {cartItems.map(e => <li>{e.name}</li>)}
                {cartItems.map(e => <li>{e.price}</li>)}
            </div>
            <div>
                <h2>Total:</h2>
                <h2>{total}</h2>
            </div>
            <p>Remember we are located at 123 Fake Street</p>
            <div>
                <Link to={"/payment"}>
                    <div>Check out</div>
                </Link>
            </div>
        </div>
    );
}