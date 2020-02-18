// 实现new 也并不是要你实现 new Fn() 这样的。因为像这种关键字，在执行之前都会（转化再执行 / 或者底层就能执行）
// 而是要你通过现有底层知识，再现其内部的操作流程 myNew(fn, 1, 2)
function myNew(fn, ...args) {
    var obj = {};
    obj._proto_ = fn.prototype;
    var res = fn.call(obj, ...args);
    if(res instanceof Object) return res;
    return obj;
}

const fn = function () {}
const a = myNew(fn, 1, 2)

const _a = new fn(1, 2)