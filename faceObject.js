'use strict';

class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() { return this.name; }

}

var shape = new Shape('我的形状');
console.log(`名称：${shape.getName()}`);

