// hay que traer el estado de cartItems
import React, { useContext } from 'react';
import {CartContext} from "../../Context/CartContext"
import Cart from "../Cart/index";
import Checkout from "../Checkout.jsx"

let date = new Date();

export default function Receipt(){

    const { cartItems } = useContext(CartContext);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div>
            <div>
            <h1>Movie Mark</h1>
            <Cart/>
            <p>Adress: Calle sin nombre 123</p>
            {/* <p>Date: {date}</p> */}
            </div>
            <div>
            {/* <h3>Description</h3> */}
            <h3>Price</h3>
            </div>
            <div>
            {
                   cartItems.map(e => <div><img src={e.img} width="180px" height="160px"/> <li>{e.name || e.title}</li> <li>{e.price}</li></div>
                   )
                }
                {/* {
                   cartItems.map(e => <li>{e.name || e.title}</li>)
                } */}
                {/* {
                    cartItems.map(e => <li>{e.price}</li>)
                } */}
            </div>
            <div>
                <h2>Total:</h2>
                <h2>${total}</h2>
            </div>
            <Checkout />
        </div>
    );
}