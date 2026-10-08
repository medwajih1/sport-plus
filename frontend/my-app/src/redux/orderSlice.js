import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },

    setCurrentOrder: (state, action) => {
      state.currentOrder =
        action.payload;
    },

    addOrder: (state, action) => {
      state.orders.unshift(
        action.payload
      );
    },

    updateOrderStatus: (
      state,
      action
    ) => {
      const {
        id,
        status,
      } = action.payload;

      const order = state.orders.find(
        (item) =>
          (item._id || item.id) === id
      );

      if (order) {
        order.status = status;
      }

      if (
        state.currentOrder &&
        (state.currentOrder._id ||
          state.currentOrder.id) === id
      ) {
        state.currentOrder.status =
          status;
      }
    },

    removeOrder: (state, action) => {
      const id = action.payload;

      state.orders =
        state.orders.filter(
          (order) =>
            (order._id || order.id) !== id
        );
    },

    setOrderLoading: (
      state,
      action
    ) => {
      state.loading = action.payload;
    },

    setOrderError: (
      state,
      action
    ) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearOrderError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setOrders,
  setCurrentOrder,
  addOrder,
  updateOrderStatus,
  removeOrder,
  setOrderLoading,
  setOrderError,
  clearOrderError,
} = orderSlice.actions;

export default orderSlice.reducer;