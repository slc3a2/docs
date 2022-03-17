// 141. 环形链表 ✅
var hasCycle = function(head) {
  let set = new Set()
  let res = false
  while(head) {
    if(set.has(head)){
      res = true
      break
    }
    set.add(head)
    head = head.next
  }
  return res
};