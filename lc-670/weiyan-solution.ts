function maximumSwap(num: number): number {
	const arr = num.toString().split('').map(s => parseInt(s));
	for (let i=0; i<arr.length - 1; i++) {
			let max = arr[i+1];
			let maxIdx = i+1;
			for (let j = i+1; j<arr.length; j++) {
					if (arr[j] >= max) {
							maxIdx = j;
							max = arr[j];
					}
			}
			if (max > arr[i]) {
					arr[maxIdx] = arr[i];
					arr[i] = max;
					return parseInt(arr.map(n => n.toString()).join(''));
			}
	}
	return num;
};
