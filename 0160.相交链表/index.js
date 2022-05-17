/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 首先计算两个链表长度 m, n,让长的链表先走m-n步后，同时迭代两个链表，比较两个链表的值，如果相等，则直接返回true
 * timeComplexity: O(m + n + m - n + n)
 * spaceComplexity: O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const node1 = headA,
		node2 = headB
	const getNodeLength = (node) => {
		let count = 0
		while (node) {
			node = node.next
			count++
		}
		return count
	}
	const n1 = getNodeLength(node1),
		n2 = getNodeLength(node2)
	let delta = Math.abs(n1 - n2)
	while (delta > 0) {
		if (n1 > n2) {
			headA = headA.next
		} else {
            headB = headB.next
        }
		delta--
	}
    while(headA && headB) {
        if (headA === headB) {
            return headA
        }
        headA = headA.next
        headB = headB.next
    }
    return null
}
