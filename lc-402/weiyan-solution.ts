function removeKdigits(num: string, k: number): string {
	const stack = [];
	
	for (let i=0; i<num.length; i++) {
			const c = num.charAt(i);

			while (stack.length && parseInt(stack[stack.length-1]) > parseInt(c) && k>0) {
					stack.pop();
					k--;
			}
			stack.push(c);
	}
	
	if (k > 0) stack.splice(stack.length - k, k);
	while (stack[0] === '0') {
			stack.shift();
	}
	return stack.length ? stack.join('') : '0';
};
