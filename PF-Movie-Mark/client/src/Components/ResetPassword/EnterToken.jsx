import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendToken } from '../../Actions';
import Loader from '../Loader/Loader';
import styles from './EnterToken.module.css';

const EnterToken = () => {
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
    const [done,setDone] = useState(false);

    const dispatch = useDispatch();
    const history = useNavigate();

    function validate_password(str){
        let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        return !!pattern.test(str);
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
        dispatch(sendToken({
            passwordResetToken:token.id,
            password:token.password
        }))
        .then((res)=>{
            if(res.payload.success==="Password reset done"){
                setDone(true);
                setInvalidToken({
                    bool:false,
                })
                setTimeout( function() { history('/login'); }, 2000 );
            }
            else{
                setInvalidToken({
                    bool:true,
                })
            }
        })
    }
    return(
        <div className={styles.page}>
            <form className={styles.form} onSubmit={e=>handleSubmitToken(e)}>
                        <p>Enter your token:</p>
                    <input className={styles.input}
                    value={token.id} type='number' name='id' placeholder="Token" onChange={e=>handleChangeToken(e)}>
                    </input>

                        <p>Enter your new password</p>
                    <input className={styles.input}
                    value={token.password} type='password' name='password' placeholder="Password" onChange={e=>handleChangeToken(e)}>
                    </input>
                    {errorpass.bool===true||token.id.trim()===''||token.password===''?<button disabled className={styles.buttondis} type="submit">Send</button>:<button className={styles.button} type="submit">Send</button>}
                    {errorpass.bool===true?<p className={styles.errors}>Minimum eight characters, at least one letter and one number</p>:<></>}
                    {invalidToken.bool===true?<p className={styles.errors}>Invalid Token</p>:<></>}
                        {
                done===true?<p className={styles.success}>Password changed. You can login now</p>:<></>
            }
            </form>
            {
                done===true?(<Loader/>):<></>
            }
        </div>
    )
}

export default EnterToken;