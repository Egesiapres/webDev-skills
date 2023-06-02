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

const handleCalculate = (operators, numbers) => {
  let calcResult;

  switch (operators) {
    case operators.includes('+'):
      calcResult = numbers.reduce((total, amount) => total + amount);
      break;
    case operators.includes('-'):
      calcResult = numbers.reduce((total, amount) => total - amount);
      break;
    case operators.includes('x'):
      calcResult = numbers.reduce((total, amount) => total * amount);
      break;
    case operators.includes('/'):
      calcResult = numbers.reduce((total, amount) => total / amount);
      break;

    default:
      null;
      break;
  }

  return calcResult;
};

const numbers = [
  {
    name: 'zero',
    value: '0',
  },
  {
    name: 'one',
    value: '1',
  },
  {
    name: 'two',
    value: '2',
  },
  {
    name: 'three',
    value: '3',
  },
  {
    name: 'four',
    value: '4',
  },
  {
    name: 'five',
    value: '5',
  },
  {
    name: 'six',
    value: '6',
  },
  {
    name: 'seven',
    value: '7',
  },
  {
    name: 'eight',
    value: '8',
  },
  {
    name: 'nine',
    value: '9',
  },
];

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

const handleRetrieveNumbers = (oi, dv) => {
  parseInt(dv.slice(oi - 1, oi));
};

const handlePrintResult = () => {
  let inputValues = input.value.split('');
  let _operators = operators.map(op => op.value);
  let inputOperators = [];
  let inputNumbers = [];
  let inputOperatorsIndexes = [];
  let result;

  // array vs array
  let match = inputValues.filter(el => _operators.includes(el));

  if (match.length > 0) {
    inputOperators = match;

    console.log(inputValues);
    console.log(inputOperators);

    match.forEach(m => {
      inputOperatorsIndexes = [
        ...inputOperatorsIndexes,
        inputValues.indexOf(m),
      ];
    });
    console.log(inputOperatorsIndexes);

    inputOperatorsIndexes.forEach(oi => {
      // inputValues = inputValues.join('');

      inputNumbers = [
        ...inputNumbers,
        parseInt(inputValues.slice(oi - 1, oi)),
        parseInt(inputValues.slice(oi + 1)),
      ];
      console.log(inputNumbers);

      if (oi !== 0) {
        result = handleCalculate(inputOperators, inputNumbers);
        input.setAttribute('value', result);
      }
    });
  }
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
