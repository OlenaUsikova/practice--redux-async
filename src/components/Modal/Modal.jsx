import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteUser } from "redux/users/usersOperation"

export const Modal = ({id, onClose})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleDelete = ()=>{
        dispatch(deleteUser(id));
        navigate('/users');
    }

    return(
        <div>Are you sure?
            <button onClick={handleDelete}>Yes</button>
            <button onClick={onClose}>No</button>
        `</div>
    )
}