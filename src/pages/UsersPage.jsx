import { selectUsers } from "redux/users/usersSelectors"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "redux/users/usersOperation";
import { Link} from "react-router-dom";

export const UsersPage = () => {
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    console.log(users);
    return (
      <>
         <ul>
           {users.map(user => (
             <li key={user.id}>
               <Link to={user.id}>{user.name}</Link>
             </li>
           ))}
         </ul>
         <Link to='add'>Add User</Link></>
       );
     };