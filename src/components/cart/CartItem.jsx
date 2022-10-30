import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQty,
  setIncreaseItemQty,
  setRemoveItemToCart,
} from "../../app/CartSlice";

const CartItem = ({
  item: { id, title, text, img, price, color, shadow, cartQuantity },
}) => {
  const dispatch = useDispatch();
  const onRemoveItemToCart = () => {
    dispatch(setRemoveItemToCart({ id: id, title: title }));
  };
  const onIncreaseItemQty = () => {
    dispatch(setIncreaseItemQty({ id: id, title: title }));
  };
  const onDecreaseItemQty = () => {
    dispatch(setDecreaseItemQty({ id: id, title: title }));
  };
  return (
    <>
      <div className=" flex items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="object-fill w-36 h-auto lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-xs text-black rounded px-1">
              ${price}
            </div>
          </div>
          <div className=" grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="text-lg font-medium text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 flex justify-center items-center active:scale-90"
                onClick={onDecreaseItemQty}
              >
                <MinusIcon className="w-5 h-5 lg:h-4 lg:w-4 stroke-[2] text-white" />
              </button>
              <div className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 stroke-[2] text-white lg:text-xs flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:h-5 lg:w-5 flex justify-center items-center active:scale-90"
                onClick={onIncreaseItemQty}
              >
                <PlusIcon className="w-5 h-5 lg:h-4 lg:w-4 stroke-[2] text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base font-medium text-slate-900">
              ${cartQuantity * price}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className=" bg-theme-cart rounded w-7 h-7 flex items-center justify-center text-white active:scale-90"
              onClick={onRemoveItemToCart}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
