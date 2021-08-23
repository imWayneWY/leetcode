import { TreeNode } from "../utils/tree-node";

function flatten(root: TreeNode | null): void {
  const preorder = (node: TreeNode | null, savedNodeArr: TreeNode[]) => {
    if (!node) {
      if (savedNodeArr.length) {
        const curr = savedNodeArr.pop();
        return preorder(curr, savedNodeArr);
      } else {
        return null;
      }
    };
    
    const tmpLeft = node.left;
    const tmpRight = node.right;
    node.left = null;    
    node.right = preorder(tmpLeft, [...savedNodeArr, tmpRight]);
    
    return node;
  }

  return preorder(root, []);
};
