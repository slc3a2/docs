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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(!root) {
    return []
  }
  const res = []
  const queue = [root]
  while(queue.length) {
    let level = []
    for(let i = 0, len = queue.length; i < len; i++) {
      let {left, val, right} = queue.shift()
      level.push(val)
      if(left) queue.push(left)
      if(right) queue.push(right)
    }
    if(level.length > 0) {
      res.push(level)
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

console.log(levelOrder(tree))