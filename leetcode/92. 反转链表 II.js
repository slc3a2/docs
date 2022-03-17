function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  function append(target, newElement) { // 链表插入
    if(!target) {
      target = newElement
      return target
    }
    let t = target
    while(t) {
      if(!t.next) {
        t.next = newElement
        break
      }
      t = t.next
    }
    return target
  }
  if(!head.next || (left === right)) {
    return head
  }
  let pos1 = head
  let pos2 = head
  let count1 = 0
  let count2 = 0
  let temp,next,result = new ListNode()
  let prev = null
  let flag = false
  while(pos1) { // 找到开始节点，和结尾节点，存起来
    count1++
    if(left >= (count1 + 1)) {
      console.log(true, count1)
      if(!flag) {
        prev = append(prev, new ListNode(pos1.val))
      }
    }
    if(right === count1 - 1) {
      next = pos1
    }
    pos1 = pos1.next
  }
  if(next) {
    result = next
  } else {
    result = null
  }
  while(pos2) { // 反转处理
    count2++
    if(count2 >= left && count2 <= right) {
      temp = pos2.next
      pos2.next = result
      result = pos2
      pos2 = temp
    } else {
      pos2 = pos2.next
    }
  }
  if(prev) { // 把反转后的链表连接开始节点
    prev = append(prev, result)
    return prev
  } else {
    return result
  }
};

let l1 = {
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

let l2 = {
  val: 3,
  next: {
    val: 5,
    next: null
  }
}

console.log(reverseBetween(l1, 3, 4))