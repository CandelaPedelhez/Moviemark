// hay que traer el estado de cartItems
import React, { useContext } from 'react';
import CartContext from "../../Context/CartContext"
import Cart from "../Cart/index";
import Checkout from "../Checkout.jsx"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.modules.scss"

export default function Receipt(){
    const { cartItems } = useContext(CartContext);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div className='container'>
            <div>
            <Link to="/home">
          <button className="btnBack">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
        <Cart/>
            <Link to="/groceries">
                <h2>Don't forget our groceries!</h2>
            </Link>
            <h1>Order details</h1>
            </div>
            <div>
            {/* <h3>Description</h3> */}
            </div>
            <div className='items'>
            {
                   cartItems.map(e => <div><img src={e.img} width="180px" height="160px"/> <h4>{e.name || e.title}</h4> <h4>Price per unity: ${e.price}</h4></div>
                   )
                }
            </div>
            {cartItems.length>0? <div className='total'>
                <h2>Total:</h2>
                <h3>${total}</h3>
                <Checkout />
            </div> : <div></div>}
        </div>
    );
};