Array.prototype.insertSort = function() {
    var arr = this
    for (let i = 1; i < arr.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if(arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}
console.log([90, 10, 11, 45, 34, 88].insertSort())