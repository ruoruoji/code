// - 面向对象特性： 封装，继承，多态，抽象

// - 私有变量实现（proxy）
// 题目：实现面向对象中的私有变量 ？？懵了
//      - 并不是要你实现一个转化器来解析类，对类中可能出现的_key字段都进行私有化转换。
//        -（可能出现，表示你的转化器要解析出现过以及可能出现的_key字段，需要一个查找过程了）
//      - 而是让你实现特定属性（比如width和height字段）的私有化（降低难度和理解了），目的是查看面向对象中的私有化和js基础的理解。
//        -（可自由发挥，再现达到目标的实现思路即可。可用proxy，闭包，约定前缀为私有等实现。其中约定前缀也并不是要你写转化器实现新特性，太麻烦了吧。）   
// 解读：一个class类中有width和height属性，实现其私有化.

const privateClass = `class Shape {
    #height;
    #width;

    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }
  
    get area() { 
      return this.#width * this.#height;    
    }
}`

class Shape {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
    get area() {
      return this._width * this._height;
    }
  }
  
  const handler = {
    get: function(target, key) {
      if (key[0] === '_') {
        throw new Error('Attempt to access private property');
      } else if (key === 'toJSON') {
        const obj = {};
        for (const key in target) {
          if (key[0] !== '_') {
            obj[key] = target[key];
          }
        }
        return () => obj;
      }
      return target[key];
    },
    set: function(target, key, value) {
      if (key[0] === '_') {
        throw new Error('Attempt to access private property');
      }
      target[key] = value;
    },
    getOwnPropertyDescriptor(target, key) {
      const desc = Object.getOwnPropertyDescriptor(target, key);
      if (key[0] === '_') {
        desc.enumerable = false;
      }
      return desc;
    }
  }
  const square = new Proxy(new Shape(10, 10), handler);
  console.log(square.area);             // 100
  console.log(square instanceof Shape); // true
  console.log(JSON.stringify(square));  // "{}"
  for (const key in square) {           // No output
    console.log(key);
  }
  square._width = 200;

// - 要问有质量的问题，比如宏观的问题，本次面试对我对评价，公司相关，公司里的个人发展相关.而不是具体的问题: 具体哪个bug， 或者遇到对问题 ？
