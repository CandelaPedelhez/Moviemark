export default function CartItem({data, delFromCart}) {
   let {id,name,price,quantity} = data;
   
   return(
       <div style={{borderBottom:"thin solid gray", }}>
           <h4 style={{color: "whitesmoke"}}>{name}</h4>
           <h5 style={{color: "whitesmoke"}}>
               ${price}.00 x {quantity} = ${price * quantity}.00
            </h5>
           <button onClick={() => delFromCart(id)}>Delete</button>
           <br/>
           <button onClick={() => delFromCart(id, true)}>Delete All</button>
           <br/><br/>
       </div>
   )
};