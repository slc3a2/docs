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
var inorderTraversal = function(root) {
  if(!root) {
    return []
  }
  let stack = []
  function travel(r) {
    if(r) {
      travel(r.left)
      stack.push(r.val)
      travel(r.right)
    }
  }
  travel(root)
  return stack
};
// 递归
// var inorderTraversal = function(root) {
//   if(!root) {
//     return []
//   }
//   let stack = []
//   function travel(r) {
//     if(r) {
//       travel(r.left)
//       stack.push(r.val)
//       travel(r.right)
//     }
//   }
//   travel(root)
//   return stack
// };
// 非递归
var inorderTraversal = function(root) {
  if(!root) {
    return []
  }
  const order = [] // 按照顺序缓存的树节点(按照 左 根 右)
  const result = []
  while(order.length !== 0 || root) {
    // 压入根和所有左子树到栈中，等待排序，直到没有左子树为止
    if(root) {
      order.push(root)
      root = root.left
    } else {
      // 没有左子树开始取，并放入结果，再检查是否有右子树，进入下一次循环再次检查当前右子树的左子树...
      const t = order.pop()
      result.push(t.val)
      if (t.right) {
        root = t.right
      }
    }
  }
  return result
}

