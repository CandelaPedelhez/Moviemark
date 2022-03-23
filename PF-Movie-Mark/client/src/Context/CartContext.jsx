// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext()

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState(() => {
//         try {
//             const productsInLocalStorage = localStorage.getItem("cartProducts");
//             return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
//         } catch (error) {
//             return [];
//         }
//     });

//     useEffect(() => {
//         localStorage.setItem("cartProducts", JSON.stringify(cartItems))
//     }, [cartItems]);

//     const addItemToCart = (product) => {
//         const inCart = cartItems.find(
//             (productInCart) => productInCart.id === product.id);

//         if (inCart) {
//             setCartItems(
//                 cartItems.map((productInCart) => {
//                     if (productInCart.id === product.id) {
//                         return { ...inCart, amount: inCart.amount + 1 };
//                     } else return productInCart;
//                 })
//             );
//         } else {
//             setCartItems([...cartItems, { ...product, amount: 1 }])
//         }
//     };

//     const deleteItemToCart = (product) => {
//         const inCart = cartItems.find(
//             (productInCart) => productInCart.id === product
//         );

//         if (inCart.amount === 1) {
//             setCartItems(
//                 cartItems.filter((productInCart) => productInCart.id !== product)
//             );
//         } else {
//             setCartItems(
//                 cartItems.map((productInCart) => {
//                 if (productInCart.id === product) {
//                     return { ...inCart, amount: inCart.amount - 1 }
//                 } else return productInCart;
//             })
//             );
//         }
//     };

//     const clearCart = (product) => {
//         const inCart = cartItems.find(
//             (productInCart) => productInCart.id === product
//         );

//         if (inCart.amount) {
//             setCartItems(
//                 cartItems.filter((productInCart) => productInCart.id !== product)
//             );
//         } else {
//             setCartItems(
//                 cartItems.map((productInCart) => {
//                 if (productInCart.id === product) {
//                     return { ...inCart, amount: inCart.amount }
//                 } else return productInCart;
//             })
//             );
//         }
//     };
// /* console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAA",cartItems) */
//     return (
//         <CartContext.Provider
//          value={{ cartItems, addItemToCart, deleteItemToCart, clearCart }}
//          >
//             {children}
//         </CartContext.Provider>
//     )
// };

import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

// Agregue esto porque rompia. Sino cambiar por lo de abajo.
let userId = -1;
if(localStorage.getItem("user")){
  let u = localStorage.getItem("user");
  let userObj = JSON.parse(u);
  userId = userObj.id;
}

// let u = localStorage.getItem("user");
// console.log("User del localStorage: ", u);
// console.log(typeof(u))
// let userObj = JSON.parse(u);
// console.log("Obj de user: ",userObj)
// console.log("ID del obj user: ", userObj.id);
// let userId = userObj.id;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productsInLocalStorage = localStorage.getItem("cartProducts");
      return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  const [products, setProducts] = useState([]);
  let token = 0;
  if(localStorage.getItem("token")){
      token = localStorage.getItem("token");
  }

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log("cart", localStorage.getItem("cartProducts"));

  const getProducts = async () => {
    await axios
      .get("http://localhost:3001/api/cart/products")
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:3001/api/cart/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    console.log("TOKENNNNs",token)
    if(token.length > 10) {
    let u = localStorage.getItem("user");
// console.log("User del localStorage: ", u);
// console.log(typeof(u))
let userObj = JSON.parse(u);
// console.log("Obj de user: ",userObj)
// console.log("ID del obj user: ", userObj.id);
let userId = userObj.id;
console.log("IIIIIIIIIIDDDDDDD",userId)
    const { name, img, price } = product;
    await axios.post("http://localhost:3001/api/cart/products-cart", {
      name,
      img,
      price,
    });

    getProducts();
    getProductsCart();
  };
  }
  const editItemToCart = async (id, query, amount) => {
    if (id) {
      await axios
        .delete(`http://localhost:3001/api/cart/products-cart/${id}?query=del`)
        .then(({ data }) => console.log(data));
      // } else {
      //   await axios
      //     .put(`http://localhost:3001/products-cart/${id}?query=add`, {
      //       amount,
      //     })
      //     .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  const cleanCart = async () => {
    await axios
      .delete("http://localhost:3001/api/cart/cart-delete/")
      .then(({ data }) => setCartItems(data.productsCart));
    getProducts();
    getProductsCart();
  };

  const increaseAmount = async (id, amount) => {
    if (id) {
      await axios
        .put(`http://localhost:3001/api/cart/products-cart/${id}?query=add`, {
          amount,
        })
        .then(({ data }) => console.log(data));
      window.location.reload(false);
    }
    getProducts();
    getProductsCart();
  };

  const decreaseAmount = async (id, amount) => {
    if (id) {
      await axios
        .put(`http://localhost:3001/api/cart/products-cart/${id}?query=dec`, {
          amount,
        })
        .then(({ data }) => console.log(data));
      window.location.reload(false);
    }
    getProducts();
    getProductsCart();
  };
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        products,
        addItemToCart,
        editItemToCart,
        increaseAmount,
        decreaseAmount,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
;
}

export default CartContext;