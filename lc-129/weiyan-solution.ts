import { TreeNode } from "../utils/tree-node";

function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0;
  const paths = [];
  const preOrder = (node: TreeNode | null, path: number[]) => {
    if (node.left===null && node.right===null) {
      paths.push([...path, node.val]);
      return;
    };
    
    node.left && preOrder(node.left, [...path, node.val]);
    node.right && preOrder(node.right, [...path, node.val]);
  }
  preOrder(root, []);
  
  let sum = 0;
  for(let i=0; i<paths.length; i++) {
    let digit = 1;
    
    for (let j=paths[i].length-1; j>=0; j--) {
      sum += paths[i][j] * digit;
      digit *= 10;
    }
  }
  return sum;
};
