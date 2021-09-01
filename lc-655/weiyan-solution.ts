import { TreeNode } from "../utils/tree-node";

function printTree(root: TreeNode | null): string[][] {
  if (!root) return [];
  let height = 0;

  const findHeight = (node: TreeNode, depth: number) => {
    if(!node.left && !node.right && depth > height) {
      height = depth;
      return;
    }
    node.left && findHeight(node.left, depth+1);
    node.right && findHeight(node.right, depth+1);
  }
  findHeight(root, 0);
  
  const ans = new Array(height+1);
  const columns = 2**(height+1)-1;
  for (let i=0; i<height+1; i++) {
    ans[i] = new Array(columns).fill("");
  }
  
  const traverse = (node: TreeNode, r: number, c: number) => {
    ans[r][c] = node.val.toString();
    node.left && traverse(node.left, r+1, c-2**(height-r-1));
    node.right && traverse(node.right, r+1, c+2**(height-r-1));
  }
  traverse(root, 0, (columns-1)/2);
  return ans;
};
