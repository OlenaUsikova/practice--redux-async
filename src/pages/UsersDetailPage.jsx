import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchUser } from "redux/users/usersOperation";
import { selectCurrentUser } from "redux/users/usersSelectors"
import { Modal } from "components/Modal/Modal";

export const UsersDetailPage = ()=>{
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const {id}= useParams()
    const [userId, setUserId]= useState('')

    useEffect(()=>{
        dispatch(fetchUser(id))
    }, [dispatch, id]);

    const closeModal =()=>{
        setUserId('')
    }
    return <> 
     {currentUser &&
            <div>
        <p>Name: {currentUser.name}</p>
        <img src={currentUser.avatar} alt={currentUser.name} width="200"/>
        <p>Adress: {currentUser.adress}</p>
        <p>Phone: {currentUser.phone}</p>
        <p>Email: {currentUser.email}</p>
    </div>}
    <button onClick={()=> {setUserId(currentUser.id)}}>Delete</button>
    {userId && <Modal id={userId} onClose={closeModal}/>}
    </>
}