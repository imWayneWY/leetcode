/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 function levelOrder(root: Node | null): number[][] {
	if (!root) return [];
let stack = [root];
	const ans = [];
	
	while(stack.length) {
			const level = [];
			const nodes = [];
			for (let j=0; j<stack.length; j++) {
					const n = stack[j];
					if (n) {
							level.push(n.val);
							for (let i=0; i<n.children.length; i++) {
									nodes.push(n.children[i]);
							}                
					}
			}
			ans.push(level);
			stack = nodes;
	}
	
	return ans;
};