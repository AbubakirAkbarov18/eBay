import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    likedProducts: any[]
}

const initialState: InitialState = {
    likedProducts: JSON.parse(localStorage.getItem('likedProducts') || '[]') || []
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addToLikedProducts: (state, action) => {
            state.likedProducts = state.likedProducts.filter(item => item.id !== action.payload.id).concat(action.payload)
            localStorage.setItem('likedProducts', JSON.stringify(state.likedProducts.filter(item => item.id !== action.payload.id).concat(action.payload)))
        },
        RemoveFromLikedProducts: (state, action) => {
            state.likedProducts = state.likedProducts.filter((item: any) => item.id !== action.payload)
            localStorage.setItem('likedProducts', JSON.stringify(state.likedProducts))
        }
    }
})

export const { addToLikedProducts } = likeSlice.actions;
export const { RemoveFromLikedProducts } = likeSlice.actions;
export default likeSlice.reducer