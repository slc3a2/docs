// 21. 合并有序链表 ✅
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if(!l2) {
    return l1
  }
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  if(l2.val <= l1.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

let l3 = {
  val: 5
}

let l4 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

mergeTwoLists(l3, l4)