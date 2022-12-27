import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './actionAndReducer/AddToCart'

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
})
