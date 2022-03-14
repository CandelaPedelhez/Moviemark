import React, {useContext} from "react";
import { CartContext } from '../../Context/CartContext';
import { ProductsData } from '../../Data/ProductsData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroceriesCard.module.scss";

export default function GroceriesCard() {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {/* <h2>{name}</h2>
      <img alt="img not found" src={img} width="100px" height="100px" />
      <h3>${price}</h3>
      <h4>{description}</h4> */}
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button onClick={() => addItemToCart(product)}>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      ))}
    </div>
  );
}
