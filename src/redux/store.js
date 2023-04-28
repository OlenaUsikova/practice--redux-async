import { usersReducer } from "./users/usersSlices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: usersReducer,
})