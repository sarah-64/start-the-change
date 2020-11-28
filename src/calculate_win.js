export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  //  [x, x, o, x, o, o, x, x, x]
  // If there is no winner, you can return null.

//horizontal wins
  for (let i = 0; i < 7; i++) {
    if (squares[i] != null && (i % 3 === 0)) {
      if (squares[i] === squares[i + 1] && squares[i + 1] === squares[i + 2]) {
        return squares[i];
      }
    }
  }

//vertical wins
for (let i = 0; i < 3; i++) {
  if (squares[i] != null) {
    if (squares[i] === squares[i + 3] && squares[i + 3] === squares[i + 6]) {
      return squares[i];
    }
  }
}

//check if there is a diagonal win (top left to bottom right)
  if (squares[0] != null && squares[0] === squares[4] && squares[4] === squares[8]) {
    return squares[0];
  }

//check if there is a diagonal win (top right to bottom left)
  if (squares[2] != null && squares[2] === squares[4] && squares[4] === squares[6]) {
    return squares[2];
  }

// if all above conditions fail
  return null;
}
