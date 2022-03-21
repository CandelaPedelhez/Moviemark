import React from "react";
import { useState, useEffect } from "react";
import { getGroceries, updateGroceries } from "../../Actions/index";
import { useDispatch, useSelector } from "react-redux";

/* HAY QUE FIJARSE SI CON LA GROCERIE DIRECTAMENTE CARGADA EN LA DB SE ACTUALIZA BIEN */

export default function AdminStock() {
    const dispatch = useDispatch();
    const groceries = useSelector((state) => state.groceries);

    useEffect(() => {
        dispatch(getGroceries());
    }, [dispatch])


    const [input, setInput] = useState({
        id: 0,
        price: 0,
        stock: 0,
    })


    function handleSelectGrocerie(e) {
        e.preventDefault();
        setInput({
            ...input,
            id: e.target.value
        })
    }

    function handleUpdate(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log("INPUTTTT", input)
    }

    function handleSubmit(e) {
        if (input.id && input.price && input.stock) {
            e.preventDefault();
            dispatch(updateGroceries(input));
            alert("Grocerie updated");
            setInput({
                id: 0,
                price: 0,
                stock: 0,
            });
        } else {
            e.preventDefault();
            alert("You should check grocerie and price fields!");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <select onChange={e => handleSelectGrocerie(e)}>
                    <option value={0}>Select grocerie</option>
                        {
                            groceries.map(e => <option value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>Update Price</label>
                    <input name="price" value={input.price} type="number" onChange={e => handleUpdate(e)}></input>
                </div>
                <div>
                    <label>Update Stock</label>
                    <input name="stock" value={input.stock} type="number" onChange={e => handleUpdate(e)}></input>
                </div>
                <button type="submit">Update grocerie</button>
            </form>
        </div>
    )
}