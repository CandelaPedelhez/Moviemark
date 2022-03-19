import React from "react";
import { useState, useEffect } from "react";
import { getGroceries } from "../Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function AdminStock() {
    const dispatch = useDispatch();
    const groceries = useSelector((state) => state.groceries);

    useEffect(() => {
        dispatch(getGroceries());
    }, [dispatch])

    return(
        <div>
            
        </div>
    )
}