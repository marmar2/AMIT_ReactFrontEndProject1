import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    items : [],
    itemsPrice : [],
    totalPrice:0,
    sum:0
}

export const cartslice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addToCart : (state, action) => {
            state.items.push(action.payload)
            state.itemsPrice.push(action.payload.price)
            state.totalPrice += action.payload.price
            state.sum ++
            
        },
        removeFromCart : (state, action) => {
             console.log(action.payload)
             state.totalPrice -= state.itemsPrice[action.payload]
             state.items.splice(action.payload,1)
             state.itemsPrice.splice(action.payload,1)
             state.sum --
            // const newArr = state.items.filter((items) => items.id !== action.payload.id)
            // items = newArr
            
        }
    }
})