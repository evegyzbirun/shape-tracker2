export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)) || this.side1 === 0 || this.side2 === 0 || this.side3 === 0) {
      return "not a triangle";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "scalene triangle";
    } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "equilateral triangle";
    } else {
      return "isosceles triangle";
    }
  };
  isBigTriangle() {
    const sum = this.side1 + this.side2 + this.side3;
    if (sum > 10) {
      return 'big';
    } else {
      return 'little';
    }
  };

  rightTriangle() {
    // c^2 = a^2 + b^2
    if (this.side1 ** 2 === (this.side2 ** 2) + (this.side3 ** 2)) {
      return 'right triangle'
    }
  };
}