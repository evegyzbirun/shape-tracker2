export default class Square {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  checkType() {
    if (this.side1 === 0 || this.side2 === 0 || this.side3 === 0 || this.side4 === 0) {
      return "not square";
    } else if (this.side1 === this.side2 && this.side3 === this.side4 && this.side1 === this.side4) {
      return "square";
    } else {
      return "not square as well";
    }
  };

}