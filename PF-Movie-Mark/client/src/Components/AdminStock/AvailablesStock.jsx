import React from "react";
import { useState, useEffect } from "react";
import { getAvailables } from "../Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function AdminStock() {
    const dispatch = useDispatch();
    const availables = useSelector((state) => state.availables)

    useEffect(() => {
        dispatch(getAvailables());
    }, [dispatch])

    return(
        <div>

        </div>
    )
}