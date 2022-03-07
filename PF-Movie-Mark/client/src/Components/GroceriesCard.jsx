import React from "react";
import "./GroceriesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function GroceriesCard({ img, name, price, description }) {

  return (
    <div className="cardGroceries">
      <h2>{name}</h2>
      <img alt="img not found" src={img} width="100px" height="100px" />
      <h3>${price}</h3>
      <h4>{description}</h4>
      <button><FontAwesomeIcon icon={faAdd} /></button>
    </div>
  );
}

