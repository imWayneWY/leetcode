import {TreeNode} from './../utils/tree-node';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res = [];
  if (root===null) return res;
  const preOrder = (node: TreeNode | null, path: number[], sum: number) => {
    if(!node.left && !node.right && node.val+sum === targetSum) {
        res.push([...path, node.val]);
    }
    sum += node.val;
    
    node.left && preOrder(node.left, [...path,node.val], sum);
    node.right && preOrder(node.right, [...path,node.val], sum);
  }
  preOrder(root, [], 0);
  return res;
};
