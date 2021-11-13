function restoreIpAddresses(s: string): string[] {
	if (s.length < 4 || s.length > 12) return [];
	const ans = [];

	const backtrack = (recArr: string[], startIdx: number) => {
			if (recArr.length === 4) {
					if (startIdx === s.length && isValid(recArr)) {
							ans.push(recArr.join("."));
					}
					return;
			}
			
			for (let i=startIdx; i<startIdx+3; i++) {
					const ip = s.substring(startIdx, i+1);
					recArr.push(ip);
					backtrack(recArr, i+1);
					recArr.pop();
			}
	}
	
	backtrack([], 0);
	return ans;
};

function isValid(arr: string[]) {
	for (let i=0; i<4; i++) {
			const ip = arr[i];
			if (ip[0] === "0" && ip !== "0") {
					return false;
			}
			if (parseInt(ip) > 255) {
					return false;
			}
	}
	return true;
}
