import { TreeNode } from "../utils/tree-node";

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;
  const val1 = root1 ? root1.val : 0;
  const val2 = root2 ? root2.val : 0;
  const newRoot = new TreeNode(val1+val2);
  if (root1?.left || root2?.left) {
      newRoot.left = mergeTrees(root1?.left ? root1.left : null, root2?.left ? root2.left : null);
  }
  if (root1?.right || root2?.right) {
      newRoot.right = mergeTrees(root1?.right ? root1.right : null, root2?.right ? root2.right : null);
  }
  return newRoot;
};
