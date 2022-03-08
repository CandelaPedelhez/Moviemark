import { useReducer } from "react"
import { TYPES } from "../Actions";
import { shoppingInitialState, shoppingReducer } from "../Reducer/shoppingReducer"
import CartItem from "./CartItem";
import ProducItem from "./ProducItem";
import "./ShoppingCart.css"


export default function ShoppingCart() {
 const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
 const {products, cart} = state;

 const addToCart = (id) => {
    //console.log(id)
    dispatch({type:TYPES.ADD_TO_CART, payload: id})
 }

 const delFromCart = (id, all = false) => {
     //console.log(id, all)
     if(all) {
         dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
     } else {
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
     }
}

const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
}

return(
    <div>
        <h2 style={{color: "whitesmoke"}}>Shopping Cart</h2>
        <h3 style={{color: "purple"}}>Products</h3>
        <article className="box grid-responsive">
            {products.map((product) => (
            <ProducItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
        <h3 style={{color: "purple"}}>Items</h3>
        <article className="box">
            <button onClick={clearCart}>Clear Cart</button>
            {
                cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart}/>)
            }
            </article>
    </div>
)
}