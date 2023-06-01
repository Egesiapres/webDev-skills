import '../scss/styles.scss';

import * as bootstrap from 'bootstrap';

// ? elements
const form = document.querySelector('form');
const input = document.querySelector('input');

const acBtn = document.getElementById('ac');

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const mulBtn = document.getElementById('mul');
const divBtn = document.getElementById('div');

const equalBtn = document.getElementById('equal');

// ! handlers
const handleClick = buttonNumber => {
  let newInput;

  buttonNumber === acBtn || input.value === '0'
    ? (newInput = input.setAttribute('value', buttonNumber.value))
    : (newInput = input.setAttribute(
        'value',
        input.value + buttonNumber.value
      ));

  return newInput;
};

const handleCalculate = (opSymbol, n1, n2) => {
  let calcResult;

  switch (opSymbol) {
    case '+':
      calcResult = n1 + n2;
      break;
    case '-':
      calcResult = n1 - n2;
      break;
    case 'x':
      calcResult = n1 * n2;
      break;
    case '/':
      calcResult = n1 / n2;
      break;

    default:
      null;
      break;
  }

  return calcResult;
};

const operators = [
  {
    name: 'plus',
    value: '+',
  },
  {
    name: 'minus',
    value: '-',
  },
  {
    name: 'by',
    value: 'x',
  },
  {
    name: 'dividedBy',
    value: '/',
  },
];

const handlePrintResult = () => {
  let operatorIndex;
  let n1;
  let n2;
  let result;

  operators.forEach(op => console.log(input.value.includes(op.value)));

  operators.forEach(op => {
    let display = input.value;

    if (display.includes(op.value)) {
      operatorIndex = display.indexOf(op.value);

      if (operatorIndex !== 0) {
        n1 = parseInt(display.slice(0, operatorIndex));
        n2 = parseInt(display.slice(operatorIndex + 1));
        result = handleCalculate(op.value, n1, n2);

        input.setAttribute('value', result);
      }
    }
  });
};

// ! event listeners
form.addEventListener('click', e => e.preventDefault());

input.addEventListener('click', () => console.log(input.value));

acBtn.addEventListener('click', () => handleClick(acBtn));

zeroBtn.addEventListener('click', () => handleClick(zeroBtn));
oneBtn.addEventListener('click', () => handleClick(oneBtn));
twoBtn.addEventListener('click', () => handleClick(twoBtn));
threeBtn.addEventListener('click', () => handleClick(threeBtn));
fourBtn.addEventListener('click', () => handleClick(fourBtn));
fiveBtn.addEventListener('click', () => handleClick(fiveBtn));
sixBtn.addEventListener('click', () => handleClick(sixBtn));
sevenBtn.addEventListener('click', () => handleClick(sevenBtn));
eightBtn.addEventListener('click', () => handleClick(eightBtn));
nineBtn.addEventListener('click', () => handleClick(nineBtn));

addBtn.addEventListener('click', () => handleClick(addBtn));
subBtn.addEventListener('click', () => handleClick(subBtn));
mulBtn.addEventListener('click', () => handleClick(mulBtn));
divBtn.addEventListener('click', () => handleClick(divBtn));

equalBtn.addEventListener('click', () => handlePrintResult());

// 1. controlla quali operatori ci sono
// 1.1 esisono singolarmente o più di uno?
// 1.2 singolarmente logica base, più di uno punto 2

// 2. esistono * o / ?
// 3. se si esegui, in ordine, prima i * e i /, altrimenti, in ordine, + e -
