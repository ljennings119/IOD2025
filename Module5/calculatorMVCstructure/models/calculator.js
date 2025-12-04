class Calculator {
  static add(a, b) { return a + b; }
  static subtract(a, b) { return a - b; }
  static multiply(a, b) { return a * b; }
  static divide(a, b) { return b === 0 ? "Cannot divide by zero" : a / b; }
}

module.exports = Calculator;
