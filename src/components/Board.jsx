import React from "react";

import Item from "./Item";

function Board({ newIndex, handleClick, reset }) {
  const renderItem = (position) => {
    return (
      <Item
        isActive={newIndex[position] === null ? false : true}
        value={newIndex[position]}
        onClick={() => handleClick(position)}
      />
    );
  };
  return (
    <>
      <div className="flex flex-col border shadow-md rounded-md p-2 bg-white">
        <div className="flex flex-row">
          {renderItem(0)}
          {renderItem(1)}
          {renderItem(2)}
        </div>
        <div className="flex flex-row">
          {renderItem(3)}
          {renderItem(4)}
          {renderItem(5)}
        </div>
        <div className="flex flex-row">
          {renderItem(6)}
          {renderItem(7)}
          {renderItem(8)}
        </div>
      </div>
      <button onClick={reset} className="text-3xl mt-9">
        Reset
      </button>
    </>
  );
}

export default Board;
