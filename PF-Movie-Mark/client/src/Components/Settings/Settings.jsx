import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Settings.module.css';
import popcorn from './assets/popcorn.png';

const user = {
    id: 1,
		name: "Francisco",
		lastName: "Cedermaz",
		email: "francedermaz@gmail.com",
		role: "user",
}

const Settings = () => {
    //const user = useSelector(state=>state.user);
    const [input,setInput] = useState({
        name:'',
    })
    const [error,setError] = useState({
        name:false,
    })
    const [changename,setChangeName] = useState(false)

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

    }

    function handleChangeName(){
        setChangeName(true);
    }

    return(
        <div className={styles.page}>
            <div className={styles.account}>
            <img src={popcorn} className={styles.img}alt="img popcorn"/>
            <h1 className={styles.title}>Account Settings</h1>
            <h2 className={styles.subtitle}>Hi {user.name}</h2>
            <Link className={styles.nav_link} to='/resetpassword'>
                Change my password
            </Link>
            <button onClick={()=>handleChangeName()}>Change my name</button>
            {
                changename===true?<form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                <input className={styles.input}
                value={input.name} type='text' name='name' placeholder="Name" onChange={e=>handleChange(e)}>
                </input>
                {
                    error.password===true?<button className={styles.buttondis} disabled type="submit">Change</button>:<button className={styles.button} type="submit">Change</button>
                }
                </form>:<></>
            }
            </div>
        </div>
    )
}

export default Settings;