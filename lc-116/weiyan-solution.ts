import {Node} from '../utils/node';

function connect(root: Node | null): Node | null {
  if(root === null) return null;
  const stack = [root];
  while(stack.length) {
    const node = stack.pop();
    if (!stack.length) {
      node.next = null;
    } else {
      node.next = stack[stack.length-1];
    }
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return root;
};
