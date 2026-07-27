import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
   }

   const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state,action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === item._id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...item, quantity: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== productId);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem("cartItems");
          },
    }
   })

   export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
   export default cartSlice.reducer