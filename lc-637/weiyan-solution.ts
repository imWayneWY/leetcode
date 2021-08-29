import { TreeNode } from "../utils/tree-node";

function averageOfLevels(root: TreeNode | null): number[] {
  const ans = [];
  if (!root) return ans;
  
  let stack = [root];
  while (stack.length) {
    let sum = 0;
    const newStack = [];
    
    for (let i=0; i<stack.length; i++) {
      sum += stack[i].val;
      stack[i].left && newStack.push(stack[i].left);
      stack[i].right && newStack.push(stack[i].right);
    }
    ans.push(sum/stack.length);
    stack = newStack;
  }
  return ans;
};
