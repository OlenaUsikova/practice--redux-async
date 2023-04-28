// import { useSelector } from "react-redux";
export const selectUsers = (state)=>{
    return state.users
};

export const selectIsLoading = (state)=> {
    return state.isLoading
}
