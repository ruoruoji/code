// function Node (val) {              //方法一：转化成节点图，再遍历。72/75通过率，数据太大的话，跑不起来
//     this.val = val
//     this.next = []
// }
// function transf (arr) {
//     var len = arr.length
//     arr[len - 1] = 'flag'
//     var head 
//     var node = []
//     for (var i = 0; i < len; i++) { 
//         node[i] = new Node(arr[i])
//     }
//     for (var i = 0; i < len - 1; i++) {
//         if (i === 0) head = node[i]
//         for (var j = i + 1; j <= i + arr[i] && j < len; j++) {
//             node[i].next.push(node[j])
//         }
//     }
//     return head
// }
// function travel(node) {
//     if (!node) return false
//     if (node.val === 'flag') return true
//     var len = node.next.length
//     var flag = false
//     for (var i = len - 1; i >= 0; i--) {
//         flag = flag || travel(node.next[i])
//         if (flag) return flag
//     }
//     return flag
// }
// var canJump = function(nums) {
//     var head = transf(nums)
//     var flag = travel(head)    
//     return flag
// };

//--------------------------------------------------------------------------------------------------

// var canJump = function(nums) {      //方法二，虽然勉强通过了。但是空间时间性能不好
//     var stack = []
//     var check = {}
//     var len = nums.length
//     var temp, index, val, i
//     if (!len) return false
//     if (0 + nums[0] >= len - 1) return true
//     stack.push([0, nums[0]])
//     check[0] = true
//     while (temp = stack.pop()) {
//         index = temp[0]
//         val = temp[1]
//         for (i = index + val; i >= index + 1 && i < len; i--) {
//             if (i + nums[i] >= len - 1) return true
//             if (!check[i]) {
//                 stack.unshift([i, nums[i]])
//                 check[i] = true
//             }
//         }
//     }
//     return false
// };

//--------------------------------------------------------------------------------------------------

var canJump = function(nums) {        //false的情况是：遍历到了索引为0的元素。且不能跳过该元素                                      //
    var index = 0                     //因此用max表示能达到的点，若该值 max <= index则表示不饿能跳过。
    var max = 0
    var len = nums.length
    while (index < len) {
        max = Math.max(max, index + nums[index])
        if (max >= len - 1) return true
        if (max === index) return false
        //if (max <= index && nums[index] === 0) return false    //更容易理解
        index += 1 
    }
    return false
};