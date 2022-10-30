import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-7 px-11 h-screen">
        <img
          src={emptybag}
          alt="img/emptybag"
          className="h-auto w-40 lg:w-36 sm:w-28 object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          className="flex items-center justify-center gap-3 button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 py-2 px-5 text-sm font-semibold text-slate-900 active:scale-110"
          type="button"
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
