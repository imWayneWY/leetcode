function bstFromPreorder(preorder: number[]): TreeNode | null {
	if (preorder.length === 0) return null;
	const val = preorder[0];
	const root = new TreeNode(val);
	if (preorder.length===1) return root;
	
	let s = preorder.length;
	for (let i=1; i<preorder.length; i++) {
			if(preorder[i] > val) {
					s = i;
					break;
			}
	}

	root.left = bstFromPreorder(preorder.slice(1, s));
	root.right = bstFromPreorder(preorder.slice(s));
	
	return root;
};
