/**
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/UnionFind%E7%AE%97%E6%B3%95%E8%AF%A6%E8%A7%A3.md
 */
export class UnionFind {
  count: number;
  parent: Array<number>;
  size: Array<number>;
  
  constructor(n: number) {
    this.count = n;
    this.parent = new Array(n);
    this.size = new Array(n).fill(1);
    for (let i=0; i<n; i++) {
      this.parent[i] = i;
    }
  }
  
  union(p: number, q: number) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ)
      return;
    
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }
  
  connect(p: number, q:number): boolean {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }
  
  find(x: number): number {
    while(this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
}
