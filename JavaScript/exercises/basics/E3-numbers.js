console.log('------ %c3: Numbers 💯', 'font-weight: bold');

// E1
console.log(
  'E1: Sum of numbers: calculate the sum of two numbers and print the result on the console'
);

const sum = (n1, n2) => {
  return n1 + n2;
};

let number1 = 5;
let number2 = 6;

console.log(`The sum of ${number1} and ${number2} is`, sum(number1, number2));

// E2
console.log(
  'E2: Subtraction of numbers: calculate the difference between two numbers and print the result on the console'
);

const difference = (n1, n2) => {
  return n1 - n2;
};

number1 = 11;
number2 = 7;

console.log(
  `The difference between ${number1} and ${number2} is`,
  difference(number1, number2)
);

// E3
console.log(
  'E3: Multiplication of numbers: calculate the product between two numbers and print the result on the console'
);

const product = (n1, n2) => {
  return n1 * n2;
};

number1 = 4;
number2 = 8;

console.log(
  `The product of ${number1} by ${number2} is`,
  product(number1, number2)
);

// E4
console.log(
  'E4: Division of numbers: calculate the result of division between two numbers and print the result on the console'
);

const quotient = (n1, n2) => {
  return n1 / n2;
};

number1 = 88;
number2 = 11;

console.log(
  `The quotient of ${number1} divided by ${number2} is`,
  quotient(number1, number2)
);

// E5
console.log(
  'E5: Rest of division: calulate the rest of the division between two numbers and print the result on the console'
);

const rest = (n1, n2) => {
  return n1 % n2;
};

number1 = 88;
number2 = 11;

console.log(
  `The rest of ${number1} divided by ${number2} is`,
  rest(number1, number2)
);

// E6
console.log(
  'E6: Increment by a number: increment a number by 1 and print the result on the console'
);

number1++;

console.log('The incremented number is', number1);

// E7
console.log(
  'E7: Decrease a number: decrease a number by 1 and print the result on the console.'
);

number2--;

console.log('The decreased number is', number2);

// E8
console.log(
  'E8: Power calculation: calculate the power of a number raised to a predefined power and print the result on the console'
);

number1 = 4;
number2 = 5;

console.log(
  `The power of ${number1} by ${number2} is`,
  Math.pow(number1, number2)
);

// E9
console.log(
  'E9: Square root calculation: calculate the square root of a number and print the result on the console'
);

number1 = 36;

console.log(`The square root of ${number1} is`, Math.sqrt(number1));

// E10
console.log(
  'E10: Rounding a Number: write a program that rounds a decimal number and prints the result on the console.'
);

number1 = 36.4;

console.log(`The number ${number1} rounded to ceil is`, Math.ceil(number1));

console.log(`The number ${number1} rounded to floor is`, Math.floor(number1));

console.log(`The number ${number1} rounded is`, Math.round(number1)); // round considering the decimal

// E11
console.log(
  'E11: Generating a random number: write a program that generates a random number between a minimum and maximum value and prints it on the console'
);

const min = 10;
const max = 40;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`The random number between ${min} and ${max} is`, randomNumber);

// E12
console.log(
  'E12: String-to-number conversion: write a program that converts a string containing a number to a real number and prints the result on the console'
);

const string = '234';

const stringToNumber = Number(string);
const stringToNumber1 = parseInt(string);

console.log(stringToNumber);
console.log(stringToNumber1);
