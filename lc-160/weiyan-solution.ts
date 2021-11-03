function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	let p1 = headA;
	let p2 = headB;
	
	while(p1 !== p2) {
			if (p1 === null) {
					p1 = headB;
			} else {
					p1 = p1.next;
			}
			if (p2 === null) {
					p2 = headA;
			} else {
					p2 = p2.next;
			}
	}
	return p1;
};