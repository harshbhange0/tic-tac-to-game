import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/winner";
import Statusbar from "./components/Statusbar";

function App() {
  const [newIndex, setNewIndex] = useState(Array(9).fill(null));
  const [isOpponents, setIsOpponents] = useState(true);
  const winner = calculateWinner(newIndex);
  const handleClick = (clickedIndex) => {
    if (newIndex[clickedIndex] || winner.winner) {
      return;
    }
    setNewIndex((curIndex) => {
      return curIndex.map((item, index) => {
        if (index === clickedIndex) {
          return isOpponents ? "X" : "O";
        } else {
          return item;
        }
      });
    });
    setIsOpponents(!isOpponents);
  };

  const reset = () => {
    setNewIndex(Array(9).fill(null));
    setIsOpponents(true);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple-50 select-none">
      <h1 className="text-6xl font-semibold my-6">Tic Tac To</h1>
      <Statusbar
        isOpponents={isOpponents}
        winner={winner.winner}
        newIndex={newIndex}
      />
      <Board newIndex={newIndex} handleClick={handleClick} reset={reset} />
    </div>
  );
}

export default App;
