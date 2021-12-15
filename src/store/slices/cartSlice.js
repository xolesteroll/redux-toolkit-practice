import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalAmount: 0,
    totalItemsPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addCartItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
            state.totalAmount++
            state.totalItemsPrice += newItem.price
        },
        removeCartItem(state, action) {
            const id = action.payload.id
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
            state.totalAmount--
            state.totalItemsPrice -= action.payload.price

        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer