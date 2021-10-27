 // 2. 两数相加 ❌
var addTwoNumbers = function(l1, l2) {
  let t1 = ''
  let t2 = ''
  while(l1) {
    t1 += l1.val
    l1 = l1.next;
  }
  while(l2) {
    t2 += l2.val
    l2 = l2.next;
  }
  t2 = t2.split('').reverse().join('')
  t1 = t1.split('').reverse().join('')
  let t = (BigInt(t1) + BigInt(t2)).toString();
  t = t.split('').reverse().join('')
  let linked = new Array(t.length).fill(0);
  for(let i = 0; i < t.length; i++) {
    linked[i] = new ListNode(t[i]);
  }
  for(let i = 0; i < linked.length; i++) {
    linked[i].next = linked[i+1] || null;
  }
  return linked[0]
};
console.log(addTwoNumbers(l1, l2))