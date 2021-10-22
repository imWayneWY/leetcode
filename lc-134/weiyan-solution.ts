function canCompleteCircuit(gas: number[], cost: number[]): number {
	const len = gas.length;
	
	for (let i=0; i<len; i++) {
			let oilSum = 0;
			let index = i;
			
			while (oilSum + gas[index] - cost[index] >= 0) {
					oilSum += gas[index] - cost[index];
					index = (index + 1) % len;
					if (index === i) return i;
			}
			
			if (index < i) return -1;
			i = index; // we can skip middle
	}
	
	return -1;
};
