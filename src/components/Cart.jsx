import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartState, setCartState } from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const ifCartState = useSelector(selectCartState);
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(setCartState({ cartState: false }));
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full z-[250] h-screen ${
          ifCartState
            ? "opacity-100 translate-x-0 visible"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="blur-effect-theme h-screen w-full max-w-xl absolute right-0">
          <CartCount onCartToggle={onCartToggle} />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
