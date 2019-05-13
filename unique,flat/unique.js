var a = [1,2,3,1,2,3,3,1,4,5];

console.log( [...new Set(a)] );     //first method

Array.prototype.myUnique = function() {  //second method
    return this.reduce((res, item) => {
        return res.indexOf(item) === -1? [...res, item] : res;
    }, [])
}
console.log( a.myUnique() );
