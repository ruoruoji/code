Array.prototype.myflat = function() {           //first method
    return this.toString().split(",").map(item => +item);
}

Array.prototype._myflat = function() {         //second method
    return this.reduce((res, item) => {
        return res.concat(Array.isArray(item) ? item._myflat() : item)
        //
        return Array.isArray(item) ? [...res, ...item._myflat()] : [...res, item]
        return Array.isArray(item) ? res.concat(item._myflat()) : res.concat(item)
    }, [])
}



var a = [1,2,3,[1,2,[12]],4,5];
console.log( a.myflat() );
console.log( a._myflat() );