/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let l = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

let l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(n === 1 && !head.next) {
    return null
  }
  let stack = []
  let pos = head
  while(pos) {
    stack.push(pos)
    pos = pos.next
  }
  const prevIdx = stack.length - (n+1)
  const nextIdx = stack.length - (n-1)
  if (prevIdx < 0) {
    head = head.next
  } else {
    stack[prevIdx].next = (nextIdx > stack.length - 1) ? null :stack[nextIdx]
  }
  return head
};

console.log(removeNthFromEnd(l1, 2))
console.log(removeNthFromEnd(l2, 2))
