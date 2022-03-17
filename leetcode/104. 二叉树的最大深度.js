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
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root) {
    return []
  }
  let res = 0
  const queue = [root]
  while(queue.length) {
    let level = []
    for(let i = 0, len = queue.length; i < len; i++) {
      let {left, right} = queue.shift()
      if(left) queue.push(left)
      if(right) queue.push(right)
    }
    if(level.length > 0) {
      res++
    }
  } 
  return res
};
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    }
  }
}

console.log(maxDepth(tree))