Function.prototype.myCall = function(context) {
    if(!context) {
        context =  typeof global === 'object' ? global : window; 
    }
    context.fn = this;
    var args = [...arguments].slice(1);
    var res = context.fn(...args);
    delete context.fn;
    return res;
}
//测试代码
var foo = {
    name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
    console.log(this.name);
    console.log(job, age);
}
bar.myCall(foo, 'programmer', 20);
// Selina programmer 20
bar.myCall(null, 'teacher', 25);