function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
function inhert(SubType, SuperType) {
    function F() {};
    F.prototype = SuperType.prototype
    var obj = new F();
    SubType.prototype = obj;
    SubType.prototype.constructor = SubType;
}
inhert(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
}