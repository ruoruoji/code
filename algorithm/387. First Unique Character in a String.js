// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
// function Node (val) {
//     this.val = val
//     this.next = []
// }
// function transf (arr) {
//     var len = arr.length
//     arr[len] = 'flag'
//     var head 
//     var node
//     for (var i = 0; i < len; i++) {
//         node = new Node(arr[i])
//         if (i === 0) head = node
//         for (var j = i; j <= i + arr[i]; j++) {
//             node.next.push(new Node(arr[j]))
//         }
//     }
//     return head
// }
// function travel(head) {
//     if (!head.next) return
//     for (var node of head.next) {

//     }
// }
// function f (arr) {
//     var head = transf(arr)
//     travel(head)
// }


// 彩色楼房
// 小Q给你n个数1 2 3。。n，代表n个楼，第i个楼的高度为i，每个楼会有一种颜色
// 现在问有多少的排列满足从左往右（站在左边很远的地方看）看能看到L种颜色（即看到了L-1次颜色的变化）,答案对1e9+9取模
// 如果两个相同颜色楼的高度分别为H1,H2 (H1 < H2), H1在左边，且H1 H2之间的楼都比H1矮，那么站在左边来看就是一种颜色
// 你能看到一个楼的前提是这个楼之前的楼都比它矮

var firstUniqChar = function(s) {
    const len = s.length
    for (let i = 0; i < len - 1; i++) {
        let flag = 0
        for (let j = i + 1; j <= len; j++) {
            if (s[i] === s[j]) {
                flag = 1
                break
            }
        }

        if (!flag) return i
        if (flag) flag = 0
    }
    return -1
};
console.log(firstUniqChar(""))