import QRcode from "qrcode"
import { useEffect, useState } from "react";

let date = new Date();

export default function Resumen(){

    /* ACÁ NOS TRAEMOS EL ÚLTIMO TICKET GENERADO PARA EL USUARIO */
    const [qr, setQr] = useState("");
    useEffect(() => {
        QRcode.toDataURL(ticket.id).then((setQr));
    })

    return (
        <div>
            <div>
            <h1>Movie-Mark</h1>
            <p>Adress: 123 Fake Street</p>
            <p>Date: {date}</p>
            </div>
            <div>
            <h3>Description</h3>
            <h3>Price</h3>
            </div>
            <div>
                {
                   cartItems.map(e => <li>{e.items}</li>)
                }
                {
                    cartItems.map(e => <li>{e.price}</li>)
                }
            </div>
            <div>
                <h2>Total:</h2>
                <h2>{cartItems.total}</h2>
            </div>
            <di>
                <img src={qr}/>
            </di>

        </div>
    );
}