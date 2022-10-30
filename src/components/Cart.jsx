import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectCartTotalAmount,
  selectCartTotalQty,
  setCartState,
  setGetTotals,
} from "../app/CartSlice";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotalAmount = useSelector(selectCartTotalAmount);
  const cartItemsTotalQty = useSelector(selectCartTotalQty);
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(setCartState({ cartState: false }));
  };

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

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
          <CartCount
            onCartToggle={onCartToggle}
            cartItemsTotalQty={cartItemsTotalQty}
          />
          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex flex-col justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[90vh] scroll-smooth scroll-hidden py-3 pb-20">
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full grid items-center px-5 py-2">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold uppercase text-base">
                    Subtotal
                  </h1>
                  <h1 className="bg-theme-cart text-white rounded px-1 py-0.5 text-sm">
                    ${cartItemsTotalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="font-medium text-center text-sm">
                    Taxes and Shipping will Calculate at Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-slate-100"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
