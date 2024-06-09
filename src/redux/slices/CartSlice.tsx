import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    cart: any[]
}

const initialState: InitialState = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]') || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id).concat(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart.filter(item => item.id !== action.payload.id).concat(action.payload)))
        },
        RemoveFromCart: (state, action) => {
            state.cart = state.cart.filter((item: any) => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        IncreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item: any) => item.id === action.payload ? { ...item, count: item.count + 1 } : item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        DecreaseQuantity: (state, action) => {
            if(state.cart.find(product => product.id === action.payload).count > 1) {
                state.cart = state.cart.map((item: any) => item.id === action.payload ? { ...item, count: item.count - 1 } : item)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            else {
                state.cart = state.cart.filter((item: any) => item.id !== action.payload)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export const { RemoveFromCart } = cartSlice.actions;
export const { IncreaseQuantity } = cartSlice.actions;
export const { DecreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer