function calPoints(ops: string[]): number {
	const score = [];

	for (let i=0; i<ops.length; i++) {
			switch (ops[i]) {
					case "C":
							score.pop();
							break;
					case "D":
							const last = score[score.length-1] * 2;
							score.push(last);
							break;
					case "+":
							const last1 = score[score.length-1];
							const last2 = score.length >= 2 ? score[score.length-2] : 0;
							score.push(last1 + last2);
							break;
					default:
							const n = parseInt(ops[i]);
							score.push(n);
							break;
			}
	}

	return score.reduce((sum, c) => sum + c);
};
