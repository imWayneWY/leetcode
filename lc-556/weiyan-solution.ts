function nextGreaterElement(n: number): number {
	const arr = n.toString().split("").map(c => parseInt(c));
	
	for (let i=arr.length-1; i>0; i--) {
			if (arr[i-1] < arr[i]) {
					const target = arr[i-1];
					let min = arr[i];
					let minIdx = i;
					for (let j=i; j<arr.length; j++) {
							if (arr[j] > target && arr[j] < min) {
									min=arr[j];
									minIdx = j;
							}
					}
					
					arr[minIdx] = arr[i-1];
					arr[i-1] = min;
					const res = parseInt([...arr.slice(0, i), ...arr.slice(i).sort((a,b) => a-b)].join(""));
					return res > 2**31-1 ? -1 : res;
			}
	}
	
	return -1;
};