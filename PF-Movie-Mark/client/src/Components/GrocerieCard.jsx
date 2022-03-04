import React from "react";

export default function GrocerieCard({ name, price, img }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="img not found" style={{ width: "120px" }} />
      <h3 key={price}>{price}</h3>
    </div>
  );
}
