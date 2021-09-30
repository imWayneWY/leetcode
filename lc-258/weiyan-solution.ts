function addDigits(num: number): number {
	while(num > 9) {
			num = num.toString().split('').reduce((total,cur) => {
					return total+parseInt(cur);
			}, 0);
	}
	return num;
};
