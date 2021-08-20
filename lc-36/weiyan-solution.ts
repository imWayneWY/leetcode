/**
 * 直接遍历
 * @param board 
 * @returns 
 */
function isValidSudoku(board: string[][]): boolean {
  const isValid = (r: number, c: number, n: string): boolean => {
        for (let i=0; i<9; i++) {
            if (i!==c && board[r][i] === n) return false;
            if (i!==r && board[i][c] === n) return false;
            const row = Math.floor(Math.floor(r/3)*3 + Math.floor(i/3));
            const col = Math.floor(Math.floor(c/3)*3 + Math.floor(i%3));
            if (row!==r && col !==c && board[row][col]===n)
                return false;
        }
        return true;
  }
  
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      if(board[i][j]!=='.' && !isValid(i, j, board[i][j]))
        return false;
    }
  }
  
  return true;
};
