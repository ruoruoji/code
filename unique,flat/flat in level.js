//规定深度的数组扁平化
Array.prototype.myflat = function(level) {    
    level = typeof(level) === "undefined" ? 1 : level
    return this.reduce((res, item) => {
        return res.concat(Array.isArray(item) && (level > 1) ? item.myflat(level-1) : item)
    }, [])
}
console.log([1,2,[3,3,[5,[9,9],6],4],7].myflat(1))
