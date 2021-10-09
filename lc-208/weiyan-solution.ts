class Trie {
	dic: Map<string, Array<string>>;
	constructor() {
			this.dic = new Map();
	}

	insert(word: string): void {
			const c = word[0];
			this.dic.has(c) ? this.dic.get(c).push(word) : this.dic.set(c, [word]);
	}

	search(word: string): boolean {
			const c = word[0];
			const res = this.dic.get(c);
			return !!(res && res.includes(word));
	}

	startsWith(prefix: string): boolean {
			const c = prefix[0];
			const res = this.dic.get(c);
			if (!res) return false;
			for (let i=0; i<res.length; i++) {
					if (res[i].startsWith(prefix)) {
							return true;
					}
			}
			return false;
	}
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
