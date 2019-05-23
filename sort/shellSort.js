Array.prototype.shellSort = function() {
    var arr = this
    var length = arr.length
    for (let d = half(length); d > 0; d = half(d)) {
        for (let i = d; i < length; i++) {
            for (let j = i; j >= d; j -=d) {
                if(arr[j] < arr[j - d]) {
                    [arr[j], arr[j - d ]] = [arr[j - d], arr[j]]
                }
            }
        }
    }
    return arr
}
function half(length) {
    return Math.floor(length / 2)
}
console.log([90, 10, 11, 45, 34, 88].shellSort())