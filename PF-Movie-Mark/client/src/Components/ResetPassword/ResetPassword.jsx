import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendMail } from '../../Actions';
import Loader from '../Loader/Loader';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
    const [input,setInput] = useState({
        email:''
    })
    const [error,setError] = useState({
        email:false,
    })
    const [isSent,setIsSent] = useState(false);
    const [errorEmailBack,setErrorEmailBack] = useState({
        bool:false,
        detail:''
    });
    const [charging,setCharging] = useState(false);

    const dispatch = useDispatch();
    
    function validate_email(str){
        let pattern =  new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return !!pattern.test(str);
    }

    function validate(ipname,ipvalue){
        if(ipname==="email"){
            (validate_email(ipvalue)===true)?setError({...error,email:false}):setError({...error,email:true})
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
        setCharging(true);
        dispatch(sendMail(input))
        .then(res=>{
            if(res.payload.success==='Done'){
                setErrorEmailBack({
                    bool:false,
                    detail:'Mail sent'
                })
                setIsSent(true);                    
            }
            else{
                setErrorEmailBack({
                    bool:true,
                    detail:'Email not registered',
                })
                setCharging(false);
                setIsSent(false); 
                setInput({
                    email:'',
                })
            }
        })
    }
    function redirect(){
        window.location.href = "http://localhost:3000/entertoken"
    }
    
    return(
        <div> 
            <div className={styles.back}>
                <button className={styles.backbtt}>Back</button>
            </div>
            <div className={styles.page}>
            <h1 className={styles.title}>Reset your password</h1>
            <form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                <p>Please enter your email:</p>
                <input className={styles.input}
                value={input.email} type='text' name='email' placeholder="Email" onChange={e=>handleChange(e)}>
                </input>
                {
                    error.email===true ||input.email.trim()===''?<button className={styles.buttondis} disabled type="submit">Send mail</button>:<button className={styles.button} type="submit">Send mail</button>
                }
                {
                    errorEmailBack.bool===true?<p className={styles.errors}>{errorEmailBack.detail}</p>:<></>
                }
                {   charging===true?<Loader/>:<></>}
                {
                    isSent===true?redirect():<></>
                }
            </form>
            </div>
        </div>
    )
}

export default ResetPassword; 