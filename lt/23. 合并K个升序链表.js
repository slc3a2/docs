
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    function flatten(arr) {
        while(arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr)
        }
        return arr
    }
    function list2Array(head) {
        if(!head) {
            return []
        }
        let res = [head.val]
        let resv = list2Array(head.next)
        return res.concat(resv)
    }
    if(lists.length === 0) {
        return null
    }
    let arr = lists.map((i => list2Array(i)))
    let flat = flatten(arr)
    flat = flat.sort(function(a, b){return a-b})
    const res = new ListNode()
    if(flat[0] === null || flat[0] === undefined) {
        return null
    }
    res.val = flat[0]
    let pos = res
    for(let i = 1, len = flat.length; i < len; i++) {
        let item = flat[i]
        pos.next = new ListNode(item)
        pos = pos.next
    }
    return res
}
// let l1 = {
//     val: 1,
//     next: {
//         val: 4,
//         next: {
//             val: 5,
//             next: null
//         }
//     }
// }
// let l2 = {
//     val: 1,
//     next: {
//         val: 3,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }
// let l3 = {
//     val: 2,
//     next: {
//         val: 6,
//         next: null
//     }
// }
// // console.log(mergeKLists([l1,l2,l3]))
// // console.log(mergeKLists([]))
// console.log(mergeKLists([{
//     val: undefined,
//     next: null
// },{
//     val: undefined,
//     next: null
// }]))

// // function list2Array(head) {
// //     if(!head) {
// //         return null
// //     }
// //     var result = [head.val]
// //     var restValues = list2Array(head.next)
// //     return result.concat(restValues)
// // }