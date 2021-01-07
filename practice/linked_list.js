class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }
  find(item) {
    let curNode = this.head;
    while(curNode.value != item) {
      curNode = curNode.next;
    }
    return curNode
  }
  insert(item) {
    let t = this.head;
    while(t.next) {
      t = t.next;
    }
    t.next = {};
    t.next.value = item;
    t.next.next = null;
  }
  remove(item) {
    let cur = this.head;
    while(cur.next.value !== item){
      cur = cur.next;
    }
    cur.next = cur.next.next
  }
  print() {
    let temp = [];
    let t = this.head;
    while(t){
      temp.push(t.value);
      t = t.next;
    }
    console.log(temp.join('->'))
    return temp.join('->')
  }
}
let linked = new LinkedList();
linked.insert('1')
linked.insert('2')
linked.insert('3')
linked.print();
// linked.remove('2')
// linked.find('1')

var reverseList = function(head) {
  if(head === null || head.next === null){return head;}
  let prev = null; // 临时存储
  let cur = head; // 起点位置
  // // 从链表起点循环到结尾
  // while(curr != null) {
  //   // 保存断开之后的节点
  //   let nextTemp = curr.next; 
  //   curr.next = prev; // head指向null
  //   prev = curr; // prev改变到修改后的列表的头部
  //   curr = nextTemp; // 取出下一个要处理的节点
  // }
  let temp = cur.next;
  cur.next = prev;
  prev = cur;
  cur = temp
  
}

let res = reverseList(linked.head);
console.log(res)