import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartCount = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-between px-3 bg-white h-11 w-full sticky top-0 left-0 right-0">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 storke-[2]" />
          </div>
          <div className="">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart
              <span className="bg-theme-cart rounded ml-1 px-1 py-0.5 text-slate-100 text-xs font-normal">
                (Items)
              </span>
            </h1>
          </div>
        </div>
        <div>
          <button className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 text-sm font-normal active:scale-90">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
