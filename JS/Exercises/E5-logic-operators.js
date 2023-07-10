console.log('------ %c5: Logic operators ？', 'font-weight: bold');

// E1
console.log(
  'E1: Print on the console the result of evaluating two conditions of your choice using the AND operator'
);

condition1 = 'Umberto';
condition2 = 26;

console.log(
  `Are condition1 and condition2 respected?`,
  condition1 === 'Umberto' && typeof condition2 === 'number'
);

// E2
console.log(
  'E2: Print on the console the result of evaluating two conditions of your choice using the OR operator'
);

console.log(
  `Is condition1 or condition2 respected?`,
  condition1 === 'Umberto' || typeof condition2 === 'string'
);

// E3
console.log(
  'E3: Print on the console the result of negating a condition of your choice using the NOT operator'
);

console.log(`Is condition2 not a number?`, typeof condition2 !== 'number');

// E4
console.log(
  'E4: Given two constants evaluate whether value1 is greater than 0 and value2 is less than 20, or whether value1 is equal to 5'
);

first = 5;
second = 30;

console.log(
  'Complex expression result:',
  (first > 0 && second < 20) || first === 5
);

// E5
console.log(
  'E5: Given two strings evaluate whether string1 is not empty and string2 is not the word "train"'
);

first = '';
second = 'car';

console.log(
  'Another complex expression result:',
  first.length > 0 && second !== 'train'
);

// E6
console.log(
  'E6: Given three numbers evaluate whether: value1 is greater than zero or value2 is less than twenty. These conditions must occur together with value3 between 10 and 20'
);

first = 3;
second = 64;
const third = 33;

console.log(
  'Last complex expression result:',
  (first > 0 || second < 20) && third >= 10 && third <= 20
);
