// hay que traer el estado de cartItems
import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext"
import Cart from "../Cart/index";
import Checkout from "../Checkout.jsx"


export default function Receipt() {

    const { cartItems } = useContext(CartContext);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div>
            <div>
                <h1>Movie Mark</h1>
                <p>Adress: 123 Fake Street</p>
                <h2>Would you like to add something else?</h2>
                <Cart />
            </div>
            <h2>Order summary</h2>
            <div>
                {/* <h3>Description</h3> */}
                <h3>Price</h3>
            </div>
            <div>
                {
                    cartItems.map(e => <div><img src={e.img} width="180px" height="160px" /> <li>{e.name || e.title}</li> <li>{e.price}</li></div>
                    )
                }
            </div>
            <div>
                <h2>Total:</h2>
                <h2>${total}</h2>
            </div>
            <Checkout />
        </div>
    );
}