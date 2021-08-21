import { TreeNode } from "../utils/tree-node";
/**
 * 就是个广度优先，加个层级和方向的判断
 * @param root 
 * @returns 
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res = [];
  if (root===null) return res;
  let q = [root];
  let dirLeft = false;
  while(q.length) {
    const levelRes = [];
    const subNodes = [];
    for(let i=0; i<q.length; i++) {
      levelRes.push(q[i].val);
      if(q[i].left) subNodes.push(q[i].left);
      if(q[i].right) subNodes.push(q[i].right);
    }
    q = subNodes;
    if (dirLeft) {
      res.push(levelRes.reverse());
    } else {
      res.push(levelRes);
    }
    dirLeft = !dirLeft
  }
  return res;
};
