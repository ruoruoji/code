// 给定一个不下降的序列Sn{s1, s2... sn},以及一个m,*
// 找到最小的k,使得s[k] = m,如果不存在输出-1 test case :S = {1,3,4} m = 3 , k = 2, S = {1,2,2,2,,2} m = 2, k = 2


const find = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return -1
    const mid = Math.floor((left + right) / 2)
    if (target === arr[mid]) {
        if (left === right) return mid 
        return find(arr, target, left, mid)
    }
    if (target < arr[mid]) return find(arr, target, left, mid - 1)
    return find(arr, target, mid + 1, right)
}

console.log(find([1], 2))//-1 
console.log(find([2,3], 2))//1 
console.log(find([1, 2, 3], 2))//2 
console.log(find([1,3,4], 3)) //2 
console.log(find([1,2,2,2,2], 2))//2 
console.log(find([2,2,2,2,2], 2))//1 
console.log(find([1,1,3,3,4,5], 2))//-1