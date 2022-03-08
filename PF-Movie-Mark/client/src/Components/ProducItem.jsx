export default function ProducItem({data, addToCart}) {
    let {id, name, price} = data;
   
   return(
       <div style={{border: "thin solid purple", padding: "1rem", backgroundColor: "white"}}>
           <h4>{name}</h4>
           <h5>${price}.00</h5>
           <button onClick={() => addToCart(id)}>Add</button>

       </div>
   )
};