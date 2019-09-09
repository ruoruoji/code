const arr = [45, 10, 11, 88, 34, 90]

// const quickSort = arr => {
//     if (arr.length < 2) return arr
//     const spliceItem = arr.splice(0, 1)
//     const leftArr = []
//     const rightArr = []
//     arr.forEach(item => {
//         if (item >= spliceItem) rightArr.push(item)
//         else leftArr.push(item)
//     });
//     return leftArr.concat(spliceItem, rightArr);
// }


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    const pivot = arr[Math.ceil((left + right)/ 2 )]   //0为基准值
    let leftPoint = left
    let rightPoint = right
    let index
    if (left < right) {
        while (leftPoint < rightPoint) {
            while(arr[rightPoint] > pivot) {
                rightPoint--
            }
            while(arr[leftPoint] < pivot) {
                leftPoint++
            }
            [arr[leftPoint], arr[rightPoint]] = [arr[rightPoint], arr[leftPoint]]
        }
        index = leftPoint
        quickSort(arr, left, index - 1)
        quickSort(arr, index + 1, right)
    }
    return arr
}

console.log(quickSort(arr))
