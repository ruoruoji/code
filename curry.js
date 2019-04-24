function curry(fn, args = []) {
    return function() {
        args = [...args, ...arguments];  //不能var一个函数内的args,变量声明提升
        if(args.length < fn.length) {
            return curry.call(this, fn, args);  //call和apply的区别 
        } else {
            return fn.apply(this, args);
        }
    }
}

function sum(a,b,c) {
    return a + b + c;
}
var f = curry(sum)
console.log(f(1)(2,3))
//console.log(f(1)(2)(3))  同时console会出错， ⭐为什么？？？