function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	let oddp = head;
	let evenp = head.next;
	const evenStart = head.next;
	
	while (oddp || evenp) {
			if (oddp) {
					if (oddp.next) oddp.next = oddp.next.next;
					if (oddp.next !== null) oddp = oddp.next;
			}
			if (evenp) {
					if (evenp.next) evenp.next = evenp.next.next;
					evenp = evenp.next;
			}
			if (oddp.next === null) {
					oddp.next = evenStart;
					break;
			}
	}
	return head;
};