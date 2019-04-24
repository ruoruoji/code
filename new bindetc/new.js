function myNew(fn) {
    var obj = {};
    obj._proto_ = fn.prototype;
    var res = fn.call(obj);
    if(res instanceof Object) return res;
    return obj;
}