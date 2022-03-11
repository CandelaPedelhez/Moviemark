import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendMail, sendToken } from '../../Actions';
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
    const [token,setToken] = useState({
        id:'',
        password:''
    })
    const [errorpass,setErrorPass] = useState({
        bool:false,
    })
    const [invalidToken,setInvalidToken] = useState({
        bool:false,
    })
    
    const dispatch = useDispatch();
    const history = useNavigate();

    function validate_email(str){
        let pattern =  new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return !!pattern.test(str);
    }

    function validate(ipname,ipvalue){
        if(ipname==="email"){
            (validate_email(ipvalue)===true)?setError({...error,email:false}):setError({...error,email:true})
        }
    }

    function validate_password(str){
        let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        return !!pattern.test(str);
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
        dispatch(sendMail(input))
        .then(res=>{
            console.log(res);
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
                setIsSent(false); 
                setInput({
                    email:'',
                })
            }
        })
    }

    function handleChangeToken(e){
        e.preventDefault();
        setToken({
            ...token,
            [e.target.name]: e.target.value,
        })
        if(e.target.name==="password"){
            if(validate_password(e.target.value)){
                setErrorPass({
                    bool:false,
                })
            }
            else{
                setErrorPass({
                    bool:true,
                })
            }
        }
    }

    function handleSubmitToken(e){
        e.preventDefault();
        if(errorpass.bool!==true){
            dispatch(sendToken(token))
            .then((res)=>{
                if(res.success==="Password reset done"){
                    history('/login');
                    window.location.reload();
                }
                else{
                    invalidToken.bool=true;
                }
            })
        }
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
                    errorEmailBack.bool===true?<p>{errorEmailBack.detail}</p>:<></>
                }
                {
                    isSent===true?
                    (<form className={styles.form} onSubmit={e=>handleSubmitToken(e)}>
                        <p>Enter your token:</p>
                    <input className={styles.input}
                    value={token.id} type='number' name='id' placeholder="Token" onChange={e=>handleChangeToken(e)}>
                    </input>

                        <p>Enter your new password</p>
                    <input className={styles.input}
                    value={token.password} type='password' name='password' placeholder="Password" onChange={e=>handleChangeToken(e)}>
                    </input>
                    <button className={styles.button} type="submit">Send</button>
                    </form>)
                    :<></>
                }
                {isSent==true && errorpass.bool===true?<p>Minimum eight characters, at least one letter and one number</p>:<></>}
                {invalidToken.bool===true?<p>Invalid Token</p>:<></>}
            </form>
            </div>
        </div>
    )
}

export default ResetPassword; 