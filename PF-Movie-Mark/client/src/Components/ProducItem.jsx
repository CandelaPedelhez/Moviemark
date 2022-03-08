import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function ProducItem({data, addToCart}) {
    let {id, name, img, price} = data;
   
   return(
       <div style={{border: "thin solid purple", padding: "1rem", backgroundColor: "white"}}>
           <h4>{name}</h4>
           <h5>${price}.00</h5>
           <img src={img} width="180" height="120"/>
           <button onClick={() => addToCart(id)}><FontAwesomeIcon icon={faAdd} /></button>
       </div>
   )
};