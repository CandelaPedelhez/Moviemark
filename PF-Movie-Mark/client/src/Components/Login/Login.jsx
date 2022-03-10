import { useState } from 'react';
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Actions';
import styles from './Login.module.css';

const Login = () => {
    const [input,setInput] = useState({
        email:'',
        password:''
    })
    const [error,setError] = useState({
        email:true,
        password:true,
    })

    const dispatch = useDispatch();
    const history = useNavigate();

    const makedispatch = (e) => {
        e.preventDefault();
        dispatch(loginUser(input))
        .then(()=>{
            history('/home');
            window.location.reload();
        })
        setInput({
            email:'',
            password:''
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

    const signGoogle = () => {
        window.location.href = 'http://localhost:3000/auth/google/';
    }

    const signFacebook = () => {
        window.location.href = 'http://localhost:3000/auth/facebook';
    }

    return(
        <div className={styles.page}>
            <div className={styles.title}>Login</div>
            <form onSubmit={(e)=>makedispatch(e)}>
                <input className={styles.input}
                value={input.email} type='text' name='email' placeholder="Email" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.password} type='password' name='password' placeholder="Password" onChange={e=>handleChange(e)}>
                </input>
                <div>
                    {
                        error.email===true||error.password===true?<button disabled type="submit">Sign in</button>:<button type="submit">Sign in</button>
                    }
                </div>

                <div className={styles.social}>
                    <button className={styles.google} onClick={signGoogle}>
						google
					</button>
					<button className={styles.facebook} onClick={signFacebook}>
						facebook
					</button>
                </div>

                <div className={styles.others}>
                        <Link className={styles.nav_link} to='/register'>
                        Register
                        </Link>
                        <Link className={styles.nav_link} to='/resetpassword'>
                        Reset Password
                        </Link>
                </div>
            </form>
        </div>
    )
}
export default Login; 