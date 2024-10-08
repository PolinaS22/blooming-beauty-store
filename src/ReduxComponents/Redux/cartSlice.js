import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],

    discountCode: 'GLOWUP24',
    discountPercent: 15
  },

  reducers: {
    addItemToCart: (state, action) => {
        const timeId = new Date().getTime();
        state.cartItems.push({
            id: timeId,
            itemId: action.payload.product.id,
            quantity: action.payload.quantity,
            price: action.payload.product.price,
            totalPrice: action.payload.product.price * action.payload.quantity,
        })
    },
    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload.cartItemId)
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.cartItemId);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.cartItemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    applyDiscount: (state, action) => {
      state.discountCode = action.payload.code 
      state.discountPercent = action.payload.percent
    },
    clearDiscount: (state) => {
      state.discountCode = null;
      state.discountPercent = 0;
    }
 
  },
})

export const getTotalPrice = state => {
  const totalWithoutSiscount = state.cart.cartItems.reduce (
    (total, cartItems) => 
    cartItems.totalPrice + total, 0);

  const discount = totalWithoutSiscount * (state.cart.discountPercent / 100);

  return totalWithoutSiscount - discount;
}

export const getDiscountCode = state => state.cart.discountCode;
export const getDiscountPersent = state => state.cart.discountPercent;

export const getCartItems = state => state.cart.cartItems;

export const { 
  addItemToCart, 
  removeItemFromCart, 
  increaseQuantity, 
  decreaseQuantity,
  applyDiscount,
  clearDiscount
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;


