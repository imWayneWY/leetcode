import {TreeNode} from "../utils/tree-node";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	const postOrderBuildTree = (
			postStart, postEnd,
			inStart, inEnd,
	) => {
			if (postStart > postEnd || inStart > inEnd) return null;
			
			// post-order
			let root = new TreeNode(postorder[postEnd]);
			let inRoot = inorder.indexOf(root.val);
			let numsRight = inEnd - inRoot;
			
			root.right = postOrderBuildTree(postEnd - numsRight, postEnd - 1, inRoot + 1, inEnd);
			root.left = postOrderBuildTree(postStart, postEnd - numsRight -1, inStart, inRoot-1);
			return root;
	}
	let res = postOrderBuildTree(0, postorder.length-1, 0, inorder.length-1);
	return res;
};
