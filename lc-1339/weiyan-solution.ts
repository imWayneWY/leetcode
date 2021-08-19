/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * max( (total_sum - subtree_sum) * subtree_sum)
 * @param root 
 * @returns 
 */

 function maxProduct(root: TreeNode | null): number {
  const sumSet = new Set<number>();
  const getSum = (node: TreeNode | null) => {
    if (node === null) return 0;
    const sum = node.val + getSum(node.left) + getSum(node.right);
    sumSet.add(sum);
    return sum;
  }
  const rootSum = getSum(root);
  let max = 0;
  sumSet.forEach(s => {
    max = Math.max(max, (rootSum-s)*s);
  })

  return max % (1e9+7);
};
