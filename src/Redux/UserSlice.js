import { createSlice } from "@reduxjs/toolkit";

const userState = {
    user : {}
}

export const userslice = createSlice({
    name : 'user',
    initialState : userState,
    reducers : {
        getUserDetails : (state,action) =>{
           state.user = action.payload
        }
    }
})