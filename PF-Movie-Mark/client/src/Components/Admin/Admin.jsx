import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser, getAdmins, getAllUsers, getUsers, logoutUser, makeOrQuitAdmin, revokePass } from '../../Actions';
import styles from './Admin.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from '../Loader/Loader';

const Admin = () => {
    let currentuser = {name:''}
    if(localStorage.getItem("user")){
        currentuser = localStorage.getItem("user");
        currentuser = JSON.parse(currentuser);
    }
    let users = useSelector(state=>state.users);
    users = users.filter(el=>el.id!=currentuser.id);

    let admins = useSelector(state=>state.admins);
    admins = admins.filter(el=>el.id!=currentuser.id);
    let normalusers = useSelector(state=>state.normalusers);
    normalusers = normalusers.filter(el=>el.id!=currentuser.id);

    // Design Admins
    const [userForAdmin,setUserForAdmin] = useState({
        id:'',
        role:''
    });
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    // Quit admin
    const [userForQuitAdmin,setUserForQuitAdmin] = useState({
        id:'',
        role:''
    });
    const [errorQuit,setErrorQuit] = useState(false);
    const [successQuit,setSuccessQuit] = useState(false);
    // Delete users
    const [userForDelete,setUserForDelete] = useState(-1);
    const [errorDelete,setErrorDelete] = useState(false);
    const [successDelete,setSuccessDelete] = useState(false);

    //
    const [charging,setCharging] = useState(false);
    //

    const dispatch = useDispatch();
    const history = useNavigate();

    function SubmitFilm(){
        history('/admin/manage/films')
    }
    function DeleteAvailable(){
        history('/availables/deleteAvailable')
    }
    function AddAvailable(){
        history('/available')
    }
    function StockGroceries(){
        history('groceries/update')
    }
    function SubmitGroceries(){
        history('/admin/manage/groceries')
    }
    function Newsletter(){
        history('/admin/newsletter')
    }

    // Give admin

    function handleSelectAdmin(e){
        setUserForAdmin({
            id:e.target.value,
            role:"admin"
        })
    }

    function SubmitAdmin(){
        if(userForAdmin.id!=''){
            setError(false);
            setCharging(true);
            dispatch(makeOrQuitAdmin(userForAdmin))
            .then(()=>{
                setCharging(false);
                setSuccess(true);
                refreshPage();
            })
        }
        else{
            setError(true);
        }
    }

    // Delete admins
    function handleSelectQuitAdmin(e){
        setUserForQuitAdmin({
            id:e.target.value,
            role:"user"
        })
    }

    function SubmitQuitAdmin(){
        if(userForQuitAdmin.id!=''){
            setErrorQuit(false);
            setCharging(true);
            dispatch(makeOrQuitAdmin(userForQuitAdmin))
            .then(()=>{
                setSuccessQuit(true);
                setCharging(false);
                refreshPage();
            })
        }
        else{
            setErrorQuit(true);
        }
    }
    
    // Delete users

    function handleSelectDelete(e){
        setUserForDelete(e.target.value);
    }

    function SubmitDelete(){
        if(userForDelete!=-1){
            setErrorDelete(false);
            setCharging(true);
            dispatch(deleteUser(userForDelete))
            .then(()=>{
                setCharging(false);
                setSuccessDelete(true);
                refreshPage();
            })
        }
        else{
            setErrorDelete(true);
        }
    }
    
    //Reset user's password
    const [userForReset,setUserForReset] = useState(-1);
    const [errorReset,setErrorReset] = useState(false);
    const [successReset,setSuccessReset] = useState(false);

    function handleSelectReset(e){
        setUserForReset(e.target.value);
    }

    function SubmitReset(e){
        if(userForReset!=-1){
            setErrorReset(false);
            setCharging(true);
            dispatch(revokePass(userForReset))
            .then(()=>{
                setCharging(false);
                setSuccessReset(true);
                refreshPage();
            })
        }
        else{
            setErrorReset(true);
        }
    }
    

    //

    function handleLogout() {
        setCharging(true);
        dispatch(logoutUser())
        .then(()=>{
            setTimeout( function() { window.location.href ='http://localhost:3000/home'; }, 2000 )
        })
    }

    //

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(()=>{
        dispatch(getAllUsers());
        dispatch(getAdmins());
        dispatch(getUsers());
    },[dispatch])

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
            <div className={styles.account}>
                <h1 className={styles.title}>Admin</h1>
                <h2 className={styles.hi}>Hi {currentuser.name}</h2>
                <button onClick={()=>SubmitFilm()}>Add films</button>
                <button onClick={()=>DeleteAvailable()}>Delete function</button>
                <button onClick={()=>AddAvailable()}>Add function</button>
                <button onClick={()=>SubmitGroceries()}>Add groceries</button>
                <button onClick={()=>StockGroceries()}>Manage stock groceries</button>
                <button onClick={()=>Newsletter()}>Newsletter</button>
                <div>
                    <p className={styles.subtitle}>Make Admins</p>
                    <select className={styles.select} onChange={e=>handleSelectAdmin(e)}>
                    <option value="" selected disabled hidden>Choose one user</option>
                            {
                                normalusers.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button className={styles.button} onClick={()=>SubmitAdmin()}>Submit</button>
                    {error===true?<p className={styles.error}>Please select one user</p>:<></>}
                    {success===true?<p className={styles.success}>Success</p>:<></>}
                </div>

                <div>
                    <p className={styles.subtitle}>Quit Admins</p>
                    <select className={styles.select} onChange={e=>handleSelectQuitAdmin(e)}>
                    <option value="" selected disabled hidden>Choose one user</option>
                            {
                                admins.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button className={styles.button} onClick={()=>SubmitQuitAdmin()}>Submit</button>
                    {errorQuit===true?<p className={styles.error}>Please select one user</p>:<></>}
                    {successQuit===true?<p className={styles.success}>Success</p>:<></>}
                </div>
                
                <div>
                    <p className={styles.subtitle}>Delete users</p>
                    <select className={styles.select} onChange={e=>handleSelectDelete(e)}>
                    <option value="" selected disabled hidden>Choose one user</option>
                            {
                                users.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button className={styles.button} onClick={()=>SubmitDelete()}>Submit</button>
                    {errorDelete===true?<p className={styles.error}>Please select one user</p>:<></>}
                    {successDelete===true?<p className={styles.success}>Success</p>:<></>}
                </div>

                <div>
                    <p className={styles.subtitle}>Reset user's password</p>
                    <select className={styles.select} onChange={e=>handleSelectReset(e)}>
                    <option value="" selected disabled hidden>Choose one user</option>
                            {
                                users.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button className={styles.button} onClick={()=>SubmitReset()}>Submit</button>
                    {errorReset===true?<p className={styles.error}>Please select one user</p>:<></>}
                    {successReset===true?<p className={styles.success}>Success</p>:<></>}
                </div>

                <div>
                    <Link className={styles.nav_link} to='/resetpassword'>
                        Reset Password
                    </Link>
                </div>
                <button className={styles.button} onClick={()=>handleLogout()}>Logout</button>
            </div>
        </div>
        {
            charging===true?<Loader/>:<></>
        }
        </div>
    )
}

export default Admin;