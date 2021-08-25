import {TreeNode} from "../utils/tree-node";

class BSTIterator {
  stack: number[];
  
  inorder(node: TreeNode | null) {
    if (!node) return;

    this.inorder(node.left);
    this.stack.push(node.val);
    this.inorder(node.right);
  }
  constructor(root: TreeNode | null) {
    this.stack = [];
    this.inorder(root);
  }

  next(): number {
    return this.stack.shift();
  }

  hasNext(): boolean {
    return !!this.stack.length;
  }
}

