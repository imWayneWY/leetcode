function calculate(s: string): number {
	const res = [];
	const stack = [];
	
	const operators = ['+', '-', '*', '/', '(', ')'];
	
	let num = "";
	let p = 0;
	while (p<s.length) {
			const c = s[p];
			if (c !== " ") {
					if (operators.includes(c)) {
							if (c === '-') {
									if (p===0 || (p>0 && s[p-1]==='(')) {
											// 第一位是负号的情况特殊处理
											res.push("0");
											stack.push(c);
											p++;
											continue;
									}
							}
							num && res.push(num);
							num = "";
							if (c === '(') {
									stack.push(c);
							} else if (c==='+' || c==='-') {
									while (stack[stack.length-1] !== '(' && stack[stack.length-1]) {
											const ops = stack.pop();
											res.push(ops);
									}
									stack.push(c);
							} else if (c==='*' || c==='/') {
									while (stack[stack.length-1] === '*' || stack[stack.length-1] === '/') {
											const ops = stack.pop();
											res.push(ops);
									}
									stack.push(c);
							} else {
									let c = stack.pop();
									while (c !== '(') {
											res.push(c);
											c = stack.pop();
									}
							}
					} else {
							num+=c;
					}
			}
			p++;
	}
	if (s[s.length-1] !== ')' && !!num) res.push(num);
	while (stack.length) {
			res.push(stack.pop());
	}
	console.log(res);
	return evalRPN(res);
};

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
