function updateBoard(board: string[][], click: number[]): string[][] {
	const rLen = board.length;
	const cLen = board[0].length;

	if (board[click[0]][click[1]] === 'M') {
			board[click[0]][click[1]] = 'X';
			return board;
	}

	// const visited = new Array(board.length);
	// for (let i=0; i<visited.length; i++) visited[i] = new Array(board[0].length).fill(false);
	
	// get all valid squares around target
	const getArounds = (r: number, c: number) => {
			return [[r-1, c-1],
					 [r-1, c],
					 [r-1, c+1],
					 [r, c+1],
					 [r+1, c+1],
					 [r+1, c],
					 [r+1, c-1],
					 [r, c-1]].filter(([row, col]) => row>=0 && col>=0 && row<rLen && col<cLen);
	}
	
	// get mines total number around target;
	const getAroundMinesNum = (r: number, c: number) => {
			const arounds = getArounds(r,c);
			let num = 0;
			
			for (let i=0; i<arounds.length; i++) {
					const [row, col] = arounds[i];
					if (board[row][col] === 'M') num++;
			}
			return num;
	}

	const clickSquare = (r: number, c: number) => {
			// visited[r][c] = true;
			const aroundMinesNum = getAroundMinesNum(r, c);
			if (aroundMinesNum > 0) {
					board[r][c] = aroundMinesNum.toString();
			} else {
					board[r][c] = 'B';
					// const arounds = getArounds(r, c).filter(([row, col]) => !visited[row][col]);
					const arounds = getArounds(r, c).filter(([row, col]) => board[row][col]==='E');
					for (let i=0; i<arounds.length; i++) {
							const [row, col] = arounds[i];
							clickSquare(row, col);
					}
			}
	}
	
	clickSquare(click[0], click[1]);
	return board;
};
