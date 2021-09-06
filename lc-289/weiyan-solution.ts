function gameOfLife(board: number[][]): void {
  const n = board[0].length;
  const m = board.length;

  const needSwitch = (r: number, c: number) : boolean => {
    let cnt = 0;
    if (r>0 && c>0) cnt+=board[r-1][c-1];
    if (r>0) cnt+=board[r-1][c];
    if (r>0 && c<n-1) cnt+=board[r-1][c+1];
    if (c<n-1) cnt+=board[r][c+1];
    if (r<m-1 && c<n-1) cnt+=board[r+1][c+1];
    if (r<m-1) cnt+=board[r+1][c];
    if (r<m-1 && c>0) cnt+=board[r+1][c-1];
    if (c>0) cnt+=board[r][c-1];
    
    if (board[r][c]) {
      return (cnt!==2 && cnt!==3)
    } else {
      return cnt===3;
    }
  }
  
  const memo = [];
  for (let r=0; r<m; r++) {
    for (let c=0; c<n; c++) {
      if (needSwitch(r,c)) {
        memo.push([r,c]);
      }
    }
  }
  for (let i=0; i<memo.length; i++) {
    board[memo[i][0]][memo[i][1]] = board[memo[i][0]][memo[i][1]] ? 0 : 1;
  }
};
