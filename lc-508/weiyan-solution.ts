import { TreeNode } from "../utils/tree-node";
function findFrequentTreeSum(root: TreeNode | null): number[] {
  let ans = [];
  let mostFreq = 0;
  const map = new Map();
  const calcSum = (node: TreeNode | null) => {
    if (!node) return 0;
    
    const sum = node.val + calcSum(node.left) + calcSum(node.right);
    const freq = map.has(sum) ? map.get(sum)+1 : 1;
    map.set(sum, freq);

    if (freq === mostFreq) {
      ans.push(sum);
    }

    if (freq > mostFreq) {
      ans = [sum];
      mostFreq = freq;
    }

    return sum;
  }
  calcSum(root);
  return ans;
};