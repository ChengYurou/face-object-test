'use strict';

class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() { return this.name; }

}

var shape = new Shape('我的形状');
console.log(`名称：${shape.getName()}`);

class Square extends Shape {
  constructor(length) {
    super('正方形');
    this.length = length;
  }

  getLength() { return this.length; }

  getPerimeter() { return this.length * 4; }
}

let square = new Square(4);
console.log(`名称：${square.getName()}`)
console.log(`边长：${square.getLength()}`)
console.log(`周长：${square.getPerimeter()}`);