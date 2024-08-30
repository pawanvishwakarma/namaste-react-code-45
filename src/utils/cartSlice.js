import { createSlice, current } from "@reduxjs/toolkit";

// createSlice fn take that configuration
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearItem: (state, action) => {
            console.log("clearItem",current(state.items))
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer;