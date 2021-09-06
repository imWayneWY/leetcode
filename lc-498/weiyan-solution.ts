function findDiagonalOrder(mat: number[][]): number[] {
  let up = true;
  const col = mat[0].length;
  const row = mat.length;
  const ans = [];
  let r=0, c=0;
  while(r!==row && c!==col) {
    ans.push(mat[r][c]);
    if (up) {
      if (r>0 && c<col-1) {
        r--
        c++;
      } else {
        up=false;
        if (c===col-1) {
          r++;
        } else {
          c++;
        }
      }
    } else {
      if (r<row-1 && c>0) {
        r++;
        c--;
      } else {
        up = true;
        if (r===row-1) {
          c++;
        } else {
          r++;
        }
      }
    }
  }
  return ans;
};