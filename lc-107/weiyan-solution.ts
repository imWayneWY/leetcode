import { TreeNode } from "../utils/tree-node";

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const res = [];
  let q = [root];
  while(q.length) {
    const levelRes = [];
    const levelQ = [];
    for(let i=0; i<q.length; i++) {
      levelRes.push(q[i].val);
      q[i].left && levelQ.push(q[i].left);
      q[i].right && levelQ.push(q[i].right);
    }
    q = levelQ;
    res.unshift(levelRes);
  }
  return res;
};
