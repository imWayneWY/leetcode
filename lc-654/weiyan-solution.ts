import {TreeNode} from "../utils/tree-node";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length===0) return null;
  let maxIdx = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }
  const root = new TreeNode(nums[maxIdx]);
  root.left = constructMaximumBinaryTree(nums.slice(0,maxIdx));
  root.right = constructMaximumBinaryTree(nums.slice(maxIdx+1));
  return root;
};
