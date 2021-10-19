function isCousins(root: TreeNode | null, x: number, y: number): boolean {
	let targetLevel = -1;
	let targetParentVal = -1;
	let ans = false;

	const traverse = (node: TreeNode | null, level: number, parentVal: number): void => {
			if (!node) return;
			if (node.val === x || node.val === y) {
					// console.log(level, parentVal);
					if (targetParentVal > 0) {
							ans = targetParentVal !== parentVal && targetLevel === level;
					} else {
							targetParentVal = parentVal;
							targetLevel = level;
					}
			}
			
			traverse(node.left, level+1, node.val);
			traverse(node.right, level+1, node.val);
	}
	
	traverse(root, 0, 0);
	
	return ans;
};