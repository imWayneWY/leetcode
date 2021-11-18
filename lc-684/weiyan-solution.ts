class UnionFind {
	cnt: number;
	size: number[];
	parent: number[];

	constructor(n: number) {
			this.cnt = n;
			this.parent = new Array(n);
			this.size = new Array(n).fill(1);
			for (let i=0; i<n; i++) {
					this.parent[i] = i;
			}
	}

	union(p: number, q: number): void {
			const rootP = this.find(p);
			const rootQ = this.find(q);
			if (rootP === rootQ) return;

			if (this.size[rootP] > this.size[rootQ]) {
					this.parent[rootQ] = rootP;
					this.size[rootP] += this.size[rootQ];
			} else {
					this.parent[rootP] = rootQ;
					this.size[rootQ] += this.size[rootP];
			}
			this.cnt--;
	}
	
	find(x: number): number {
			while (this.parent[x] !== x) {
					this.parent[x] = this.parent[this.parent[x]];
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

function findRedundantConnection(edges: number[][]): number[] {
	// get n
	let n = 0;
	for (let i=0; i<edges.length; i++) {
			n = Math.max(n, edges[i][0], edges[i][1]);
	}
	
	const uf = new UnionFind(n);
	let ans;
	for (let i=0; i<edges.length; i++) {
			const [p, q] = edges[i];
			if (uf.connected(p, q)) {
					ans = [p, q];
			} else {
					uf.union(p, q);
			}
	}
	return ans;
};
