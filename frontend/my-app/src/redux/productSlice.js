import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct =
        action.payload;
    },

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    updateProduct: (state, action) => {
      const updatedProduct =
        action.payload;

      const id =
        updatedProduct._id ||
        updatedProduct.id;

      const index =
        state.products.findIndex(
          (product) =>
            (product._id || product.id) === id
        );

      if (index !== -1) {
        state.products[index] =
          updatedProduct;
      }
    },

    deleteProduct: (state, action) => {
      const id = action.payload;

      state.products =
        state.products.filter(
          (product) =>
            (product._id || product.id) !== id
        );
    },

    setProductLoading: (state, action) => {
      state.loading = action.payload;
    },

    setProductError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearProductError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  setProductLoading,
  setProductError,
  clearProductError,
} = productSlice.actions;

export default productSlice.reducer;