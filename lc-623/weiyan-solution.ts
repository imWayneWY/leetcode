import { TreeNode } from "../utils/tree-node";

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth===1) {
    const newRoot = new TreeNode(val);
    newRoot.left = root;
    return newRoot;
  }
  const traverse = (node: TreeNode | null, level: number) => {
    if (!node) return;
    
    if (level + 1 === depth) {
      const memoLeft = node.left;
      const memoRight = node.right;
      const newLeft = new TreeNode(val);
      const newRight = new TreeNode(val);
      newLeft.left = memoLeft;
      newRight.right = memoRight;
      node.left = newLeft;
      node.right = newRight;
    }
    
    traverse(node.left, level+1);
    traverse(node.right, level+1);
  }
  traverse(root, 1);
  return root;
};
