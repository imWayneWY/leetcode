import { TreeNode } from "../utils/tree-node";

function largestValues(root: TreeNode | null): number[] {
  const ans = [];
  const dfs = (node: TreeNode | null, level: number) => {
    if (!node) return;
    if (ans.length < level+1) {
      ans.push(node.val);
    } else {
      ans[level] = Math.max(ans[level], node.val);
    }
    dfs(node.left, level+1);
    dfs(node.right, level+1);
  }
  dfs(root, 0);
  return ans;
};
