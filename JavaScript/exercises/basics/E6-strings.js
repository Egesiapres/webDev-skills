console.log('------ %c6: Strings 🪡', 'font-weight: bold');

// E1
console.log(
  'E1: Write a program that takes a string as input and prints its length on the console'
);

const stringLength = string => {
  console.log(`The length of the string '${string}' is: `, string.length);
};

stringLength('hi sir');

// E2
console.log(
  'E2: Write a program that takes two strings, concatenates them, and prints the result on the console'
);

const string1 = 'Goodnight';
const string2 = 'mum';

const concatString = (str1, str2) => {
  console.log(str1 + ' ' + str2);
};

concatString(string1, string2);

// E3
console.log(
  'E3: write a program that compares two strings and prints out on the console whether they are the same or different in two separate `console.log`'
);

const bear = 'bear';
const bird = 'bird';
const anotherBear = 'bear';

const checkStringsEquality = (str1, str2) => {
  str1 === str2
    ? console.log(
        `The first string, '${str1}' is equal to the second one, '${str2}'`
      )
    : console.log(
        `The first string, '${str1}' is different to the second one, '${str2}'`
      );
};

checkStringsEquality(bear, bird);
checkStringsEquality(bear, anotherBear);

// oppure
console.log('The strings are equal:', bear === bird);
console.log('The strings are different: ', bear !== bird);

// E4
console.log(
  'E4: Write a program that takes a numeric string and converts it to a number, printing the result in the console'
);

const numberString = '35';

const strToNum = string => {
  if (typeof string === 'string') {
    const number = parseInt(string);

    console.log(
      `Converting a string into a number, I will obtain`,
      number,
      'which is a',
      typeof number
    );
  } else {
    console.log("The datatype inputted isn't a string");
  }
};

strToNum(numberString);

const strToNum2 = string => {
  const number = Number(string);
  console.log(typeof number);
};

strToNum2(numberString);

// E5
console.log(
  'E5: Write a program that takes a string and a substring, uses the includes() method to check if the substring is present in the string, and prints the result on the console'
);

const mainString = 'bacon';
const subString = 'ba';
const anotherSubString = 'cheese';

const checkSubstring = (str1, str2) => {
  if (str1.includes(str2)) {
    console.log(`The string '${str1}' includes the substring '${str2}'`);
  } else {
    console.log(
      `The string '${str2}' does not include the substring '${str2}'`
    );
  }
};

checkSubstring(mainString, subString);
checkSubstring(mainString, anotherSubString);

// E6
console.log(
  'E6: Write a program that takes a string and using the slice() method extracts a part of the string based on the start and end indices and prints the result on the console'
);

const compositeWord = 'Cassapanca';
const selectedWord = compositeWord.slice(5, 10);

console.log('The word obtained from the main string is:', selectedWord);

// E7
console.log(
  'E7: Write a program that takes a string, converts it to uppercase, and prints the result on the console'
);

const horse = 'horse';
const uppercaseHorse = horse.toUpperCase();

console.log('The word in uppercase is:', uppercaseHorse);

// E8
console.log(
  'E8: Write a program that takes an uppercase string, converts it to lowercase, and prints the result on the console'
);

const pig = 'PIG';
const lowercasePig = pig.toLowerCase();

console.log('The word in lowercase is:', lowercasePig);

// E9
console.log('E9: Write a program that takes a string, a substring to search and a substring to replace, using the replace() method and prints the result on the console');

const exclamation = 'Zio pera';
const wordSearched = 'pera';
const newWord = 'cane';
const newExclamation = exclamation.replace(wordSearched, newWord);

console.log('The new exclamation is:', newExclamation);

// E10
console.log('E10: Write a program that takes a string, divides it into an array of substrings, and prints the result on the console');

const joinedGreeting = 'Hi,-I\'m-Umberto';

const arrGreeting = joinedGreeting.split('-');

console.log('The phrase splitted into an array becomes:', arrGreeting);
console.log(arrGreeting.join(' '));

// E11
console.log('E11: Write a program that takes a string as input, removes leading and trailing spaces, then prints the result on the console');

const phraseWithSpaces = '   There are too many spacess! ';
const phraseWithoutSpaces = phraseWithSpaces.trim();

console.log('The phrase without spaces is:', phraseWithoutSpaces);
