import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/winner";

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

  console.log(winner);
  const reset = () => {
    setNewIndex(Array(9).fill(null));
    setIsOpponents(true);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple-50">
      <h1 className="text-6xl font-semibold mb-4">Tic Tac To</h1>

      <span className={`my-2 text-xl`}>
        {winner.winner
          ? `Winner is ${winner.winner}`
          : ` Next ${isOpponents ? " player X" : "player O"}`}
      </span>
      <Board newIndex={newIndex} handleClick={handleClick} reset={reset} />
    </div>
  );
}

export default App;
