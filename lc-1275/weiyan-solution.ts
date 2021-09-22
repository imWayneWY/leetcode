function tictactoe(moves: number[][]): string {
  const board = new Array(3);
  for (let i=0; i<3; i++) {
    board[i] = new Array(3).fill("");
  }
  let turnX = true;
  for (let i=0; i<moves.length; i++) {
    board[moves[i][0]][moves[i][1]] = turnX ? 'A' : 'B';
    turnX = !turnX;
  }
  for (let i=0; i<3; i++) {
    if(!!board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    }
    if(!!board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  if (!!board[1][1] && board[0][0] ===  board[1][1] && board[1][1] === board[2][2]) return board[1][1];
  if (!! board[1][1] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[1][1];
  
  return moves.length === 9 ? "Draw" : "Pending";
};
