/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - add       : Addition (+)
 *   - subtract  : Subtraction (−)
 *   - multiply  : Multiplication (×)
 *   - divide    : Division (÷) — includes division-by-zero handling
 *   - modulo    : Remainder (%) — includes division-by-zero handling
 *   - power     : Exponentiation (^)
 *   - sqrt      : Square root (√) — includes negative number handling
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 2 3        → 5
 *   node calculator.js subtract 10 4  → 6
 *   node calculator.js multiply 3 5   → 15
 *   node calculator.js divide 20 4    → 5
 *   node calculator.js modulo 10 3    → 1
 *   node calculator.js power 2 8      → 256
 *   node calculator.js sqrt 144       → 12
 */

/**
 * Compute the sum of two numbers.
 * @returns {number} The sum of `a` and `b`.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second operand from the first.
 * @returns {number} The difference `a - b`.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of `a` and `b`.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of `a` divided by `b`.
 * @throws {Error} If `b` is zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Compute the remainder of dividing the first operand by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of `a` divided by `b`.
 * @throws {Error} If `b` is 0. Error message: "Division by zero is not allowed."
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

/**
 * Raise a numeric base to a given exponent.
 * @param {number} base - The base value to be raised.
 * @param {number} exponent - The exponent to apply to the base.
 * @returns {number} The result of raising `base` to the power of `exponent`.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Computes the square root of a non-negative number.
 * @param {number} n - The number to take the square root of; must be greater than or equal to 0.
 * @returns {number} The square root of `n`.
 * @throws {Error} If `n` is less than 0.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point — only runs when executed directly
if (require.main === module) {
  const [,, operation, a, b] = process.argv;

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  const allOps = "Operations: add, subtract, multiply, divide, modulo, power, sqrt";

  // sqrt only requires one operand
  if (!operation || isNaN(num1) || (operation !== "sqrt" && isNaN(num2))) {
    console.log("Usage: node calculator.js <operation> <num1> [num2]");
    console.log(allOps);
    process.exit(1);
  }

  try {
    const ops = { add, subtract, multiply, divide, modulo, power, sqrt: squareRoot };
    if (!ops[operation]) {
      console.log(`Unknown operation: ${operation}`);
      console.log(allOps);
      process.exit(1);
    }
    const result = operation === "sqrt" ? ops[operation](num1) : ops[operation](num1, num2);
    console.log(result);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}
