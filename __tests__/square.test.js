import Square from './../src/square.js';

describe('Square', () => {

  test("should return square", () => {
    const square1 = new Square(2, 2, 2, 2);
    expect(square1.side1).toEqual(2);
    expect(square1.side2).toEqual(2);
    expect(square1.side3).toEqual(2);
    expect(square1.side4).toEqual(2);
  })


  test("should return not square as well", () => {
    const square2 = new Square(2, 1, 2, 5);
    expect(square2.checkType()).toEqual("not square as well");
  })

  test("should return not square", () => {
    const square2 = new Square(0, 0, 0, 0);
    expect(square2.checkType()).toEqual("not square");
  })
})
