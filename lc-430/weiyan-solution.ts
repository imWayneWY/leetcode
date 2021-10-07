/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

 function flatten(head: Node | null): Node | null {
	if (!head) return null;
	let p = head;
	
	const flattenList = (h: Node): {start: Node, end: Node} => {
			let p = h;
			if (!p.next && !p.child) return {start: h, end: h};
			while (p.next || p.child) {
					const next = p.next;
					if (p.child) {
							const {start, end} = flattenList(p.child);
							p.child = null;
							p.next = start;
							start.prev = p;
							end.next = next;
							if(next) {
									next.prev = end;
							} else {
									return {start: h, end};
							}
					}
					
					p = next;
			}
			
			return {start: h, end: p}
	}
	
	flattenList(head);
	
	return head;
};
