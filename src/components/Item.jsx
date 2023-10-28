import React from "react";

function Item({ value, onClick, isActive }) {
  return (
    <button
      className={`${
        isActive ? "bg-blue-200" : "hover:bg-gray-200"
      } select-none cursor-pointer border border-gray-200 shadow-sm rounded-md m-2 w-20 h-20 text-3xl  bg-white text-blue-600 transition-all duration-75 ease-in flex items-center justify-center`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Item;
