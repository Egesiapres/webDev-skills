console.log('------ 📟 %cData types', 'font-weight: bold');

// E1
console.log(
  'Declare a variable called "myName" and assign it your name. Print the variable on the console'
);

const myName = 'Umberto'; // string
console.log(myName);

// E2
console.log(
  'E2: Declare a variable called "myAge" and assign it your number of years. Print the variable on the console'
);

const myAge = 26; // number
console.log(myAge);

// E3
console.log(
  'E3: Declare a variable called "verified" and assign it the boolean value true. Print the variable on the console'
);

const verified = true; // boolean
console.log(verified);

// E4
console.log(
  'E4: Declare a variable called "numbers" and assign it an array containing an array of numbers. Print the array on the console'
);

const arrNumbers = [1, 2, 3, 4, 5]; // object (arrays and dates are types of object)
console.log(arrNumbers);

// E5
console.log(
  'E5: Declare a variable called "person" and assign it an object with the following properties: "name" (with your name) and "age" (with your number of years). Print the object on the console'
);

const myPerson = {
  name: myName,
  age: myAge,
}; // object
console.log(myPerson);

// E6
console.log(
  'Declare a variable called "null" and assign it the value null. Print the variable on the console'
);

const nullConst = null; // null
console.log(nullConst);

// E7
console.log(
  'E7: Perform an invalid mathematical operation, such as dividing a string by a number. Print the result on the console'
);

const invalid = 'test' / 8; // NaN
console.log(invalid);

// E8
console.log(
  'E8: Declare a variable called "symbol" and assign it a value of type Symbol. Print the variable on the console'
);
const symbol = Symbol(); // symbol
console.log(symbol);

// EXTRA
let undefinedLet; // undefined
console.log(undefinedLet);
