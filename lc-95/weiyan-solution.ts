/**
 * 就是遍历+build tree
 * @param n 
 * @returns 
 */
function generateTrees(n: number): Array<TreeNode | null> {
  const arr = [];
  for(let i=0; i<n; i++) {
    arr.push(i+1);
  }

  const genTrees = (arrVal: Array<number>): Array<TreeNode | null> => {
    if (arrVal.length===0) return [];
    if (arrVal.length===1) return [new TreeNode(arrVal[0])];
    const res = [];
    
    for (let i=0; i<arrVal.length; i++) {
      const subLeft = genTrees(arrVal.slice(0, i));
      const subRight = genTrees(arrVal.slice(i+1));
      
      if (!!subLeft.length && !!subRight.length) {
        for (let j=0; j<subLeft.length; j++) {
          for (let k=0; k<subRight.length; k++) {
            const root = new TreeNode(arrVal[i]);
            root.left = subLeft[j];
            root.right = subRight[k];
            res.push(root);
          }
        }
      } else {
        for (let j=0; j<subLeft.length; j++) {
          const root = new TreeNode(arrVal[i]);
          root.left = subLeft[j];
          res.push(root);
        }
        for (let j=0; j<subRight.length; j++) {
          const root = new TreeNode(arrVal[i]);
          root.right = subRight[j];
          res.push(root)
        }
      }
    }
    return res;
  }

  const result = genTrees(arr);
  return result;
};