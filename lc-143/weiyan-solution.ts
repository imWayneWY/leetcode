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

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {
	let slow = head, fast = head;
	while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
	}

	fast = slow.next;
	slow.next = null;
	slow = head;
	fast = reverseList(fast);
	
	while (slow && fast) {
			const tmpSlow = slow.next;
			const tmpFast = fast.next;
			slow.next = fast;
			fast.next = tmpSlow;
			slow = tmpSlow;
			fast = tmpFast;
	}

};

function reverseList(head: ListNode): ListNode {
			let prev = null;
			let current = head;
			let next = null;

			let tail = head;

			while (current != null) {
					next = current.next;
					current.next = prev;
					prev = current;
					current = next;
			}

			head = prev;

			return head;
}
