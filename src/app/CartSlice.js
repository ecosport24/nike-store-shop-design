import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartState: false };

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setCartState: (state, action) => {
      state.cartState = action.payload.cartState;
    },
  },
});

export const { setCartState } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;

export default cartSlice.reducer;
