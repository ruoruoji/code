//loadsh库

function deepClone(obj) {
    if(obj === null) return null;
    if(typeof obj !== 'object') return obj;
    var target = new obj.constructor(); 
    for(let key in obj) {
        target[key] = deepClone(obj[key]);
    }
    return target;
}

var a = [1,2,3,[1,2,3],[1,2]]
var b = deepClone(a)
b[0] = 10;
b[3] = 1;
console.log(a,b)