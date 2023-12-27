import { configureStore } from "@reduxjs/toolkit";
import {cartslice} from './CartSlice';
import { userslice } from "./UserSlice";

export const store = configureStore({
    reducer: {
        cartt : cartslice.reducer,
        userr : userslice.reducer
    }
})