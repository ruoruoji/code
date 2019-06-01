var arr = [1,3,5,7,9,10]

// function searchIndex(left, right, item, arr) {        //递归实现
//     if (left > right) return -1
//     var mid = Math.floor((left + right) / 2 )
//     if (arr[mid] === item) return mid
//     if (item < arr[mid]) return searchIndex(left, mid - 1, item, arr)
//     return searchIndex(mid + 1, right, item, arr)
// }
// function binarySearch(arr, item) {
//     return searchIndex(0, arr.length - 1, item, arr)
// }

//-------------------------------------------------------------------------------------------------

function searchIndex(left, right, item, arr) {       //非递归实现
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] === item) return mid
        if (arr[mid] < item) left = mid + 1
        else right = mid - 1
    }
    return -1
}
function binarySearch(arr, item) {
    return searchIndex(0, arr.length - 1, item, arr)
}
console.log(binarySearch(arr, 5))  
