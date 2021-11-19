class UnionFind {
	cnt: number;
	parent: number[];

	constructor(n: number) {
			this.cnt = n;
			this.parent = new Array(n+1);
			for (let i=1; i<n+1; i++) {
					this.parent[i] = i;
			}
	}
	
	union(p: number, q: number): void {
			this.parent[q] = p;
			this.cnt--;
	}
	
	find(x: number): number {
			while (this.parent[x] !== x) {
					x = this.parent[x];
			}
			return x;
	}
	
	connected(p: number, q: number): boolean {
			const rootP = this.find(p);
			const rootQ = this.find(q);
			return rootP === rootQ;
	}
	
	count(): number {
			return this.cnt;
	}
}

function findRedundantDirectedConnection(edges: number[][]): number[] {
	// get n
	let n = 0;
	let notedEdge;
	const set = new Set();
	for (let i=0; i<edges.length; i++) {
			n = Math.max(n, edges[i][0], edges[i][1]);
			if (set.has(edges[i][1])) {
					notedEdge = edges[i][1];
			} else {
					set.add(edges[i][1]);
			}
	}
	
	const uf = new UnionFind(n);
	let ans;
	let rec;

	for (let i=0; i<edges.length; i++) {
			const [p, q] = edges[i];
			if (!notedEdge || notedEdge!==q) {
					if (uf.connected(p, q)) {
							ans = [p, q];
					} else {
							uf.union(p, q);
					}            
			}
	}
	if (notedEdge) {
			for (let i=0; i<edges.length; i++) {
					const [p, q] = edges[i];
					if (q === notedEdge) {
							if (uf.connected(p, q)) {
									ans = [p,q];
							} else {
									rec = [p,q];
							}
					}
			}
	}
	return ans ? ans : rec;
};