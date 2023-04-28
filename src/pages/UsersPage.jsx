import { selectUsers } from "redux/users/usersSelectors"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "redux/users/usersOperation";


export const UsersPage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())        
    },[dispatch])
    
    console.log(useSelector(selectUsers));

    return <div>Users </div>
}