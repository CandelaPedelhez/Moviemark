import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import styles from "./styles.module.scss";

const ItemCart = ({item}) => {
  const {deleteItemToCart, addItemToCart, clearCart} = useContext(CartContext);
  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name || item.title}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemToCart(item)}>ADD</button>
            <button onClick={() => deleteItemToCart(id)}>REMOVE</button>
            <button onClick={() => clearCart(id)}>CLEAR</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCart