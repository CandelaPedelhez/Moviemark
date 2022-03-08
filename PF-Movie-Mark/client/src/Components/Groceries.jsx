import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGroceries } from "../Actions/index";
import { useEffect } from "react";
import GroceriesCard from "./GroceriesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Groceries.css";

export default function Groceries() {
  const dispatch = useDispatch()
  const myGroceries = useSelector((state) => state.groceries)
  const combos = myGroceries.filter(e => e.typeGrocerie === "combo")
  const popcorn = myGroceries.filter(e => e.typeGrocerie === "popcorn")
  const snacks = myGroceries.filter(e => e.typeGrocerie === "snacks")
  const drinks = myGroceries.filter(e => e.typeGrocerie === "drinks")
  const sweets = myGroceries.filter(e => e.typeGrocerie === "sweets")
  const coffeshop = myGroceries.filter(e => e.typeGrocerie === "coffeshop")

  useEffect(() => {
    dispatch(getGroceries());
  }, [dispatch]);

  return (
    <div className="grosFather">
      <div>
        <Link to="/home">
          <button className="buttonBack"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
      </div>
        <h2 className="combos">Combos</h2>
        <div className="grid">
        {combos.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
        <h3 className="combos">Pop-corn</h3>
        <div className="grid">
        {popcorn.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
        <h3 className="combos">Snacks</h3>
        <div className="grid">
        {snacks.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
        <h3 className="combos">Drinks</h3>
        <div className="grid">
        {drinks.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
        <h3 className="combos">Sweets</h3>
        <div className="grid">
        {sweets.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
        <h3 className="combos">Coffeshop</h3>
        <div className="grid">
        {coffeshop.map((e, index) => 
            <div key={index}>
              <GroceriesCard
                name={e.name}
                img={e.img}
                price={e.price}
                description={e.description}
              />
            </div>)}
            </div>
            <div>
        <Link to="/home">
          <button className="buttonBack"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
      </div>
    </div>
    
  );
}
