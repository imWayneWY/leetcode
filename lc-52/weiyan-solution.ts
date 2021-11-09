function totalNQueens(n: number): number {
	const board = [];
	for (let i=0; i<n; i++) {
			board.push(new Array(n).fill('.'));
	}
	let res = 0;
	
	const backtrack = (row: number) => {
			if (row === n) {
					res++;
					return;
			}
			for (let col = 0; col < n; col++) {
					if (!isValid(board, row, col))
							continue;
					board[row][col] = 'Q';
					backtrack(row + 1);
					board[row][col] = '.';
			}
	}

	backtrack(0);

	return res
};

function isValid(board: string[][], row: number, col: number): boolean {
	let n = board.length;
	for(let i=0; i<row; i++) {
			if (board[i][col] === 'Q')
					return false;
	}
	for(let i=row-1, j=col+1; i>=0 && j<n; i--, j++) {
			if(board[i][j] === 'Q')
					return false;
	}
	for(let i=row-1, j=col-1; i>=0 && j >=0; i--,j--) {
			if(board[i][j] === 'Q')
					return false;
	}
	return true;
}
