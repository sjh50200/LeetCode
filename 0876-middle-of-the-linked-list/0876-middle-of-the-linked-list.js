/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0;
    let temp = head;
    
    while (temp) {
        length = length + 1;
        temp = temp.next;
    }
    
    const middle = length % 2 === 0 ? length / 2 : Math.floor(length / 2)
    
    for (let i = 0; i < middle; i++) {
        head = head.next;
    }
    
    return head;
};