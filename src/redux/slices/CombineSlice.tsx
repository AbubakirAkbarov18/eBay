import { combineSlices } from "@reduxjs/toolkit";
import likeReducer  from "./LikeSlice";
import cartReducer from "./CartSlice";

export const CombineReducers = combineSlices({
    like: likeReducer,
    cart: cartReducer,
})