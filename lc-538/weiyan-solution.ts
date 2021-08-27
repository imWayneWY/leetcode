import {TreeNode} from "../utils/tree-node";

function convertBST(root: TreeNode | null): TreeNode | null {
  let prevSum = 0;
  const traverse = (node: TreeNode | null) => {
    if (!node) return;
    
    traverse(node.right);
    
    prevSum = node.val + prevSum;
    node.val = prevSum;
    
    traverse(node.left);
  }
  traverse(root);
  return root;
};
