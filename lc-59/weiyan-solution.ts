function generateMatrix(n: number): number[][] {
  let dir = 0; // 0: right, 1: down, 2: left: 3: up
  
  const ans = new Array(n);
  for (let i=0; i<n; i++) {
    ans[i] = new Array(n).fill(0);
  }

  let count = 1;
  let r=0, c=0;
  while(count <= n*n) {
    if (!ans[r][c]) {
      ans[r][c] = count;


      if (dir===0) {
        if (c===n-1 || ans[r][c+1]) {
          dir = turn(dir);
        }
      } else if (dir===1) {
        if (r===n-1 || ans[r+1][c]) {
          dir = turn(dir);
        }
      } else if (dir===2) {
        if (c===0 || ans[r][c-1]) {
          dir = turn(dir);
        }
      } else {
        if (r===0 || ans[r-1][c]) {
          dir = turn(dir);
        }
      }
      count++;
    } else {
      dir = turn(dir);
    }

    if (dir===0) {
      c++;
    } else if (dir===1) {
      r++;
    } else if (dir===2) {
      c--;
    } else {
      r--;
    }
  }
  return ans;
};

function turn(dir): number {
  return  dir===3 ? 0 : dir+1;
}
