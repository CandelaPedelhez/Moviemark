import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGroceries } from "../../Actions";
import { useEffect } from "react";
import GroceriesCard from "./GroceriesCard";
import CartContext from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Cart from '../Cart';
// import ShoppingCart from "./ShoppingCart";
import "./Groceries.css"
import styles from "./GroceriesCard.module.scss";

export default function Groceries() {
  const dispatch = useDispatch()
  const myGroceries = useSelector((state) => state.groceries)
  const combos = myGroceries.filter(e => e.typeGrocerie === "combo")
  const popcorn = myGroceries.filter(e => e.typeGrocerie === "popcorn")
  const snacks = myGroceries.filter(e => e.typeGrocerie === "snacks")
  const drinks = myGroceries.filter(e => e.typeGrocerie === "drinks")
  const sweets = myGroceries.filter(e => e.typeGrocerie === "sweets")
  const coffeshop = myGroceries.filter(e => e.typeGrocerie === "coffeshop")
  const { products, addItemToCart } = useContext(CartContext);
  console.log(products)


  // const { addItemToCart, products } = useContext(CartContext);

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
      <div>
        <Cart />
      </div>
      <div className={styles.productsContainer}>
        <h2 className="featured">Deal of the day</h2>
        {
        products && products.map((e) => (
          e.typeGrocerie === "offer" ?
            <div className={styles.product}>
              <img src={e.img}/>
              <div>
            <p>
              {e.name} - ${e.price}
            </p>
          </div>
          {!e.inCart ? (
              <button onClick={() => addItemToCart(e)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
                </div>
           : <div></div>
        ))
        }
      </div>
      <h4 className="combos">Combos</h4>
      <GroceriesCard />
      <div>
        <Link to="/home">
          <button className="buttonBack"><FontAwesomeIcon icon={faArrowLeft} /></button>
        </Link>
      </div>
    </div>

  );
}
