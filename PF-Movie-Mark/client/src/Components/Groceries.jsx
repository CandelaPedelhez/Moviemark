import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroceries } from "../Actions/index";
import { useEffect } from "react";
import GroceriesCard from "./GroceriesCard";

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
    <div>
      <div>
        <h2>Combos</h2>
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
      <div>
        <h3>Pop-corn</h3>
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
      <div>
        <h3>Snacks</h3>
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
      <div>
        <h3>Drinks</h3>
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
      <div>
        <h3>Sweets</h3>
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
      <div>
        <h3>Coffeshop</h3>
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
    </div>
  );
}
