const add = (a, b) => a + b;
const subtract = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;
let displayValue = '0';

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimalPoint = document.querySelector('#decimal');
const numInputArr = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
];

numInputArr.forEach((node) => {
  node.addEventListener('click', populateDisplay);
});

decimalPoint.addEventListener('click', (e) => {
  if (!displayValue.includes('.')) {
    populateDisplay(e);
  }
});

function operate(num1, operator, num2) {
  if (operator === '+') add(num1, num2);
  if (operator === '-') subtract(num1, num2);
  if (operator === '*') multiply(num1, num2);
  if (operator === '/') divide(num1, num2);
}

function populateDisplay(e) {
  if (display.textContent === '0' && e.target.id !== 'decimal') {
    display.textContent = e.target.textContent;
  } else if (display.textContent === '0' && e.target.id === 'decimal') {
    display.textContent += e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
  displayValue = display.textContent;
}
