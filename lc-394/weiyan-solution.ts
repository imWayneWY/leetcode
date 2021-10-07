type Rec = {
	cnt: number,
	str: string
}

function decodeString(s: string): string {
	const stack = [];
	let left = 0, right = 0;
	let ans = "";
	let countNum = false;
	
	for (; right<s.length; right++) {
			if (s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 58 && !countNum) {
					countNum = true;
					if (left < right) {
							if (stack.length === 0) {
									ans += s.substring(left, right);
							} else {
									stack[stack.length-1].str = stack[stack.length-1].str + s.substring(left, right);
							}                
					}
					left = right;
			} else if (s[right]==='[') {
					countNum = false;
					stack.push({
							cnt: parseInt(s.substring(left, right)),
							str: "",
					});
					left = right+1;
			} else if (s[right]===']') {
					if (left < right) {
							stack[stack.length-1].str = stack[stack.length-1].str + s.substring(left, right);
					}
					// console.log(stack);
					const {cnt, str} = stack.pop();
					
					const flatten = new Array(cnt).fill(str).join("");

					// console.log(flatten);
					if (stack.length) {
							stack[stack.length-1].str = stack[stack.length-1].str+flatten;
					} else {
							ans += flatten;
					}
					// console.log(stack);  
					// console.log("----divider----")
					left = right+1;
			}
	}
	
	if (left < right) ans += s.substring(left, right);
	return ans;
	
	
};