import React from "react";
import { useState, useEffect } from "react";
import { getGroceries, getAvailables } from "../Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GroceriesStock from "./GroceriesStock.jsx"
import AvailablesStock from "./AvailablesStock.jsx"

export default function AdminStock() {
    const dispatch = useDispatch();
    const groceries = useSelector((state) => state.groceries);
    const availables = useSelector((state) => state.availables)

    useEffect(() => {
        dispatch(getAvailables());
    }, [dispatch])

    useEffect(() => {
        dispatch(getGroceries());
    }, [dispatch])


let following = ""

    function handleSelect(e) {
            if (e.target.value = "availables") {
                following = "availables"
            }
            if (e.target.value = "groceries") {
                following = "groceries"
            }
        }

    return (
        <div >
            <Link to='/home'><button >Back</button></Link>
            <h1>Modify our products</h1>
            <div>
                <label>Product</label>
                <select onChange={e => handleSelect(e)}>
                    <option value="availables">Availables</option>
                    <option value="groceries">Groceries</option>
                </select>
                {
                    (following === "groceries") ? 
                    <GroceriesStock/> : <AvailablesStock/>
                }
            </div>
        </div>

    )
}