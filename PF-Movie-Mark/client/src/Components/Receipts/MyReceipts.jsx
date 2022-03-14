import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReceiptsCard from "./ReceiptsCard"
import { Link } from "react-router-dom"
import { getMyReceipts } from "../../Actions/index"
import { useEffect } from "react";

export default function MyReceipts() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const myReceipts = useSelector(state => state.myReceipts);
    
    useEffect(() => {
        dispatch(getMyReceipts(user.id))
    }, [dispatch])


    return (
        <div>
            <div>
                { (myReceipts.length > 0) ?
                <div>
                    {myReceipts.map((e, index) => (
                        <div key={index}>
                            <Link to={"/ticket/" + e.id}>
                                <ReceiptsCard date={e.date} id={e.id}/> {/* Que me pase el ID */}
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
