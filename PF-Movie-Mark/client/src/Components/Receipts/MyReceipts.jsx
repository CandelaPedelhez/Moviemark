import React from "react";
import ReceiptsCard from "./ReceiptsCard"
import { Link } from "react-router-dom"

export default function MyReceipts() {

const currentTickets = [] /* PARA QUE NO ROMPA, DESPUÉS HABRIA QUE TRAER LOS TICKETS DEL USUARIO ACÁ */

    return (
        <div>
            <div>
                { (currentTickets.length > 0) ?
                <div>
                    {currentTickets.map((e, index) => (
                        <div key={index}>
                            <Link to={"/myReceipts/" + e.id}>
                                <ReceiptsCard ticket={e.ticket} />
                            </Link>
                        </div>
                    ))}
                </div> : 
                <div>
                    <h1>You don't have any tickets yet, try buying something ;)</h1>
                </div>
                }
            </div>
        </div>
    )
}
