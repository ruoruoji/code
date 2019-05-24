var arr = [45, 10, 11, 88, 34, 90]
// Array.prototype.quickSort = function(flag, i) {
//     var arr = this
//     if (arr.length < 2) return arr
//     var splitItem = arr[Math.floor(arr.length/2)]         //不抽离该元素会死循环
//     var [leftArray, rightArray] = [[], []]
//     for (let item of arr) {
//         if (item < splitItem) leftArray.push(item)
//         else rightArray.push(item)
//     }
//     return leftArray.quickSort("left", i+1).concat(rightArray.quickSort("right", i+1))
// }
// console.log(arr.quickSort("first", 1))

//-----------------------------------------------------------------------------------------------------

// Array.prototype.quickSort = function(flag, i) {
//     var arr = this
//     if (arr.length < 2) return arr
//     var splitItem = arr.splice(0, 1)                           //基准值元素的选择影响效率
//     var [leftArray, rightArray] = [[], []]
//     for (let item of arr) {
//         if (item < splitItem) leftArray.push(item)
//         else rightArray.push(item)
//     }
//     return leftArray.quickSort("left", i+1).concat(splitItem, rightArray.quickSort("right", i+1))
// }
// console.log(arr.quickSort("first", 1))
           //以上两方法的i仅为了测试错误
//-----------------------------------------------------------------------------------------------------

function quickSort(arr, left, right) {        //减少内存的快排
    var len = arr.length
    var left = typeof left === "number" ? left : 0
    var right = typeof right === "number" ? right : len - 1
    var partitionIndex
    if (left < right) {
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr  
}
function partition(arr, left, right) {
    var pIndex = left
    var index = pIndex + 1
    for (let i = index; i <= right; i++) {
        if (arr[pIndex] > arr[i]) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            index++
        }
    }
    [arr[pIndex], arr[index - 1]] = [arr[index - 1], arr[pIndex]]
    return index - 1
}
console.log(quickSort(arr))
