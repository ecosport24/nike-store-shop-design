import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getStoredItem = localStorage.getItem("cart");
const initialState = {
  cartState: false,
  cartItems: getStoredItem ? JSON.parse(getStoredItem) : [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setCartState: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item Quantity Increased.");
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart.`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { setCartState, setAddItemToCart } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;

export default cartSlice.reducer;
