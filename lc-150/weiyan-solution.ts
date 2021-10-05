function evalRPN(tokens: string[]): number {
	const stack = [];
	for (let i=0; i<tokens.length; i++) {
			const c = tokens[i];
			if (c === '+' || c === '-' || c === '*' || c === '/') {
					const last2 = stack.pop();
					const last1 = stack.pop();
					switch (c) {
							case '+':
									stack.push(last1 + last2);
									break;
							case '-':
									stack.push(last1 - last2);
									break;
							case '*':
									stack.push(last1 * last2);
									break;
							case '/':
									stack.push(Math.trunc(last1 / last2));
									break;
					}
			} else {
					stack.push(parseInt(c));
			}
	}
	return stack.pop();
};
