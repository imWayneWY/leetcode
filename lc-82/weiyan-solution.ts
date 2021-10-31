function deleteDuplicates(head: ListNode | null): ListNode | null {
	let p = head;
	let ans = new ListNode(0, head);
	let prev = ans;
	let isDplc = false;
	while (p && p.next) {
			if (p.val === p.next.val) {
					isDplc = true;
					p.next = p.next.next;
			} else {
					if (isDplc) {
							isDplc = false;
							const next = p.next;
							prev.next = next;
							p = next;
					} else {
							prev = p;
							p = p.next;
					}
			}
	}
	
	if (isDplc) {
			const next = p.next;
			prev.next = next;
			p = next;
	}
	
	return ans.next;
};
