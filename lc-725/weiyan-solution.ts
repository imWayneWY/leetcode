import {ListNode} from '../utils/list-node'

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
	let len = 0;
	let p = head;
	while (p) {
			len++;
			p = p.next;
	}
	
	let partLen = Math.floor(len / k);
	let remain = len % k;
	p = head;
	const ans = new Array(k);

	for (let i=0; i<k; i++) {
			let l = !!remain ? partLen+1 : partLen;
			!!remain && remain--;
			ans[i] = p;
			for (let j=0; j<l; j++) {
					if (p) {
							const tmp = p.next;
							if (j===l-1) {
									p.next = null;
							}
							p = tmp;
					}
			}
	}

	return ans;
};
