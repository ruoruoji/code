// Array.prototype.quickSort = function(flag, i) {
//     var arr = this
//     if (arr.length < 2) return arr
//     var splitItem = arr.splice(0, 1)
//     var [leftArray, rightArray] = [[], []]
//     for (let item of arr) {
//         if (item < splitItem) leftArray.push(item)
//         else rightArray.push(item)
//     }
//     console.log(flag, i)
//     console.log("left", leftArray, "right", rightArray)
//     return leftArray.quickSort("left", i+1).concat(splitItem, rightArray.quickSort("right", i+1))
// }
// console.log([90, 10, 11, 45, 34, 88].quickSort("first", 1))

//-----------------------------------------------------------------------------------------------------

Array.prototype.quickSort = function(flag, i) {
    var arr = this
    if (arr.length < 2) return arr
    var splitItem = arr[Math.floor(arr.length/2)]
    var [leftArray, rightArray] = [[], []]
    for (let item of arr) {
        if (item < splitItem) leftArray.push(item)
        else rightArray.push(item)
    }
    console.log(flag, i)
    console.log("left", leftArray, "right", rightArray)
    return leftArray.quickSort("left", i+1).concat(rightArray.quickSort("right", i+1))
}
console.log([90, 10, 11, 45, 34, 88].quickSort("first", 1))