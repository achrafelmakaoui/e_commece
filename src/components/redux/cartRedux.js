import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products:[],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const deletedProduct = state.products.find(
        (product) => product._id === action.payload
      );
      if (deletedProduct) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
        state.quantity -= 1;
        state.total -= deletedProduct.price * deletedProduct.quantity;
      }
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
