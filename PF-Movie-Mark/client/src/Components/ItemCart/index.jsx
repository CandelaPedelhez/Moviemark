import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
<<<<<<< HEAD
  const { editItemToCart, increaseAmount, decreaseAmount, editTicketToCart, increaseAmountTicket, decreaseAmountTicket } = useContext(CartContext);
=======
  const { editItemToCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
>>>>>>> 3c8de39aed5d03785c9ac3357c3f670d9ac0b400

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
<<<<<<< HEAD
          {item.price === "1000" ? <button onClick={() => increaseAmountTicket(item.id, amount)}>
            <FontAwesomeIcon  icon={faAdd}/>
            </button> : <button onClick={() => increaseAmount(item.id, amount)}>
            <FontAwesomeIcon  icon={faAdd}/>
            </button>}
            {item.price === "1000" ? <button onClick={() => decreaseAmountTicket(item.id, amount)}>
            <FontAwesomeIcon  icon={faMinus}/>
            </button> : <button onClick={() => decreaseAmount(item.id, amount)}>
            <FontAwesomeIcon  icon={faMinus}/>
            </button>}
            {item.price === "1000" ? <button onClick={() => editTicketToCart(item.id, amount)}>
            <FontAwesomeIcon  icon={faX}/>
            </button> : <button onClick={() => editItemToCart(item.id, amount)}>
            <FontAwesomeIcon  icon={faX}/>
            </button>}
=======
            <button onClick={() => increaseAmount(item.id, amount)}>
              <FontAwesomeIcon icon={faAdd} />
            </button>
            <button onClick={() => decreaseAmount(item.id, amount)}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={() => editItemToCart(item.id, amount)}>
              <FontAwesomeIcon icon={faX} />
            </button>
>>>>>>> 3c8de39aed5d03785c9ac3357c3f670d9ac0b400
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
