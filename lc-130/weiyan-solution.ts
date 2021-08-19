import { UnionFind } from "../utils/union-find";

/**
 * 非最佳解法， dfs是更合理的思路
 * @param board 
 * @returns 
 */

/**
 Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {
  if (board.length === 0) return;

  let m = board.length;
  let n = board[0].length;

  const uf = new UnionFind(m * n + 1);
  let dummy = m * n;
  
  for(let i=0; i<m; i++) {
    if(board[i][0] === 'O') {
      uf.union(i*n, dummy);
    }
    if(board[i][n-1]==='O') {
      uf.union(i*n + n - 1, dummy);
    }
  }

  for(let j=0; j<n; j++) {
    if(board[0][j] === 'O') {
      uf.union(j, dummy);
    }
    if(board[m-1][j] === 'O') {
      uf.union(n*(m-1)+j, dummy);
    }
  }

  const d = [[1,0],[0,1], [0,-1], [-1,0]];
  for(let i=1; i<m-1; i++) {
    for(let j=1; j<n-1; j++) {
      if(board[i][j]==='O') {
        for (let k=0; k<4; k++) {
          const x = i + d[k][0];
          const y = j + d[k][1];
          if (board[x][y] === 'O')
            uf.union(x*n+y, i*n+j);
        }
      }
    }
  }
  for(let i=1; i<m-1; i++) {
    for(let j=1; j<n-1; j++) {
      if(!uf.connect(dummy, i*n+j)) {
        board[i][j] = 'X';
      }
    }
  }
};
