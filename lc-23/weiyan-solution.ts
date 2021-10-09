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

 function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	const len = lists.length;
	const ans = new ListNode();
	let p = ans;
	
	while (true) {
			let minIdx = 0;
			let minVal = Infinity;
			let reachEndCnt = 0;
			for (let i=0; i<len; i++) {
					const nl = lists[i];
					if (!nl) {
							reachEndCnt++;
					} else if(nl.val < minVal) {
							minVal = nl.val;
							minIdx = i;
					}
			}
			if (reachEndCnt===len) {
					break;
			} else {
					p.next = new ListNode();
					p = p.next;
					p.val = minVal;
					lists[minIdx] = lists[minIdx]?.next || null;
			}
	}
	
	return ans.next;
};
