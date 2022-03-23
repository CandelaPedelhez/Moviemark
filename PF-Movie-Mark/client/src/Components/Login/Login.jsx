import { useState } from 'react';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Actions';
import { createUser } from "../../Actions";
import Loader from '../Loader/Loader';
import { useAuth } from "../../Context/authContext"
import styles from './Login.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const [input,setInput] = useState({
        email:'',
        password:''
    })
    const [error,setError] = useState({
        email:true,
        password:true,
    })
    const [errorIncorrect,setErrorIncorrect] = useState({
        password:false,
        email:false
    });
    const [success,setSuccess] = useState(false);
    const [revoke,setRevoke] = useState(false);
    const { loginWithGoogle, loginWithGithub } = useAuth();

    const dispatch = useDispatch();
    const history = useNavigate();

    const makedispatch = (e) => {
        e.preventDefault();
        dispatch(loginUser(input))
        .then((res)=>{
            if(res.payload.msg ==="Incorrect password :("){
                setErrorIncorrect({
                    password:true
                });
            }
            else if(res.payload.msg === "Email not found :("){
                setErrorIncorrect({
                    email:true
                });
            }
            else if(res.payload.msg === "Revoke"){
                setErrorIncorrect({
                    password:false
                });
                setRevoke(true);
                setTimeout( function() { history('/resetpassword'); }, 1600 );
            }
            else{
                setInput({
                    email:'',
                    password:''
                })
                setSuccess(true);
<<<<<<< HEAD
                window.location.reload(false);
                setTimeout( function() { history('/home'); }, 1600 );
=======
                setTimeout( function() { window.location.href ='http://localhost:3000/home'; }, 1600 );
>>>>>>> 52845053fe3585bb76d69c7ae6c326adf3ee545f
            }
        })
    } 

    function validate_password(str){
        let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        return !!pattern.test(str);
    }

    function validate_email(str){
        let pattern =  new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return !!pattern.test(str);
    }

    function validate(ipname,ipvalue){
        if(ipname==="email"){
            (validate_email(ipvalue)===true)?setError({...error,email:false}):setError({...error,email:true})
        }
        if(ipname==="password"){
            (validate_password(ipvalue)===true)?setError({...error,password:false}):setError({...error,password:true})
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        validate(e.target.name,e.target.value);
    }

    const makedispatchgoogle = async (e) => {
        e.preventDefault();
        dispatch(createUser(input));
        await loginWithGoogle();
        setSuccess(true);
        setTimeout( function() { history('/home'); }, 1600 );
    }

    const makedispatchgithub = async (e) => {
        e.preventDefault();
        dispatch(createUser(loginWithGithub));
        await loginWithGithub();
        setSuccess(true);
        setTimeout( function() { history('/home'); }, 1600 );
    }

    return(
        <div> 
            <div className={styles.divbtt}>
                <Link to="/home">
                    <button className={styles.btnBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </Link>
            </div>

        <div className={styles.page}>
            <form className={styles.form} onSubmit={(e)=>makedispatch(e)}>
            <div className={styles.title}>Login</div>
                <input className={styles.input}
                value={input.email} type='text' name='email' placeholder="Email" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.password} type='password' name='password' placeholder="Password" onChange={e=>handleChange(e)}>
                </input>
                <div>
                    {
                        error.email===true||error.password===true?<button className={styles.buttondis} disabled type="submit">Sign in</button>:<button className={styles.button} type="submit">Sign in</button>
                    }
                </div>

                <div className={styles.social}>
                {/* <button className={styles.google} onClick={() => handleOnClick(googleProvider)}>
						google
					</button>
					<button className={styles.facebook} onClick={() => handleOnClick(facebookProvider)}>
						facebook
					</button> */}
                    <button
        onClick={(e)=>makedispatchgoogle(e)}
        className={styles.button}
      >
        Google login
      </button>
      <button
        onClick={(e)=>makedispatchgithub(e)}
        className={styles.button}
      >
        Github login
      </button>
                </div>

                <div className={styles.others}>
                    <div>
                        <Link className={styles.nav_link} to='/signup'>
                        Register
                        </Link>
                    </div>
                    <div>
                        <Link className={styles.nav_link} to='/resetpassword'>
                        Reset Password
                        </Link>
                    </div>
                </div>
                {errorIncorrect.password===true?<p className={styles.errors}>Password Incorrect</p>:<></>}
                {errorIncorrect.email===true?<p className={styles.errors}>Email not registered</p>:<></>}
                {revoke===true?<p className={styles.errors}>Account blocked. Redirecting to reset your password</p>:<></>}
            </form>
            </div>
            {
                     success===true?<Loader/>:<></>
                }
        </div>
    )
}
export default Login; 