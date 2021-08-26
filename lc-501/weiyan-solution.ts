import { TreeNode } from "../utils/tree-node"

function findMode(root: TreeNode | null): number[] {
	let ans = []
	let count = 0, _max = 0, prev = 0  
	
	const inorder = (root) => {
			if(!root) return 
			
			inorder(root.left)
			
			count = prev == root.val ? ++count : 1
			
			if(count > _max) {
					ans = [root.val]
					_max = count
			} 
			
			else if(count === _max)
					ans.push(root.val)
			
			prev = root.val
			
			inorder(root.right)
	}
	
	inorder(root)
	return ans
};

