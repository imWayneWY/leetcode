function cloneGraph(node: Node | null): Node | null {
	const visited = new Map<number, Node>();
    
    const cloneNode = (n: Node | null): Node | null => {
        if (n===null) return null;
        
        const nn = new Node(n.val);
        visited.set(n.val, nn);
        for (let i=0; i<n.neighbors.length; i++) {
            if (visited.has(n.neighbors[i].val)) {
                nn.neighbors.push(visited.get(n.neighbors[i].val));
            } else {
                nn.neighbors.push(cloneNode(n.neighbors[i]));
            }
        }
        return nn;
    }
    
    return cloneNode(node);
};
