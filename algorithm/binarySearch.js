var arr = [1,3,5,7,9,10]

function binarySearch(left, right, item, arr) {
    if (left === right) {
        return item === arr[left] ? left : false
    }
    var mid = Math.ceil((left + right) / 2)
    if (item < arr[mid]) return search(left, mid - 1, item, arr)
    return search(mid, right, item, arr)
}

console.log(binarySearch(0, arr.length - 1, 5, arr)) 