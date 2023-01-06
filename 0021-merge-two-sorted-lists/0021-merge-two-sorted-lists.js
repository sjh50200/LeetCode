/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result;
    if (!list1) return list2;
    else if (!list2) return list1;
    else {
        if(list1.val <= list2.val) {
            result = list1;
            result.next = mergeTwoLists(list1.next, list2)
        } else {
            result = list2;
            result.next = mergeTwoLists(list1, list2.next);
        }
    }
    return result;
};
    
