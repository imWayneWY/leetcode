import { TreeNode } from "../utils/tree-node";

function findBottomLeftValue(root: TreeNode | null): number {
  let stack = [root];
  
  while (stack.length) {
    const newStack = [];
    for (let i=0; i<stack.length; i++) {
      stack[i].left && newStack.push(stack[i].left);
      stack[i].right && newStack.push(stack[i].right);
    }
    if (newStack.length === 0) {
      return stack[0].val;
    } else {
      stack = newStack;
    }
  }
};