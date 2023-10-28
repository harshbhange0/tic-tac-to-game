import React from "react";
import { BsCircle } from "react-icons/bs";
import { GiTireIronCross } from "react-icons/gi";

function Item({ value, onClick, isActive }) {
  return (
    <button
      className={`${
        isActive ? " bg-blue-300/50 " : "hover:bg-gray-200"
      } select-none cursor-pointer border border-gray-200 shadow-sm rounded-md m-2 w-20 h-20 text-3xl  bg-white text-blue-600 transition-all duration-75 ease-in flex items-center justify-center`}
      onClick={onClick}
    >
      {value === null ? "" : value === "X" ? <GiTireIronCross /> : <BsCircle />}
    </button>
  );
}

export default Item;
