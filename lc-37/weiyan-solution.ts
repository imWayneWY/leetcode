/**
 * 回溯算法，labuladong上抄的，链接找不到了
 * @param board 
 */
/**
 Do not return anything, modify board in-place instead.
 */
 function solveSudoku(board: string[][]): void {
	const backtrack = (i: number, j: number): boolean => {
			let m=9, n=9;
			if (i===m && n===i) {
					return true;
			}
			if (j===n) {
					return backtrack(i+1, 0);
			}      
			if (board[i][j] !== '.') {
					return backtrack(i, j+1);
			}
			
			for (let c=1; c<=9; c++) {
					const ch = c.toString();
					if (!isValid(i, j, ch))
							continue;
					
					board[i][j] = ch;
					
					if (backtrack(i, j+1)) {
							return true;
					}
					board[i][j]='.';
			}
			return false;
	}
	
	const isValid = (r: number, c: number, n: string): boolean => {
			for (let i=0; i<9; i++) {
					if (board[r][i] === n) return false;
					if (board[i][c] === n) return false;
					const row = Math.floor(Math.floor(r/3)*3 + Math.floor(i/3));
					const col = Math.floor(Math.floor(c/3)*3 + Math.floor(i%3));
					if (board[row][col]===n)
							return false;
			}
			return true;
	}
	backtrack(0,0);
};
