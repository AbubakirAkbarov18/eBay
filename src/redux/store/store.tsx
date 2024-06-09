import { configureStore } from '@reduxjs/toolkit'
import { CombineReducers } from '../slices/CombineSlice'

export const store = configureStore({
  reducer: {
    combine: CombineReducers
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch