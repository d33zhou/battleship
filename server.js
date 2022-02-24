// generate a 10x10 board
const generateBoard = () => {

  const board = [];
  const boardSize = 10;

  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++ ) {
      !board[y] ? board[y] = [0] : board[y][x] = 0;
    }
  }

  return board;
};

console.log(generateBoard());