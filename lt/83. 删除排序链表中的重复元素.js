/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//   if(!head || !head.next) {
//     return head
//   }
//   let pos = head
//   while(pos) {
//     if(pos && pos.next && pos.val === pos.next.val) {
//       pos.next = pos.next.next || null 
//       continue
//     }
//     pos = pos.next
//   }
//   return head
// }
var deleteDuplicates = function(head) {
  let t = head
  while(t && t.next) {
    (t.val === t.next.val) ? t.next = t.next.next : t = t.next
  }
  return head
}