// Array.prototype.bubbleSort = function() {           //方法一: 有重复
//     var arr = this
//     var length = arr.length
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log([90, 10, 11, 45, 34, 88].bubbleSort())

Array.prototype.bubbleSort = function() {
    var arr = this
    var length = arr.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log([90, 10, 11, 45, 34, 88].bubbleSort())