import {TreeNode} from '../utils/tree-node';

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const memo = new Set();
  const foundMemo = new Set();
  const ans = [];

  const traverse = (node: TreeNode) : string => {
    if (!node) return "";
    let str = "";
    str += node.val.toString();
    if (!node.left && !node.right) {
      if (memo.has(str) && !foundMemo.has(str)) {
        ans.push(node);
        foundMemo.add(str);
      } else {
        memo.add(str);
      }
      return str;
    };

    str += "(";
    str += node.left ? traverse(node.left) : "";
    str += ")"
    if (node.right) {
      str += "(" + traverse(node.right) + ")";
    }
    if (memo.has(str) && !foundMemo.has(str)) {
        ans.push(node);
        foundMemo.add(str);
      } else {
        memo.add(str);
      }
    return str;
  }
  
  traverse(root);
  return ans;
};
