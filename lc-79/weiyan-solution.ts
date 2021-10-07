
function exist(board: string[][], word: string): boolean {
	const rows = board.length;
	const cols = board[0].length;
	const used = new Set();
	const backtrack = (i: number, r: number, c: number): boolean => {
			// console.log(word[i])
			if (used.has(r+"-"+c)) return false;
			if (i===word.length-1) return true;
			used.add(r+"-"+c);
			
			const target = word[i+1];
			
			if ((r>0 && board[r-1][c]===target && backtrack(i+1, r-1, c))
				 || (r<rows-1 && board[r+1][c]===target && backtrack(i+1, r+1, c))
				 || (c>0 && board[r][c-1]===target && backtrack(i+1, r, c-1))
				 || (c<cols-1 && board[r][c+1]===target && backtrack(i+1, r, c+1))) {
					return true;
			}
			
			used.delete(r+"-"+c);
			return false;
	}
	
	for (let i=0; i<rows; i++) {
			for (let j=0; j<cols; j++) {
					if (board[i][j] === word[0]) {
							if (backtrack(0, i, j)) {
									return true;
							}
					}
			}
	}
	
	return false;
};
