class StreamChecker {
	set: Set<string>;
	lens: number[];
	stream: string;
	constructor(words: string[]) {
			words.sort((a, b) => a.length - b.length);
			this.set = new Set();
			this.lens = [];
			this.stream = "";
			for (let i=0; i<words.length; i++) {
					const word = words[i];
					let isDuplicate = false;
					for (let j=0; j<this.lens.length; j++) {
							const len = this.lens[j];
							if (this.set.has(word.substr(word.length - len))) {
									isDuplicate = true;
							}
					}
					if (isDuplicate) continue;

					this.set.add(word);
					if (!this.lens.includes(word.length)) {
							this.lens.push(word.length);
					}
			}
			// console.log(this.set);
			// console.log(this.lens);
	}

	query(letter: string): boolean {
			this.stream += letter;
			const currentLen = this.stream.length;
			let ans = false;
			for (let i=0; i<this.lens.length; i++) {
					const len = this.lens[i];
					if (len > currentLen) continue;
					
					const suffix = this.stream.substr(currentLen - len);

					if (this.set.has(suffix)) {
							ans = true;
							break;
					}
			}
			return ans;
	}
}

/**
* Your StreamChecker object will be instantiated and called as such:
* var obj = new StreamChecker(words)
* var param_1 = obj.query(letter)
*/