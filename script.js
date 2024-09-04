const add = (a, b) => a + b;
const subtract = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;

function operate(num1, operator, num2) {
  if (operator === '+') add(num1, num2);
  if (operator === '-') subtract(num1, num2);
  if (operator === '*') multiply(num1, num2);
  if (operator === '/') divide(num1, num2);
}
