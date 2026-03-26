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

// Addition (+)
function add(a, b) {
  return a + b;
}

// Subtraction (−)
function subtract(a, b) {
  return a - b;
}

// Multiplication (×)
function multiply(a, b) {
  return a * b;
}

// Division (÷) — with division-by-zero handling
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Modulo (%) — with division-by-zero handling
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation (^)
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root (√) — with negative number handling
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
