import { TreeNode } from "../utils/tree-node";

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 1;
  let stack = [{node: root, calc: 1}];
  while (stack.length) {
    const newStack = [];
    for (let i=0; i<stack.length; i++) {
      const {node, calc} = stack[i];
      node.left && newStack.push({
        node: node.left,
        calc: calc*2
      });
      node.right && newStack.push({
        node: node.right,
        calc: calc*2+1
      });
    }
    if (newStack.length) {
      const width = newStack[newStack.length-1].calc - newStack[0].calc + 1;
      ans = Math.max(width, ans);
    }
    if (newStack.length===1) {
      newStack[0].calc = 1;
    }
    stack = newStack;
  }

  return ans;
};
