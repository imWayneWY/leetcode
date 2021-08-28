import { TreeNode } from "../utils/tree-node";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;
  const traverse = (node: TreeNode) : number => {
    if (!node.left && !node.right) {
      return 0;
    } else {
      const leftPath = node.left ? traverse(node.left) + 1 : 0;
      const rightPath = node.right ? traverse(node.right) + 1 : 0;
      ans = Math.max(ans, leftPath + rightPath);
      return Math.max(leftPath, rightPath);
    }
  }
  traverse(root);
  return ans;
};
