import { TreeNode } from "../utils/tree-node";

function rightSideView(root: TreeNode | null): number[] {
  const res = [];
  if (!root) return res;
  
  let stack = [root];
  while(stack.length) {
    const newStack = [];
    for (let i=0; i<stack.length; i++) {
      stack[i].left && newStack.push(stack[i].left);
      stack[i].right && newStack.push(stack[i].right);
    }
    res.push(stack.pop().val);
    stack = newStack;
  }
  return res;
};
