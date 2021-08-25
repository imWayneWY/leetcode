function isValidSerialization(preorder: string): boolean {
  const arr = preorder.split(",");
  const deCode = (strArr: string[]) : boolean | null => {
    const root = strArr.shift();
    if (root === '#') return null;
    // Remaining nodes is not valid for two sub treeNodes
    if (strArr.length===1) return false;

    const left = deCode(strArr);
    const right = deCode(strArr);
    // it's a leaf node but still have other nodes
    if (left===null && right===null && !!strArr.length) return false;
    return true;
  }
  return deCode(arr);
};
