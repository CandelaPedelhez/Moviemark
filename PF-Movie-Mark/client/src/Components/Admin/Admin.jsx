import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUsers, logoutUser, makeAdmin } from '../../Actions';
import styles from './Admin.module.css';

const Admin = () => {
    let currentuser = {name:''}
    if(localStorage.getItem("user")){
        currentuser = localStorage.getItem("user");
        currentuser = JSON.parse(currentuser);
    }
    let users = useSelector(state=>state.users);
    users = users.filter(el=>el.id!=currentuser.id);

    // Design Admins
    const [userForAdmin,setUserForAdmin] = useState({
        id:'',
        role:''
    });
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    // Delete users
    const [userForDelete,setUserForDelete] = useState(-1);
    const [errorDelete,setErrorDelete] = useState(false);
    const [successDelete,setSuccessDelete] = useState(false);
    //

    const dispatch = useDispatch();
    const history = useNavigate();

    function SubmitFilm(){
        history('/admin/submit')
    }

    //

    function handleSelectAdmin(e){
        setUserForAdmin({
            id:e.target.value,
            role:"admin"
        })
    }

    function SubmitAdmin(){
        if(userForAdmin.id!=''){
            setError(false);
            dispatch(makeAdmin(userForAdmin))
            .then(()=>{
                setSuccess(true);
            })
        }
        else{
            setError(true);
        }
    }
    
    //

    function handleSelectDelete(e){
        setUserForDelete(e.target.value);
    }

    function SubmitDelete(){
        if(userForDelete.id!=''){
            setErrorDelete(false);
            dispatch(deleteUser(userForDelete))
            .then(()=>{
                setSuccessDelete(true);
            })
        }
        else{
            setErrorDelete(true);
        }
    }

    //

    function handleLogout() {
        dispatch(logoutUser())
        .then(()=>{
            setTimeout( function() { history('/home'); }, 2000 );
        })
    }

    useEffect(()=>{
        dispatch(getUsers());
    })

    return(
        <div className={styles.page}>
            <div className={styles.account}>
                <h1 className={styles.title}>Admin</h1>
                <h2 className={styles.subtitle}>Hi {currentuser.name}</h2>
                <button onClick={()=>SubmitFilm()}>Submit films</button>
                <div>
                    <p>Make Admins</p>
                    <select className={styles.select} onChange={e=>handleSelectAdmin(e)}>
                            {
                                users.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button onClick={()=>SubmitAdmin()}>Submit</button>
                    {error===true?<p>Please select one user</p>:<></>}
                    {success===true?<p>Success</p>:<></>}
                </div>
                
                <div>
                    <p>Delete users</p>
                    <select className={styles.select} onChange={e=>handleSelectDelete(e)}>
                            {
                                users.map(el=>{
                                    return <option key={el.id} value={el.id}>{el.email}</option>
                                })
                            }
                    </select>
                    <button onClick={()=>SubmitDelete()}>Submit</button>
                    {errorDelete===true?<p>Please select one user</p>:<></>}
                    {successDelete===true?<p>Success</p>:<></>}
                </div>
                <button className={styles.button} onClick={()=>handleLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default Admin;