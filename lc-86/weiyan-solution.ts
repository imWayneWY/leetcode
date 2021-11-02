/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function partition(head: ListNode | null, x: number): ListNode | null {
	let p = head;
	let ltP = null;
	let gtP = null;
	let ans = p;
	while(p) {
			const tmpNxt = p.next;
			if (p.val < x) {
					if (gtP) {
							if (ltP) {
									const ltpTmpNxt = ltP.next;
									ltP.next = p;
									p.next = ltpTmpNxt;
							} else {
									ans = p;
									ans.next = head;
							}
							gtP.next = tmpNxt;
					}
					ltP = p;
			} else {
					gtP = p;
			}
			p = tmpNxt;
	}
	return ans;
};
