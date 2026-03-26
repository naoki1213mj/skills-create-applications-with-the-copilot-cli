const { add, subtract, multiply, divide } = require("../calculator");

// -------------------------------------------------------
// Addition (+) tests
// -------------------------------------------------------
describe("add", () => {
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// -------------------------------------------------------
// Subtraction (−) tests
// -------------------------------------------------------
describe("subtract", () => {
  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts a number from itself", () => {
    expect(subtract(42, 42)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// -------------------------------------------------------
// Multiplication (×) tests
// -------------------------------------------------------
describe("multiply", () => {
  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -2)).toBe(-12);
  });

  test("multiplies by one", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// -------------------------------------------------------
// Division (÷) tests
// -------------------------------------------------------
describe("divide", () => {
  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(15, 3)).toBe(5);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  test("divides negative numbers", () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test("divides a positive by a negative number", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(42, 1)).toBe(42);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});
