import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAvailables } from "../../Actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function AdminStock() {
    const dispatch = useDispatch();
    const availables = useSelector((state) => state.availables)

    useEffect(() => {
        dispatch(getAvailables());
    }, [dispatch])

    const [input, setInput] = useState({
        id: 0,
    })

    function handleSelectAvailable(e) {
        e.preventDefault();
        setInput({
            ...input,
            id: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.id) {
            return (
                axios.delete(`http://localhost:3001/api/availables/deleteAvailable/${input.id}`)
                    .then((res) => {
                        alert("Function deleted successfully") /* ACÁ HAY QUE VER A DÓNDE LO MANDA DESPUÉS */
                    })
                    .catch((e) => {
                        alert("Couldn't delete function!") 
                    }))
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <select onChange={e => handleSelectAvailable(e)}>
                    <option value={0}>Select function</option>
                    {
                        availables.map(e => <option value={e.id}>{e.name}:  {e.date} at {e.hour}</option>)
                    }
                </select>
                <button type="submit">Delete function</button>
            </form>
        </div>
    )
}