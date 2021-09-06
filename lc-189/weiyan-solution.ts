function countBattleships(board: string[][]): number {
  const memo = new Set();
  let ans = 0;
  for (let i =0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      if (board[i][j] === 'X' && !memo.has(i+'-'+j)) {
        memo.add(i+'-'+j);
        let cnt = 0;
        if(j<board[0].length-1) {
          let x=j+1;
          while(x<board[0].length && board[i][x]==='X') {
            memo.add(i+'-'+x);
            x++;
          }
          if (x>j+1) cnt++;
        }
        if(i<board.length-1) {
          let y=i+1;
          while(y<board.length && board[y][j]==='X') {
            memo.add(y+'-'+j);
            y++;
          }
          if (y>i+1) cnt++;
        }
        ans += cnt===2 ? 2 : 1;
      }
    }
  }
  return ans;
};