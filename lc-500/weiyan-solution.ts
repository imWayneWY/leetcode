const rows = {
	"row1": ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
					 "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",],
	"row2": ["A", "S", "D", "F", "G", "H", "J", "K", "L",
					 "a", "s", "d", "f", "g", "h", "j", "k", "l"],
	"row3": ["Z", "X", "C", "V", "B", "N", "M",
					 "z", "x", "c", "v", "b", "n", "m"]
}

function findWords(words: string[]): string[] {
	const ans = [];
	for (let i=0; i<words.length; i++) {
			let r = "";
			for (let j=1; j<=3; j++) {
					if (rows["row"+j].includes(words[i][0])) {
							r = "row"+j;
					}
			}
			let isOneRow = true;
			for (let k=1; k<words[i].length; k++) {
					if (!rows[r].includes(words[i][k])) {
							isOneRow = false;
							break;
					}
			}
			if (isOneRow) ans.push(words[i]);
	}
	
	return ans;
};