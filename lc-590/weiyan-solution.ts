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

 function postorder(root: Node | null): number[] {
	const ans = [];
	if (!root) return ans;
	
	const traverse = (node: Node) => {
			for(let i=0; i<node.children.length; i++) {
					traverse(node.children[i]);
			}
			ans.push(node.val);
	}
	
	traverse(root);
	return ans;
};