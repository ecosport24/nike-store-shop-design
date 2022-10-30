import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getStoredItem = localStorage.getItem("cart");
const initialState = {
  cartState: false,
  cartItems: getStoredItem ? JSON.parse(getStoredItem) : [],
  cartTotalAmount: 0,
  cartTotalQty: 0,
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
    setRemoveItemToCart: (state, action) => {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} removed from cart.`);
    },
    setIncreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item Quantity Increased.");
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    setDecreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.success("Item Quantity Decreased.");
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
      }
    },
    setClearItems: (state, action) => {
      state.cartItems = [];
      toast.success("Cart cleared.");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;

          return cartTotal;
        },
        { totalAmount: 0, totalQty: 0 }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQty = totalQty;
    },
  },
});

export const {
  setCartState,
  setAddItemToCart,
  setRemoveItemToCart,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearItems,
  setGetTotals,
} = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectCartTotalQty = (state) => state.cart.cartTotalQty;

export default cartSlice.reducer;
