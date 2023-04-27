import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], // Initialize the products property as an empty array
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload); // The products property should now be an array
      state.total += action.payload.price * action.payload.quantity;
    }
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
