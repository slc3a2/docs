// 206. 反转链表  ✅
var reverseList = function(head) {
  // 将处理的链表
  let todo_linked = head;
  // 新的链表
  let new_linked = null;
  while(todo_linked) {
    // 拿到要处理的链表下一节点
    let next = todo_linked.next;
    // 切换，把todo_linked下一节点设置为新链表
    todo_linked.next = new_linked;
    // 设置完，更新new_linked，留着下次替换使用
    new_linked = todo_linked;
    // 接着处理next的下一项
    todo_linked = next;
  }
  return new_linked;
};
let temp = {
  key: 1,
  next: {
    key: 2,
    next: null
  }
}
reverseList(temp)