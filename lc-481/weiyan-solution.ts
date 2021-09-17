/**
 * @param {number} n
 * @return {number}
 */
 var magicalString = function(n) {
  if(n<3) return 1;
  let base = "122";
  let p1=2, p2=2;
  let ans = 1;
  let prev = "2";
  while(p2<n-1) {
    let cnt = base[p1];
    if (cnt==='1') {
      if (prev==="2") {
        base+="1";
        ans++;
        prev="1";
      } else {
        base+="2";
        prev="2";
      }
    } else {
      if (prev==="2") {
        base+="11";
        if (p2===n-2) {
          ans++;
        } else {
          ans+=2;
        }
        prev="1";
      } else {
        base+="22";
        prev="2";
      }
      p2++;
    }
    p2++;
    p1++;
  }
  return ans;
};
