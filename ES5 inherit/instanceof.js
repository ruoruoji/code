function myInstanceOf(instance, protot) {
    var left = instance.__proto__;
    var right = protot.prototype;
    while(1) {
        if(left === null) return false;
        if(left === right) return true;
        left = left.__proto__;
    }
}
var a = []
console.log(myInstanceOf(a, Array))
console.log(myInstanceOf(a, Object))
console.log(myInstanceOf(a, Function))