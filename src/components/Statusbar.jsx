import React from "react";
import { BsCircle } from "react-icons/bs";
import { GiTireIronCross } from "react-icons/gi";

function Statusbar({ isOpponents, winner, newIndex }) {
  const leftMover = newIndex.every((value) => value !== null);

  const statusMS = () => {
    if (winner) {
      if (winner === "X") {
        return (
          <span className="flex items-center justify-normal gap-2">
            Winner is <GiTireIronCross className="text-blue-600" />
          </span>
        );
      } else if (winner === "O") {
        return (
          <span className="flex items-center justify-normal gap-2">
            Winner is <BsCircle className="text-blue-600" />
          </span>
        );
      }
    }
    if (!winner && leftMover) {
      return <span className=" text-red-400">Draw</span>;
    }
    if (!winner && !leftMover) {
      return (
        <span className="flex items-center justify-center gap-2">
          Next Player{" "}
          <span>
            {isOpponents ? (
              <GiTireIronCross className="text-blue-600" />
            ) : (
              <BsCircle className="text-blue-600" />
            )}
          </span>
        </span>
      );
    }
  };

  return <div className="my-2 text-xl">{statusMS()}</div>
}

export default Statusbar;
