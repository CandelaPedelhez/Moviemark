/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGroceries } from "../Actions";
//import GrocerieCard from "./GrocerieCard";

export default function Grocerie() {
  const dispatch = useDispatch();
  //const groceries = useSelector((s) => s.groceries);
  useEffect(() => {
    dispatch(getGroceries());
  }, []);

  return (
    <div>
      <Link to="/home">Go Home</Link>

      {/*groceries?.map((g) => {
        return (
          <GrocerieCard key={g.id} name={g.name} img={g.img} price={g.price} />
        );
      })*/}
    </div>
  );
}
