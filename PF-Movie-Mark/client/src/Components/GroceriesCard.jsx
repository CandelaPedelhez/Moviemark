import React from "react";

export default function GroceriesCard({ img, name, price, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <img alt="img not found" src={img} />
      <h3>{price}</h3>
      <h4>{description}</h4>
    </div>
  );
}
