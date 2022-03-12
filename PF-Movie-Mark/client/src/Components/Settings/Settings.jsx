import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Settings.module.css';
import popcorn from './assets/popcorn.png';
import { changeData, logoutUser } from '../../Actions';
import Loader from '../Loader/Loader';

const Settings = () => {
    let aux = {name:''}
    if(localStorage.getItem("user")){
        aux = localStorage.getItem("user");
        aux = JSON.parse(aux);
    }
    const [input,setInput] = useState({
        name:'',
    })
    const [error,setError] = useState({
        name:false,
    })
    const [changename,setChangeName] = useState(false);
    const [logoutsuccess,setLogoutSuccess] = useState(false);

    const dispatch = useDispatch();
    const history = useNavigate();

    function validate_name(str){
        let pattern = new RegExp("\[A-Z\]\[a-z\]{1,}"); //CAMBIAR REGEXP.... NO deberia aceptar espacios en blanco porque rompe... El back rompe con Jose Maria!
        return !!pattern.test(str);
    }

    function validate(ipname,ipvalue){
        if(ipname==="name"){
            (validate_name(ipvalue)===true)?setError({...error,name:false}):setError({...error,name:true})
        }
    }

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        validate(e.target.name,e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(changeData(
            {id:aux.id,
            name:input.name,
            }));
    }

    function handleChangeName(){
        setChangeName(true);
    }

    function handleLogout() {
        dispatch(logoutUser())
        .then(()=>{
            setLogoutSuccess(true);
            setTimeout( function() { history('/home'); }, 2000 );
        })
    }

    function handleChangePassword(){
        dispatch(logoutUser());
        history('/resetpassword')
    }

    return(
        <div className={styles.page}>
            <div className={styles.account}>
            <img src={popcorn} className={styles.img}alt="img popcorn"/>
            <h1 className={styles.title}>Account Settings</h1>
            <h2 className={styles.subtitle}>Hi {aux.name}</h2>
            <button className={styles.button} onClick={()=>handleChangePassword()}>Reset my password</button>
            {/* <button className={styles.button} onClick={()=>handleChangeName()}>Change my name</button> */}
            {
                changename===true?<form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                <input className={styles.input}
                value={input.name} type='text' name='name' placeholder="Name" onChange={e=>handleChange(e)}>
                </input>
                {
                    error.name===true?<button className={styles.buttondis} disabled type="submit">Change</button>:<button className={styles.button} type="submit">Change</button>
                }
                </form>:<></>
            }
            <button className={styles.button} onClick={()=>handleLogout()}>Logout</button>
            {
            logoutsuccess===true?<Loader/>:<></>
            }
            </div>
        </div>
    )
}

export default Settings;