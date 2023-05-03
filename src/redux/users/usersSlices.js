import { fetchUsers, fetchUser, deleteUser, addUser } from "./usersOperation"; 
import {createSlice}  from "@reduxjs/toolkit"

const initialState={
   users:[],
   isLoading: false,
   error: null, 
   currentUser:null,
};
const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
      builder
  
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.users = action.payload;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.currentUser = action.payload;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.users = state.users.filter(user => user.id !== action.payload);
        })
        .addCase(addUser.fulfilled, (state, {payload}) => {
          state.users.push(payload);
          state.isLoading = false;
          state.error = null;
        })
        .addMatcher(
          action => action.type.endsWith('pending'),
          state => {
            state.isLoading = true;
          }
        )
        .addMatcher(
          action => action.type.endsWith('rejected'),
          (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          }
        );
    },
  });
  
  export const usersReducer = usersSlice.reducer;