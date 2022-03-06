import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroceries } from "../Actions/index";
import { useEffect } from "react";
import GroceriesCard from "./GroceriesCard";

export default function Groceries() {
  const dispatch = useDispatch();
  const myGroceries = useSelector((state) => state.groceries);

  useEffect(() => {
    dispatch(getGroceries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Pop-corn</h2>
        {myGroceries.map((e, index) => {
          if (e.type === "popcorn") {
            <div key={index}>
              <GroceriesCard
                name={e.name}
                image={e.image}
                price={e.price}
                description={e.description}
              />
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Snacks</h3>
        {myGroceries.map((e, index) => {
          if (e.type === "snacks") {
            <div key={index}>
              <GroceriesCard
                name={e.name}
                image={e.image}
                price={e.price}
                description={e.description}
              />
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Drinks</h3>
        {myGroceries.map((e, index) => {
          if (e.type === "drinks") {
            <div key={index}>
              <GroceriesCard
                name={e.name}
                image={e.image}
                price={e.price}
                description={e.description}
              />
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Sweets</h3>
        {myGroceries.map((e, index) => {
          if (e.type === "sweets") {
            <div key={index}>
              <GroceriesCard
                name={e.name}
                image={e.image}
                price={e.price}
                description={e.description}
              />
            </div>;
          }
        })}
      </div>
      <div>
        <h3>Coffeshop</h3>
        {myGroceries.map((e, index) => {
          if (e.type === "coffeshop") {
            <div key={index}>
              <GroceriesCard
                name={e.name}
                image={e.image}
                price={e.price}
                description={e.description}
              />
            </div>;
          }
        })}
      </div>
    </div>
  );
}
