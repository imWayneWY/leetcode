import { UnionFind } from "../utils/union-find";


function getCharCodeAt(s: string, i: number) {
  return s.charCodeAt(i)-97;
}

function equationsPossible(equations: string[]): boolean {
  const uf = new UnionFind(26);
  
  equations.forEach(e => {
    if(e.charAt(1)==='=') {
      uf.union(getCharCodeAt(e,0), getCharCodeAt(e,3));
    }
  });
  
  for (let i=0; i<equations.length; i++) {
    const eq = equations[i];
    if(eq.charAt(1)==='!') {
      if (uf.connect(getCharCodeAt(eq, 0), getCharCodeAt(eq, 3))) {
        return false;
      }
    }
  }
  return true;
};
