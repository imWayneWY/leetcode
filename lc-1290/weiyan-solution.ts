function getDecimalValue(head: ListNode | null): number {
	let ans = 0;
	let n = head;
	while (n) {
			ans = ans << 1;
			if (n.val) {
					ans |= 1;
			}
			n = n.next;
	}
	return ans;
};
