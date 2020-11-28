import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
// import { result } from "../result";
// import { jumpToStart } from "../jump_to_start";
// import { handleClick} from "../handle_click";
import Board from "./Board";
import Square from './Square';

const Game = () => {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

  const [stepNumber, setStepNumber] = useState(0);  // int that is the 'step' number

  const [xIsNext, setXisNext] = useState(true);  // boolean

  const winner = calculateWinner(board); // a string that is the value of a square object


  const handleClick = (index) => {
    //console.log("Square " + index + " is clicked!");
    let newBoard = board.slice();

    if (winner != null || stepNumber >= 9) {
      return;
    }
    const letter = xIsNext ? "X" : "O";
    newBoard[index] = letter;

    setBoard(newBoard);
    setXisNext(!xIsNext);
    let count = stepNumber;
    count++;
    console.log(count);
    setStepNumber(count);
  };

  const jumpToStart = () => {
       setBoard([null, null, null, null, null, null, null, null, null]);
       setStepNumber(0);
  };

  const result = () => {
    // return the resulting state of the game after a click happens
      if (winner != null) {
        return "Winner: " + winner;
      } else if (stepNumber === 9) {
        return "Tie Game";
      } else {
        return (xIsNext) ? "Next player: X" : "Next player: O";
      }
  };


  return (
    <>
    <h1>Tic Tac Toe</h1>
    <Board squares={board} onClick={handleClick} />
    <div className='info-wrapper'>
      <h3><p text-align="right">{result()}</p></h3>
        <div>
          <button className="btn" onClick={jumpToStart}>Go to Start</button>
          {handleClick}
        </div>
    </div>

    </>
  )
};







export default Game;
