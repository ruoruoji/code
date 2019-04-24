Function.prototype.myBind = function(context) {
    var fn = this;
    var args = [...arguments].slice(1);
    function bind() {
        var _args = [...args, ...arguments];
        context = this instanceof bind? this : context; //第一次bind返回的是一个函数a。a如果new够着调用能影响bind绑定的this
        return fn.apply(context, _args);
    }
    function F() {};  //返回的函数应该拥有原函数的原型
    F.prototype = fn.prototype;
    bind.prototype = new F();
    return bind;
}
var name = 'Jack';
function person(age, job, gender){
    console.log(this.name , age, job, gender);
}
var Yve = {name : 'Yvette'};
let result = person.myBind(Yve, 22, 'enginner')('female');
