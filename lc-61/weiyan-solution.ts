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

 function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;
	
	let p1 = head, p2 = head;
	for (let i=0; i<k; i++) {
			p2 = p2.next ? p2.next : head;
	}
	if (p1 === p2) return head;
	while (p2.next) {
			p1 = p1.next;
			p2 = p2.next;
	}
	
	const newHead = p1.next;
	p1.next = null;
	p2.next = head;
	
	return newHead;
};
