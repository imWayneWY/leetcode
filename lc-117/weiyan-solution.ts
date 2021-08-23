import {Node} from '../utils/node';

function connect(root: Node | null): Node | null {
  if(root === null) return null;
  let stack = [root];
  while(stack.length) {
    const newStack = [];
    for (let i=0; i<stack.length; i++) {
      const node = stack[i];
      if (i===stack.length-1) {
        node.next = null;
      } else {
        node.next = stack[i+1];
      }
      node.left && newStack.push(node.left);
      node.right && newStack.push(node.right);
    }
    stack = newStack;
  }
  return root;
};
