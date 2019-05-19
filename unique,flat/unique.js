var a = [1,2,3,4,5,3,3,3,3,3,3,3,3,3,4,5,5,5,5,55,5,5,5,5,5,6,'3']  //indexOf强相等，能判别出字符串
console.time(1)
console.log( [...new Set(a)] )
console.timeEnd(1)

Array.prototype.myUnique = function() {  
    return this.reduce((res, item) => {
        return res.indexOf(item) === -1? [...res, item] : res;
    }, [])
}
console.time(2)
console.log( a.myUnique() );
console.timeEnd(2)

Array.prototype._myUnique = function() {  
    var arr = []
    for (let item of this) {
        arr = arr.indexOf(item) === -1 ? arr.concat(item) : arr
    }
    return arr
}
console.time(3)
console.log( a._myUnique() );
console.timeEnd(3)

Array.prototype.__myUnique = function() {            //没有另外开辟出空间，节约了内存
    var len = this.length
    for (let i = len-1; i >= 0; i--) {
        if (this.indexOf(this[i]) !== i) this.splice(i, 1)
    }
    return this
}
console.time(4)
console.log( a.__myUnique() );
console.timeEnd(4)
