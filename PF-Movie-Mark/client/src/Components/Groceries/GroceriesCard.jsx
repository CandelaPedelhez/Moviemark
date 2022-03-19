import React, {useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartContext from '../../Context/CartContext';
import { getGroceries } from "../../Actions";
import Cart from "../Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroceriesCard.module.scss";

export default function GroceriesCard() {
  const dispatch = useDispatch()
  const { addItemToCart, products } = useContext(CartContext);

  useEffect(() => {
    dispatch(getGroceries());
  }, [dispatch]);

  return (
    <div className={styles.productsContainer}>
      {/* <h2>{name}</h2>
      <img alt="img not found" src={img} width="100px" height="100px" />
      <h3>${price}</h3>
      <h4>{description}</h4> */}
      {products && products.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
        </div>
      ))}
    </div>
  );
}
