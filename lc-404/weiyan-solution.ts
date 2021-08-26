import { TreeNode } from "../utils/tree-node";

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  
  let sum = 0;
  const preOrder = (node: TreeNode, isLeft: boolean) => {
    if (!node.left && !node.right && isLeft) {
      sum+=node.val;
    }
    
    node.left && preOrder(node.left, true);
    node.right && preOrder(node.right, false);
  }
  
  preOrder(root, false);
  return sum;
};
