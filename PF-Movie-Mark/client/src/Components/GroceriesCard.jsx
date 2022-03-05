import React from "react";

export default function GroceriesCard({ img, name, price, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img}/>
            <h3>{price}</h3>
            <h4>{description}</h4>
            <button>Add to cart</button>
        </div>
    )
}