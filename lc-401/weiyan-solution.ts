function readBinaryWatch(turnedOn: number): string[] {
	const ans = [];
	const hrs = new Array(4).fill(false);
	const mins = new Array(6).fill(false);
	const same = new Set();
	
	const getTime = () : string => {
			let hour = 0;
			for (let i=0; i<4; i++) {
					if (hrs[i]) hour += 2**i;
			}
			let min = 0;
			for (let j=0; j<6; j++) {
					if (mins[j]) min += 2**j;
			}
			return `${hour.toString()}:${min.toString().length === 1 ? "0"+min.toString() : min.toString()}`;
	}
	
	const isValid = (h: number, m: number) => {
			if (h >= 0) {
					let hour = 0;
					for (let i=0; i<4; i++) {
							if (hrs[i]) hour += 2**i;
					}
					if ((hour + 2**h) >= 12) return false;            
			}

			if (m >= 0) {
					let min = 0;
					for (let i=0; i<6; i++) {
							if (mins[i]) min += 2**i;
					}
					if ((min + 2**m) >= 60) return false;            
			}

			return true;
	}
	
	const turnOn = (n: number) => {
			if (n > turnedOn) {
					const res = getTime();
					if (!same.has(res)) {
							ans.push(res);
							same.add(res);
					}
					return;
			}
			
			for (let i=0; i<10; i++) {
					if (i<4) {
							if (!hrs[i] && isValid(i, -1)) {
									hrs[i] = true;
									turnOn(n+1);
									hrs[i] = false;
							}
					} else {
							const m = i-4;
							if (!mins[m] && isValid(-1, m)) {
									mins[m] = true;
									turnOn(n+1);
									mins[m] = false;
							}
					}
			}
			return;
	}
	

	turnOn(1);
	return ans.sort();
};
