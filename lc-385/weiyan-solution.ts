/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

 function deserialize(s: string): NestedInteger {
	if (s[0] !== "[") return new NestedInteger(parseInt(s));
	
	const ans = new NestedInteger();
	const stack = [ans];
	
	let left = 1, right = 1;
	
	for (; right<s.length; right++) {
			const c = s[right];
			
			if (c === '[') {
					const ni = new NestedInteger();
					left = right + 1;
					stack[stack.length - 1].add(ni);
					stack.push(ni);
			} else if (c===']' || c===',') {
					if (left < right) {
							const val = parseInt(s.substring(left, right));
							stack[stack.length - 1].add(new NestedInteger(val));
					}
					
					left = right + 1;
					if (c === ']') {
							stack.pop();
					}
			}
	}
	
	return ans;
};
