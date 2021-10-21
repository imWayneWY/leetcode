class RandomizedSet {
	map: Map<number, number>;
	arr: number[];
	constructor() {
			this.map = new Map();
			this.arr = [];
	}

	insert(val: number): boolean {
			if (this.map.has(val)) return false;
			
			this.arr.push(val);
			this.map.set(val, this.arr.length-1);
			return true;
	}

	remove(val: number): boolean {
			if (!this.map.has(val)) return false;
			
			const idx = this.map.get(val);
			const lastIdx = this.arr.length-1;
			const lastVal = this.arr[lastIdx];
			this.map.set(lastVal, idx);
			this.arr[idx] = lastVal;
			this.arr.pop();
			this.map.delete(val);
			return true;
	}

	getRandom(): number {
			const randomIdx = Math.floor(Math.random() * this.arr.length);
			return this.arr[randomIdx];
	}
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/
