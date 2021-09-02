import { TreeNode } from "../utils/tree-node";

function longestUnivaluePath(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  const traverse = (node: TreeNode | null, num: number) => {
    if (!node) return 0;
    if (node.val === num) {
      const leftPath = traverse(node.left, num);
      const rightPath = traverse(node.right, num);
      if (leftPath + rightPath + 1 > ans) {
        ans = leftPath + rightPath + 1;
      }
      return Math.max(leftPath, rightPath)+1;
    } else {
      ans = Math.max(traverse(node, node.val), ans);
      return 0;
    }
  }
  ans = Math.max(traverse(root, root.val), ans);
  return ans-1;
};
