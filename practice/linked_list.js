class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
    return this.print();
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
    return temp.join('->')
  }
}
let linked = new LinkedList();
linked.insert('1')
linked.insert('2')
linked.insert('3')
linked.print()
linked.remove('2')
linked.find('1')