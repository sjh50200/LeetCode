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
    const mergeListByDesc = (l1, l2) => {
        let result;
        if (!l1) return l2;
        if (!l2) return l1;
        if(l1.val <= l2.val) {
            result = l1;
            result.next = mergeListByDesc(l1.next, l2)
        } else {
            result = l2;
            result.next = mergeListByDesc(l1, l2.next);
        }
        return result;
    }
    
    return mergeListByDesc(list1, list2);
};