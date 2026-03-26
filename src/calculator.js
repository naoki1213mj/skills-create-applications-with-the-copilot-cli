/**
 * Node.js CLI Calculator
 *
 * Supported operations (based on the four basic math operations):
 *   - add       : Addition (+)
 *   - subtract  : Subtraction (−)
 *   - multiply  : Multiplication (×)
 *   - divide    : Division (÷) — includes division-by-zero handling
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 2 3        → 5
 *   node calculator.js subtract 10 4  → 6
 *   node calculator.js multiply 3 5   → 15
 *   node calculator.js divide 20 4    → 5
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

// Export functions for testing
module.exports = { add, subtract, multiply, divide };

// CLI entry point — only runs when executed directly
if (require.main === module) {
  const [,, operation, a, b] = process.argv;

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  try {
    const ops = { add, subtract, multiply, divide };
    if (!ops[operation]) {
      console.log(`Unknown operation: ${operation}`);
      console.log("Operations: add, subtract, multiply, divide");
      process.exit(1);
    }
    console.log(ops[operation](num1, num2));
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}
