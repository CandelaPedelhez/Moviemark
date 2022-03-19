import React from "react";
import { useState, useEffect } from "react";
import { getMovies, getAvailables, postAvailable } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
 
/* NO FUNCIONA EL ERROR */

function validate(input) {
    let errors = {};
    if (input.date.length === 0) {
        errors.date = "All functions are taken, please select another day"
    }
    if (!input.description) {
        errors.description = "A description is required"
    }
    if (input.rating > 5) {
        errors.rating = "The rating is up to 5"
    }
    return errors
}

export default function CreateAvailable() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const availables = useSelector((state) => state.availables)
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    useEffect(() => {
        dispatch(getAvailables());
    }, []);


    console.log("MOVIES", movies)

    const horarioFunciones = ["18:30", "19:30", "21", "22"]
    let horariosAvailables = false
    let horarios = []

    const [input, setInput] = useState({
        name: "",
        date: "",
        hour: "",
        hall: null,
        hallTickets: 48,
    })

    function handleSelectMovie(e) {
        e.preventDefault();
        setInput({
            ...input,
            name: e.target.value
        })
    }

    function handleDate(e) {
        if (availables.map(r => r.date === e.target.value)) {
            console.log("INPUT", input.date)
            let movieSameDate = availables.filter(r => r.date === e.target.value);
            console.log("MOVIES IN THE SAME DATE", movieSameDate)

            if (movieSameDate.length === 4) {
                setErrors(validate({
                    ...input,
                    [e.target.name]: ""
                }))
                console.log("ERROR", errors)

            }

            if(movieSameDate.length < 4){
                horariosAvailables = true
                console.log("HORARIOS AVAILABLES TRUE OR FALSE", horariosAvailables)
                if(movieSameDate.length === 0){
                    horarios = horarioFunciones
                    console.log("HORARIOS", horarios)
                } else{
                    horarios = horarioFunciones.filter(r => movieSameDate.includes(r.hour))
                    console.log("FINNNNNDD", horarios)
                }
                
                setInput({
                    ...input,
                    date: e.target.value
                })
            }
        }
    }


    function handleSelectHour(e) {
        e.preventDefault();
        setInput({
            ...input,
            hour: e.target.value
        })
    }


    function handleSubmit(e) {
        if (input.name && input.date && input.hour && input.hall !== null) {
            console.log("ESTES ES EL INPUT", input)
            e.preventDefault();
            dispatch(postAvailable(input));
            alert("Function created");
            setInput({
                name: "",
                date: "",
                hour: "",
                hall: null,
                hallTickets: 48,
            });
        } else {
            e.preventDefault();
            alert("You should check name, date and hour fields!");
        }
    }


    return (
        <div >
            <h1>Add a function</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div>
                        <label>Movie:</label>
                        <select onChange={e => handleSelectMovie(e)}>
                            <option>Choose</option>
                            {movies?.map((movie) => { /* ACÁ QUE ME TRAIGA SOLO LA DE ONSTREAM ? */
                                return <option value={movie.title}>{movie.title}</option>
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Choose a date</label>
                        <input value={input.date} type="date" name="date"
                            min="2022-03-18" onChange={e => handleDate(e)}>
                        </input>
                        {
                            input.date.length > 0 ?
                                <div>
                                    {errors.date > 0 ?
                                        <p>All functions taken, try with another Date</p> :
                                        <div>
                                            <div>
                                                <label>Select hour</label>
                                                <select onChange={e => handleSelectHour(e)} name="hour">
                                                    <option>Select hour</option>
                                                    {
                                                        (horariosAvailables === true) ?
                                                            horariosAvailables.map(e => <option value={e} name="hour">{e}</option>) :
                                                            horarioFunciones.map(e => <option value={e} name="hour">{e}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div>
                                                {
                                                    (input.hour === "") ?
                                                        <div></div> :
                                                        (input.hour === "18:30" || input.hour === "21") ?
                                                            <div>
                                                                <label>Hall:</label>
                                                                <h3>1</h3>
                                                            </div>
                                                            :
                                                            <div>
                                                                <label>Hall:</label>
                                                                <h3>2</h3>
                                                            </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div> : <div></div>
                        }
                    </div>
                </div>
                <button type="submit">Add function</button>
            </form>
        </div>

    )
}