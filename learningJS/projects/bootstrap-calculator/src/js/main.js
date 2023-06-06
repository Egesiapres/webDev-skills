import '../scss/styles.scss';

const keypad = [
  {
    name: 'numbers',
    values: [
      { id: 'zero', value: '0' },
      { id: 'one', value: '1' },
      { id: 'two', value: '2' },
      { id: 'three', value: '3' },
      { id: 'four', value: '4' },
      { id: 'five', value: '5' },
      { id: 'six', value: '6' },
      { id: 'seven', value: '7' },
      { id: 'eight', value: '8' },
      { id: 'nine', value: '9' },
    ],
  },
  {
    name: 'operators',
    values: [
      { id: 'plus', value: '+' },
      { id: 'minus', value: '-' },
      { id: 'mul', value: 'x' },
      { id: 'div', value: '/' },
      { id: 'equal', value: '=' },
    ],
  },
  {
    name: 'misc',
    values: [
      { id: 'cancel', value: 'C' },
      { id: 'percent', value: '%' },
      { id: 'negate', value: '+/-' },
      { id: 'comma', value: '.' },
    ],
  },
];

const input = document.querySelector('input');

let inputValues = {
  firstNumber: null,
  operator: null,
  secondNumber: null,
};

const setInputValues = (inputValues, value) => {
  if (inputValues.operator === null) {
    inputValues.firstNumber = parseInt(value);
  } else {
    inputValues.secondNumber = parseInt(value);
  }
};

const resetInputValues = () => {
  inputValues = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
  };
};

const isNumber = value => keypad[0].values.map(el => el.value).includes(value);

const isFirstNumber = ({ firstNumber }) => firstNumber;
const isNotSecondNumber = ({ operator, secondNumber }) =>
  operator && !secondNumber;

const canCalculate = ({ operator, secondNumber }) =>
  isFirstNumber && operator && secondNumber;

const handleCalculate = ({ firstNumber, operator, secondNumber }) => {
  let calcResult;

  switch (operator) {
    case '+':
      calcResult = firstNumber + secondNumber;
      break;
    case '-':
      calcResult = firstNumber - secondNumber;
      break;
    case 'x':
      calcResult = firstNumber * secondNumber;
      break;
    case '/':
      calcResult = firstNumber / secondNumber;
      break;

    default:
      null;
      break;
  }

  inputValues = {
    firstNumber: calcResult,
    operator: null,
    secondNumber: null,
  };

  input.value = calcResult;
};

const handleKeypad = ({ value }) => {
  const buttonValue = value;

  console.log(input.value);

  if (
    (input.value === '0' && isNumber(buttonValue)) ||
    (isNotSecondNumber(inputValues) && isNumber(buttonValue))
  ) {
    // values to change with the button values
    input.value = buttonValue;

    setInputValues(inputValues, input.value);
  } else if (buttonValue === 'C') {
    // C button behaviour
    input.value = 0;

    resetInputValues();
  } else if (buttonValue === '+/-') {
    // +/- button behaviour
    if (isFirstNumber(inputValues)) {
      input.value = -input.value;
      setInputValues(inputValues, input.value);
    }
  } else if (buttonValue === '%') {
    // % button behaviour
    if (isFirstNumber(inputValues)) {
      input.value === buttonValue;
      inputValues.operator = '/';
      inputValues.secondNumber = 100;

      handleCalculate(inputValues);
    }
  } else if (['+', '-', 'x', '/'].includes(buttonValue)) {
    // +, -, x, / buttons behaviour
    if (canCalculate(inputValues)) {
      handleCalculate(inputValues);
    }

    inputValues.operator = buttonValue;
  } else if (buttonValue === '=') {
    // = button behaviour
    canCalculate(inputValues) && handleCalculate(inputValues);
  } else {
    // numbers with more than one numeral
    if (input.value.includes('.')) {
      if (isNumber(buttonValue)) {
        input.value += buttonValue;

        const commaIndex = input.value.indexOf('.');
        const entire = input.value.slice(0, commaIndex);
        const decimal = input.value.slice(commaIndex + 1);
      }
    } else {
      input.value += buttonValue;
      setInputValues(inputValues, input.value);
    }
  }

  console.log(inputValues);
};

const initializeKeypad = () => {
  keypad.forEach(({ values }) => {
    values.forEach(({ id, value }) => {
      const btn = document.getElementById(id);
      btn.addEventListener('click', () => handleKeypad({ value }));
    });
  });
};

initializeKeypad();
