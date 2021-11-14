class CombinationIterator {
	stack: Array<string>;
	constructor(characters: string, combinationLength: number) {
			this.stack = [];
			const backtrack = (startIdx: number, rec: string) => {
					if (rec.length === combinationLength) {
							this.stack.push(rec);
							return;
					}
					for (let i=startIdx; i<characters.length; i++) {
							backtrack(i+1, rec+characters[i]);
					}
			}
			backtrack(0, "");
			// console.log(this.stack);
	}

	next(): string {
		 return this.stack.shift();
	}

	hasNext(): boolean {
			return this.stack.length > 0;
	}
}

/**
* Your CombinationIterator object will be instantiated and called as such:
* var obj = new CombinationIterator(characters, combinationLength)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
