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

 function preorder(root: Node | null): number[] {
	const ans = [];
	if (!root) return ans;
	
	const traverse = (node: Node) => {
			ans.push(node.val);
			for(let i=0; i<node.children.length; i++) {
					traverse(node.children[i]);
			}
	}
	
	traverse(root);
	return ans;
};
