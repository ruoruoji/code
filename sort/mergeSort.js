var arr = [45, 10, 11, 88, 34, 90]


function mergeSort(arr, left = 0, right = arr.length - 1, temp = new Array(arr.length)) {
    if (left < right) {
        let mid = Math.floor((left + right)/2)
        mergeSort(arr, left, mid, temp)
        mergeSort(arr, mid + 1, right, temp)
        merge(arr, left, mid, right, temp)
    }
    return arr
}

function merge(arr, left, mid, right, temp) {
    var i = left
    var j = mid + 1
    var t = 0          //t = left 也可则会使temp与arr同步。 
    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) temp[t++] = arr[i++]
        else temp[t++] = arr[j++]
    }
    while (i <= mid) {
        temp[t++] = arr[i++]
    }
    while (j <= right) {
        temp[t++] = arr[j++]
    }
    t = 0
    while (left <= right) {
        arr[left++] =temp[t++]
    }
}
console.log(mergeSort(arr))