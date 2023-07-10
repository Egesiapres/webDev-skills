console.log('------ %c4: Comparation operators 🟰', 'font-weight: bold');

// E1
console.log(
  'E1: Print on the console the result of comparing two numbers to see if the first number is greater than the second'
);

let first = 1;
let second = 2;

console.log(`Is ${first} greater than ${second}?`, first > second);

// E2
console.log(
  'E2: Print on the console the result of comparing two strings to see if the first string comes before the second in alphabetical order'
);

first = 'Umberto';
second = 'Emma';

console.log(
  `Does ${first} came alphabetically before ${second}?`,
  first < second
);

// E3
console.log(
  'E3: Print on the console the result of comparing a number and a string to see if they are the same'
);

first = 10;
second = '10';

// !! == loose equality - checks just the value
console.log(`Are ${first} and ${second} equal in value?`, first == second);

// E4
console.log(
  'E4: Print on the console the result of comparing a number and a string to see if they are equal in both value and type'
);

// !! === strinct equality - checks the value and the data type
console.log(
  `Are ${first} and ${second} equal in value and data type?`,
  first === second
);

// E5
console.log(
  'E5: Print the result of comparing a number and a string on the console to see if they are different'
);

console.log(`Are ${first} and ${second} different in value?`, first != second);

// E6
console.log(
  'E6: Print on the console the result of comparing a number and a string to see if they are different in both value and type'
);

// first = 3;
// second = parseInt('10');

console.log(
  `Are ${first} and ${second} different in value and data type?`,
  first !== second
);

// E7
console.log(
  'E7: Print on the console the result of comparing two numbers to see if the first number is less-equal than the second'
);

first = 35;
second = 97;

console.log(`Is ${first} less-equal than ${second}?`, first <= second);

// E8
console.log(
  'E8: Print on the console the result of comparing two numbers to see if the first number is different from the second'
);

console.log(`Is ${first} different from ${second}?`, first != second);
