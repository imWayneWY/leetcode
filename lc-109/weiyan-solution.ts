import { ListNode } from "../utils/list-node";
import { TreeNode } from "../utils/tree-node";

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (head===null) return null;
  if (head.next === null) return new TreeNode(head.val);
  
  let preMid = head;
  let slow = head;
  let fast = head.next;
  
  // 找到链表的中间值做root
  while (fast!==null && fast.next!==null) {
    preMid = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // 如果链表长度大于2，切断链表
  if(slow !== preMid) preMid.next = null;

  const root = new TreeNode(slow.val);
  // 链表长度小于2的话，直接把left赋值为null
  root.left = head === slow ? null : sortedListToBST(head);
  root.right = sortedListToBST(slow.next);
  return root;
};
