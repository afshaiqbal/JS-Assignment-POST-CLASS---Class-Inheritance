// declare class

// export class using module.exports
class Shape {
  constructor() {
    this.color = 'blue';
  }
  drawShape() {
    return "A shape is drawn";
  }
  calculateArea() {
    return "Area is calulated. ";
  }
}

module.exports = Shape;