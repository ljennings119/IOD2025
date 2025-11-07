class Calculator {

  constructor() {
    this.id = Date.now();
  }

  #log = (value) => {  // private method
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  add(num1, num2) { // public method
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator
