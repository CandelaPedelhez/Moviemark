import styles from './Newsletter.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMovies, sendNewsletter } from '../../Actions';

const Newsletter = () => {
    const [input,setInput]=useState({
        id:[]
    })
    const movies = useSelector(state=>state.allMovies);

    const dispatch=useDispatch();

    function handleSelect(e){
        e.preventDefault();
        if(!input.id.includes(e.target.value) && input.id.length<3){
            setInput({
                ...input,
                id: [...input.id,e.target.value],
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const found = movies.find(element => element.id === parseInt(input.id[0]));
        const foundtwo = movies.find(element => element.id ===  parseInt(input.id[1]));
        const foundthree = movies.find(element => element.id ===  parseInt(input.id[2]));
        console.log(found);
        dispatch(sendNewsletter({
            title:found.title,
            img:found.img,
            description:found.description,

            titletwo:foundtwo.title,
            imgtwo:foundtwo.img,
            descriptiontwo:foundtwo.description,

            titlethree:foundthree.title,
            imgthree:foundthree.img,
            descriptionthree:foundthree.description,
        }))
        emptyinput();
    }

    function emptyinput(){
        setInput({
            id:[]
        })
    }

    function handleDelete(e,t){
        e.preventDefault();
        setInput({
            ...input,
            id: input.id.filter(e=>e!==t),
        })
    }

    useEffect(()=>{
        dispatch(getMovies());
    },[dispatch])

    return(
        <div>
            <div className={styles.divbtt}>
                <Link to="/admin">
                    <button className={styles.btnBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
            </div>
            <div className={styles.page}>
                <div>
                    <form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                    <h1 className={styles.title}>Newsletter</h1>
                    <p className={styles.text}>Select three movies to send the newsletter</p>
                    <div>
                            <select className={styles.select} onChange={e=>handleSelect(e)}>
                                <optgroup label="Select Movies">
                                </optgroup>
                                {
                                    movies.map(tp=>{
                                        return <option key={tp.id} value={tp.id}>{tp.title}</option>
                                    })
                                }
                            </select>

                            {input.id?.map(t=>(
                            <div className={styles.opt}>
                                <div>
                                    {
                                        movies.map(el=>{
                                            return el.id===parseInt(t)?<p className={styles.titleopt}>{el.title}</p>:<></>
                                        })
                                    }
                                </div>
                                <div>
                                    <button className={styles.bttx} onClick={e=>handleDelete(e,t)}>x</button>
                                </div>
                            </div>
                            ))}
                        </div>
                        {input.id.length===3?<button className={styles.bttn} type="submit">Submit</button>:<button className={styles.bttndis} disabled type="submit">Submit</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;