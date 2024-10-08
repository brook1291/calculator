const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
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

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equal');
const operations = [addBtn, subtractBtn, multiplyBtn, divideBtn];

const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#backspace');
const display = document.querySelector('#display');
const buttons = Array.from(document.querySelectorAll('button'));

operations.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (operator === '/' && secondNum === 0) {
      alert(
        'Unable to divide by zero. Please input a different number to divide.'
      );
      return;
    }
    if (firstNum !== false && operator && secondNum !== false) {
      display.textContent =
        Math.round(operate(firstNum, operator, secondNum) * 1000000) / 1000000;
      displayValue = display.textContent;
    }

    if (e.target.id === 'add') operator = '+';
    if (e.target.id === 'subtract') operator = '-';
    if (e.target.id === 'multiply') operator = '*';
    if (e.target.id === 'divide') operator = '/';

    firstNum = Number(displayValue);
    secondNum = false;

    for (let button of operations) {
      if (button.id !== e.target.id) {
        button.classList.remove('chosen-operator');
      } else {
        button.classList.add('chosen-operator');
      }
    }
  });
});

equalsBtn.addEventListener('click', () => {
  if (firstNum !== false && operator && secondNum !== false) {
    if (operator === '/' && secondNum === 0) {
      alert(
        'Unable to divide by zero. Please input a different number to divide.'
      );
      return;
    }
    display.textContent =
      Math.round(operate(firstNum, operator, secondNum) * 1000000) / 1000000;
    displayValue = display.textContent;
  }
  firstNum = Number(displayValue);
  secondNum = false;
});

numInputArr.forEach((node) => {
  node.addEventListener('click', populateDisplay);
});

decimalPoint.addEventListener('click', (e) => {
  if (!displayValue.includes('.') || secondNum === false) {
    populateDisplay(e);
  }
});

function operate(num1, operator, num2) {
  if (operator === '+') return add(num1, num2);
  if (operator === '-') return subtract(num1, num2);
  if (operator === '*') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
}

function populateDisplay(e) {
  if (secondNum === false) {
    display.textContent = '0';
  }
  if (display.textContent === '0' && e.target.id !== 'decimal') {
    display.textContent = e.target.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
  displayValue = display.textContent;
  secondNum = Number(displayValue);
}

clearBtn.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = display.textContent;
  firstNum = false;
  secondNum = false;
  operator = false;
  for (let button of operations) button.classList.remove('chosen-operator');
});

deleteBtn.addEventListener('click', () => {
  if (secondNum !== false) {
    display.textContent = displayValue.slice(0, displayValue.length - 1);
    if (display.textContent.length < 1) display.textContent = '0';
    displayValue = display.textContent;
    secondNum = Number(displayValue);
  }
});

display.addEventListener('click', () => {
  alert("This isn't a button.");
});

const click = new MouseEvent('click');
document.addEventListener('keydown', (e) => {
  buttons.forEach((button) => {
    if (button.classList.contains(e.key)) button.dispatchEvent(click);
  });
});
