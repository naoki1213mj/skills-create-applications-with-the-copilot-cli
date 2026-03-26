const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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

// -------------------------------------------------------
// Modulo (%) tests
// -------------------------------------------------------
describe("modulo", () => {
  test("5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(12, 4)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero by a number", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test("throws error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error when modulo zero by zero", () => {
    expect(() => modulo(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// -------------------------------------------------------
// Exponentiation (^) tests
// -------------------------------------------------------
describe("power", () => {
  test("2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to a positive exponent", () => {
    expect(power(5, 2)).toBe(25);
  });

  test("raises a number to the power of zero", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises zero to a positive exponent", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test("handles large exponent", () => {
    expect(power(2, 10)).toBe(1024);
  });
});

// -------------------------------------------------------
// Square root (√) tests
// -------------------------------------------------------
describe("squareRoot", () => {
  test("√16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a perfect square", () => {
    expect(squareRoot(144)).toBe(12);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns zero for square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns one for square root of one", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles decimal input", () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test("handles large numbers", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  // Edge case: negative number
  test("throws error for square root of a negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for square root of a large negative number", () => {
    expect(() => squareRoot(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});
