import React from "react";
import { useEffect , useState} from "react";
import { getAvailables , deleteAvailable } from "../../Actions/index";
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

    function handleSubmit(e){
        console.log("IDDDDDDD", input)
        e.preventDefault();
        dispatch(deleteAvailable(input));
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