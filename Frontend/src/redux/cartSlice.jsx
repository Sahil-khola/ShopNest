import { createSlice } from "@reduxjs/toolkit";

const loadCartItems = () => {
  const savedItems = localStorage.getItem("cartItems");
  if (!savedItems) return [];

  try {
    return JSON.parse(savedItems).map((item) => ({
      ...item,
      qty: item.qty ?? item.quantity ?? 1,
    }));
  } catch {
    return [];
  }
};

const saveCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
  cartItems: loadCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const qty = item.qty ?? item.quantity ?? 1;
      const existingItem = state.cartItems.find((i) => i.productId === item.productId);

      if (existingItem) {
        existingItem.qty = qty;
      } else {
        state.cartItems.push({ ...item, qty });
      }

      saveCartItems(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.productId !== productId);
      saveCartItems(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;