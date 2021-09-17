/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  let p1 = 0, p2 = 0;
  while(p1<arr1.length && p2<arr2.length) {
    const v1 = parseInt(arr1[p1]);
    const v2 = parseInt(arr2[p2]);
    if (v1<v2) return -1;
    if (v1>v2) return 1;
    p1++;
    p2++;
  }
  
  if (p1<arr1.length) {
    while(p1<arr1.length) {
      if (parseInt(arr1[p1])) {
        return 1;
      }
      p1++;
    }
  }
  if (p2<arr2.length) {
    while(p2<arr2.length) {
      if (parseInt(arr2[p2])) {
        return -1;
      }
      p2++;
    }    
  }
  return 0;
};

