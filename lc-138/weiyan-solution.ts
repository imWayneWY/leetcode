function copyRandomList(head: Node | null): Node | null {
	if (!head) return null;

	let p = head;
	const ans = new Node();
	let q = ans;

	const map = new Map();

	while (p) {
			const node = new Node(p.val);
			q.next = node;
			map.set(p, node);
			p = p.next;
			q = q.next;
	}
	
	p = head;
	q = ans.next;
	while (p) {
			const random = p.random === null ? null : map.get(p.random);
			q.random = random;
			p = p.next;
			q = q.next;
	}

	return ans.next;
};
