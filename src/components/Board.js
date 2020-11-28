import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  // TODO: Populate the board with squares
  const board = squares.map((value, i) => (<Square key={i} value={value} onClick={() => onClick(i)}></Square>));

  return (
    <div className="board">
      {board}
    </div>
  );
};

export default Board;
