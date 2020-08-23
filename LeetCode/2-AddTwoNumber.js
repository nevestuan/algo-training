/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0);
    let current = result;
    let carry = 0;
    let p = l1;
    let q = l2;
    while(p || q){
        let x = p?.val || 0;
        let y = q?.val || 0;
        let sum = x + y + carry;
        carry = sum >= 10 ? 1 : 0;
        current.val = sum % 10;
        if(p) p = p.next;
        if(q) q = q.next;
        if(p || q) {
            current.next = new ListNode(0);
            current = current.next;
        }
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return result;
};