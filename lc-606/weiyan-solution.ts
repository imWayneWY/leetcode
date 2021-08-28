import { TreeNode } from "../utils/tree-node";

function tree2str(root: TreeNode | null): string {
  if (!root) return "";
  let ans = "";
  
  const traverse = (node: TreeNode) => {
    if (!node) return;
    
    ans += node.val.toString();
    if (!node.left && !node.right) return;

    ans += "(";
    node.left && traverse(node.left);
    ans += ")"
    if (node.right) {
      ans += "("
      traverse(node.right);
      ans += ")"
    }
  }
  
  traverse(root);
  return ans;
};
