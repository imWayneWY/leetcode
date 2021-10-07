
function swapPairs(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;
	
	const next = head.next;
	head.next = swapPairs(next.next);
	next.next = head;
	return next;
};

