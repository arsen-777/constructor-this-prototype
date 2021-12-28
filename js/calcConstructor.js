"use strict";

function Calculator() {}
Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};
Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};
Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};
Calculator.prototype.divide = function (num1, num2) {
  try {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      throw `error`;
    }
  } catch (err) {
    console.log(err);
  }
};

let calculator = new Calculator();

console.log(calculator.add(10, 2));
console.log(calculator.subtract(10, 2));
console.log(calculator.multiply(10, 2));
console.log(calculator.divide(10, 0));
