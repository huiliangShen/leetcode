/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * timeComplexity: O(m + n)
 * spaceComplexity: O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
     let node1 = headA, node2 = headB
    while(node1 !== node2) {
        node1 = !!node1 ? node1.next : headB
        node2 = !!node2 ? node2.next : headA
    }
    return headA
}
// 链表A a + c(c代表后面走相交之后的链表长度)
// 链表B b + c
// a + c + b === b + c + a
// 链表A 走完链表A后再走链表B
// 链表B 走完链表B后再走链表A
// 会在第一个相交点汇合