import { TreeNode } from "../utils/tree-node";

function getMinimumDifference(root: TreeNode | null): number {
	let prev = Infinity;
	let totalMin = Infinity;
	
	const traverse = (node: TreeNode | null) => {
			if (!node) {
					return;
			}
			
			traverse(node.left);
			
			totalMin = Math.min(totalMin, Math.abs(node.val - prev));
			prev = node.val;
			
			traverse(node.right);
	}
	
	traverse(root);
	
	return totalMin;
};
