Function.prototype.myApply = function(context, arr) {
    if(!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;
    var res;
    if(arr === null || arr == undefined) {
        res = context.fn(arr)
    } else {
        res = context.fn(...args)
    }
    delete context.fn;
    return res;
}
var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}
bar.apply(foo, ['programmer', 20]);
// Selina programmer 20
bar.apply(null, ['teacher', 25]);
// 浏览器环境: Chirs programmer 20; node 环境: undefined teacher 25