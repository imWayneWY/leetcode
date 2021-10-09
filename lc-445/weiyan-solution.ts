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

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const stack1 = [];
	const stack2 = [];
	
	let p1 = l1, p2 = l2;
	while (p1 || p2)  {
			if (p1) {
					stack1.push(p1.val);
					p1 = p1.next;
			}
			if (p2) {
					stack2.push(p2.val);
					p2 = p2.next;
			}
	}
	
	let next = null;
	let ans = null;
	let carry = 0;
	while (stack1.length || stack2.length || carry) {
			let sum = carry;
			if (stack1.length) {
					sum += stack1.pop();
			}
			if (stack2.length) {
					sum += stack2.pop();
			}
			if (sum > 9) {
					carry = 1;
					sum = sum % 10;
			} else {
					carry = 0;
			}
			const n = new ListNode(sum);
			n.next = next;
			next = n;
			ans = n;
	}
	
	return ans;
};
