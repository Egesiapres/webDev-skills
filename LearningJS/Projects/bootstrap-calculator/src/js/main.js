import '../scss/styles.scss';

import * as bootstrap from 'bootstrap';

// ? elements
const form = document.querySelector('form');

const input = document.querySelector('input');

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('uno');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');

const acBtn = document.getElementById('ac');
const addBtn = document.getElementById('add');
const equalBtn = document.getElementById('equal');


// ? handlers

let newInput

const handleClick = n => {
  
  n === acBtn || input.value === '0'
    ? newInput = input.setAttribute('value', n.value)
    : newInput = input.setAttribute('value', input.value + n.value);

  return newInput
  
};

console.log(newInput);

const handleAdd = (n1, n2) => {
  input.setAttribute('value', n1.value + n2.value);
};

const handleCalculate = () => {
  if (input.include('+')) {
  }
};

// ? event listeners
form.addEventListener('click', e => e.preventDefault());

oneBtn.addEventListener('click', () => handleClick(oneBtn));
twoBtn.addEventListener('click', () => handleClick(twoBtn));
threeBtn.addEventListener('click', () => handleClick(threeBtn));

acBtn.addEventListener('click', () => handleClick(acBtn));
addBtn.addEventListener('click', () => handleClick(addBtn));
equalBtn.addEventListener('click', () => handleCalculate());
