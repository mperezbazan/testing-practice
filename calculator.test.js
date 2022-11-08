const {add, subtract, multiply, divide} = require('./calculator');

describe('Calculator Add', () => {
  test('1 + 3 equal 4', () => {
    expect(add(1, 3)).toBe(4);
  });
  test('659523 + 553888 equal 713411', () => {
    expect(add(659523, 553888)).toBe(1213411);
  });
  test('0 + 0 equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });
})

describe('Calculator Substract', () => {
  test('3 - 1 equal 2', () => {
    expect(subtract(3, 1)).toBe(2);
  });
  test('6 - 0 equal 6', () => {
    expect(subtract(6, 0)).toBe(6);
  });
  test('7 - 10 equal -3', () => {
    expect(subtract(7, 10)).toBe(-3);
  });
})


describe('Calculator Divide', () => {
  test('3 / 1 equal 3', () => {
    expect(divide(3, 1)).toBe(3);
  });
  test('6 / 2 equal 3', () => {
    expect(divide(6, 2)).toBe(3);
  });
  test('10 / 8 equal 1.25', () => {
    expect(divide(10, 8)).toBe(1.25);
  });
})


describe('Calculator Multiply', () => {
  test('3 * 1 equal 3', () => {
    expect(multiply(3, 1)).toBe(3);
  });
  test('6 * 0 equal 0', () => {
    expect(multiply(6, 0)).toBe(0);
  });
  test('7 * 10 equal 70', () => {
    expect(multiply(7, 10)).toBe(70);
  });
})