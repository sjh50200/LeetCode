/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = [];
    
    const preOrder = (root) => {
        if(!root) return;
        result.push(root.val);
        if(root.children) {
            for(let i = 0; i < root.children.length; i++) {
                preOrder(root.children[i]);
            }
        }
    }
    
    preOrder(root);
    
    return result;
};