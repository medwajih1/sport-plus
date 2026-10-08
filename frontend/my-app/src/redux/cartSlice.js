import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const productId = product._id || product.id;

      const existingItem = state.items.find(
        (item) =>
          (item._id || item.id) === productId
      );

      if (existingItem) {
        existingItem.quantity +=
          product.quantity || 1;
      } else {
        state.items.push({
          ...product,
          quantity: product.quantity || 1,
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.items = state.items.filter(
        (item) =>
          (item._id || item.id) !== productId
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (product) =>
          (product._id || product.id) === id
      );

      if (item) {
        item.quantity = Math.max(1, quantity);
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    clearCart: (state) => {
      state.items = [];

      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;