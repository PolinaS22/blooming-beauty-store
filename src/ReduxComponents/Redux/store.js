import { configureStore } from '@reduxjs/toolkit';
import items from './productsSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
    reducer: {
        items,
        cart: cartReducer
    },
  })