/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if(!root) {
    return []
  }
  let stack = []
  function travel(r) {
    if(r) {
      travel(r.left)
      travel(r.right)
      stack.push(r.val)
    }
  }
  travel(root)
  return stack
};