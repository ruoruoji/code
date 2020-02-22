// redux connect实现
const connect = (mapStateToProps, mapDispatchToPrpops) => {
    const {
        getState,
        dispatch
    } = useContext('STORE')
    const props = {
        ...mapStateToProps(getState()),
        ...mapDispatchToPrpops(dispatch)
    }
    return (Component) => <Component ...props />
    
}

// 私有变量(当时没做好)
function Shape() {
    // 私有变量集
    const this$ = {};
  
    class Shape {
      constructor(width, height) {
        this$.width = width;
        this$.height = height;
      }
  
      get area() {
        return this$.width * this$.height;
      }
    }
  
    const instance = new Shape(...arguments);
    Object.setPrototypeOf(Object.getPrototypeOf(instance), this);
    return instance;
  }
  
  const square = new Shape(10, 10);
  console.log(square.area);             // 100
  console.log(square.width);            // undefined
  console.log(square instanceof Shape); // true

// 注解: _Shape指内部的Shape
square.__proto__ === _Shape.prototype
_Shape.prototype.__proto__.__proto__ === Shape.prototype


// 一个getter是一个获取某个特定属性的值的方法。一个setter是一个设定某个属性的值的方法
// 使用 使用对象初始化器 定义
// const o = {
//     get b() { 
//       return this.a + 1;
//     },
//     set c(x) {
//       this.a = x / 2
//     }
// };
// 也可以之后随时使用 getter 和 setter 添加方法添加到任何对象
// - Object.defineProperty(d, "year", {
//     get () { return this.getFullYear() },
//     set (y) { this.setFullYear(y) }
//   });
// - Object.defineProperties(o, {
//     "b": { get: function () { return this.a + 1; } },
//     "c": { set: function (x) { this.a = x / 2; } }
//     o.b, 其中this指向o
// });

// 对class来说，
// - this.a表示实例上有a属性
// - constructor同级的方法表示原型上的方法（方法指属性key对应的value为函数）
// - Static a表示静态方法，在Shape.a上
// - 私有变量指，只能在该类中使用，其子级或实例都不能使用的变量，尚未实现。



// 新提案那中私有变量实现(并未考察)
const str = `class Shape {
    #height;
    #width;

    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }
  
    get area() { 
      // area.toString()假设此方法同函数一样拿到字符串
      return this.#width * this.#height;    
    }
}`

const nativeStr = `
    function Shape () { !!

        return constructor(...arguments) !!
    }

    for (let key in normalPrototypeProps) { !!
        Shape.prototype[key] = normalPrototypeProps[key] !!
    }
`
// 解析实现原理，在代码执行之前将其转换为基于原型继承的function，(假设仍可进行js操作，其实用底层语言也可以实现)

// parseFile = (file, class, id) => file.class[id].toString() 
// parseClass = (str) => [className, normalPrototypeProps, privatePrototypeProps,constructor]
// composeFn = (parseClass(str)) => nativeStr
// eval(nativeStr)


// 文件中代码以字符串形式出现，以classid字段，通过parseFile(file, 'class', 'Shape') => str
// 解析类，以各种指定字段转换，通过parseClass(str) => [`Shape`, [{ area: area.toString() }], [#height, #width], constructor.toString()]  
// !!! 操作并拼接字符串，通过composeFn = (parseClass(str)) => nativeStr
// 通过eval执行代码


// !!!
// 1. 我知道原型继承，特性，用法
// 2. 我知道calss类，特性，用法，并知道它只是个语法糖，底层还是用原型继承实现
// 3. 我能用原型继承实现类的特性
// 4. 我大概对代码执行前，解析类语法糖将其转化为原型继承 实现细节有一点了解。
// 5. 我经常会对 4 想太多，而知识面不足，导致面试时会焦虑。但面试一般都不会让你实现一个解释编译器，那些细节可以空闲了慢慢考虑的
// 6. 好像写个将class转换为原型继承的转换器，有上私有属性版本的class。好像很复杂，知识水平不够