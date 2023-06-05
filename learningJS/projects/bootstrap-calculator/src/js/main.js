import '../scss/styles.scss';

const keypad = [
  {
    name: 'numbers',
    values: [
      {
        id: 'zero',
        value: '0',
      },
      {
        id: 'one',
        value: '1',
      },
      {
        id: 'two',
        value: '2',
      },
      {
        id: 'three',
        value: '3',
      },
      {
        id: 'four',
        value: '4',
      },
      {
        id: 'five',
        value: '5',
      },
      {
        id: 'six',
        value: '6',
      },
      {
        id: 'seven',
        value: '7',
      },
      {
        id: 'eight',
        value: '8',
      },
      {
        id: 'nine',
        value: '9',
      },
    ],
  },
  {
    name: 'operators',
    values: [
      {
        id: 'plus',
        value: '+',
      },
      {
        id: 'minus',
        value: '-',
      },
      {
        id: 'by',
        value: 'x',
      },
      {
        id: 'dividedBy',
        value: '/',
      },
      {
        id: 'equal',
        value: '=',
      },
    ],
  },
  {
    name: 'others',
    values: [
      {
        id: 'ac',
        value: '0',
      },
    ],
  },
];

const input = document.querySelector('input');

let inputValues = {
  firstNumber: null,
  operator: null,
  secondNumber: null,
};

const handleButton = ({ id, value }) => {
  const currentInputValue = input.value;
  const buttonValue = value;
  const buttonId = id;

  if (['0', '+', '-', 'x', '/'].includes(currentInputValue)) {
    
    input.value = buttonValue;

    inputValues.operator === null
      ? (inputValues.firstNumber = parseInt(buttonValue))
      : (inputValues.secondNumber = parseInt(buttonValue));
  
    } else if (buttonId === 'ac') {
  
    input.value = buttonValue;
    resetInputValues();

  } else if (['+', '-', 'x', '/'].includes(buttonValue)) {
    
    input.value = buttonValue;
    inputValues.operator = buttonValue;
  
  } else if (buttonValue !== '=') {
    
    input.value = currentInputValue + buttonValue;

    inputValues.operator === null
      ? (inputValues.firstNumber = parseInt(input.value))
      : (inputValues.secondNumber = parseInt(input.value));
  
    } else if (buttonValue === '=') {
    handleCalculate(inputValues);
  }
};

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

const resetInputValues = () => {
  inputValues = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
  };
};

const initializeKeypad = () => {
  keypad.forEach(({ values }) => {
    values.forEach(({ id, value }) => {
      const btn = document.getElementById(id);
      btn.addEventListener('click', () => handleButton({ id, value }));
    });
  });
};

initializeKeypad();
