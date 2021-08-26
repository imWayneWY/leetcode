import { TreeNode } from "../utils/tree-node";

function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0;
  if (!root) return res;
  const traverse = (node: TreeNode, path: number[]) => {
    let sum = node.val;
    if (sum === targetSum) {
      res++
    } 
    for(let i = path.length-1; i>=0; i--) {
      sum += path[i];
      if (sum===targetSum) {
        res++;
      }
    }
    
    
    node.left && traverse(node.left, [...path, node.val]);
    node.right && traverse(node.right, [...path, node.val]);
  }
  traverse(root, []);
  return res;
};
