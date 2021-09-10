function findTheDifference(s: string, t: string): string {
  const ms = new Map<string, number>();
  const mt = new Map<string, number>();
  
  for (let i=0; i<s.length; i++) {
    const c = s[i];
    if (ms.has(c)) {
      ms.set(c, ms.get(c)+1);
    } else {
      ms.set(c, 1);
    }
  }
  for (let i=0; i<t.length; i++) {
    const c = t[i];
    if (mt.has(c)) {
      mt.set(c, mt.get(c)+1);
    } else {
      mt.set(c, 1);
    }
  }
  
  let ans = "";
  mt.forEach((value, key) => {
    if (!ms.has(key) || ms.get(key) !== value) {
      ans = key;
    }
  });
  return ans;
};

