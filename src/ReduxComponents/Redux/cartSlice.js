import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },

  reducers: {

    addItemToCart: (state, action) => {
        const timeId = new Date().getTime();

        // const itemId = action.payload.id;
        // const existingItem = state.cartItems.find(item => item.id === itemId);

        // if (existingItem) {
        //     existingItem.quantity++;
        // }
        // else {
        //     state.cartItems.push(action.payload)
        //     // state.cartItems.push({
        //         // id: timeId,
        //         // itemId,
        //         // totalPrice: action.payload.quantity * action.payload.price,
        //         // priceWithDiscount: (action.payload.item.price * 0.25) * action.payload.quantity
        //     // })
        // }

        state.cartItems.push({
            id: timeId,
            itemId: action.payload.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.price,
        })
    },
    removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            item => item.id !== action.payload.cartItemId)
    },


    
    
  },
})

// export const getTotalPrice = state => {
//     return state.cartSlice.cartItems.reduce((total, cartItems) => {
//         return cartItems.totalPrice + total
//     }, 0)
// }

export const getCartItems = state => state.cart.cartItems;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


