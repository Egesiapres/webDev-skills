console.log('');
console.log('%cASYNC & JSON', 'font-weight: bold; color: aquamarine');
console.log('------ %c1: Callback ⏱️', 'font-weight: bold');

// ! array methods use callbacks

// E1
console.log('E1: define a function that accepts a callback and calls it back');

const sayGoodbye = callback => callback();

const callbackSayGoodbye = () => console.log('Goodbye my lover!!!');

sayGoodbye(callbackSayGoodbye);

// E2
console.log(
  'E2: define a function that accepts a value and a callback, and calls the callback by passing the value as an argument'
);

const buyCar = (carModel, callback) => callback(carModel);

const callbackBuyCar = carModel => console.log(`I wanna buy a ${carModel}`);

buyCar('Ferrari 458', callbackBuyCar);

// E3
console.log(
  'E3: simulate an asynchronous call using a setTimeout and callback'
);

const fakeAsyncCall = callback =>
  setTimeout(() => callback([1, 2, 3, 4]), 5000);

const callbackFetchData = data => console.log('Data:', data);

fakeAsyncCall(callbackFetchData);

// E4
console.log(
  'E4: define a function that accepts an array and a callback, and invokes the callback for each element in the array'
);

const printNumber = (arr, callback) => arr.forEach(el => callback(el));

const callbackPrintNumber = arrEl =>
  console.log(`The number printed is ${arrEl}`);

const numbersArr = [5, 4, 3, 2, 1];
printNumber(numbersArr, callbackPrintNumber);

numbersArr.reverse().forEach(el => console.log(el));

// numbersArr.sort((a, b) => 0.5 - Math.random());
// console.log(numbersArr);

// E5
console.log('E5: use a callback to sort an array of objects');

const sortArray = (arr, callback) => callback(arr);

const callbackSortArrPerName = array =>
  console.log(
    array.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
  );

const callbackSortArrPerYearsInSpain = array =>
  console.log(array.sort((a, b) => a.yearsInSpain - b.yearsInSpain));

const objArr = [
  { name: 'Umberto', surname: 'Pasinetti', yearsInSpain: 1 },
  { name: 'Emma', surname: 'Franchino', yearsInSpain: 1 },
  { name: 'Nabil', surname: 'Bouchnak', yearsInSpain: 2 },
  { name: 'Livia', surname: 'Neri', yearsInSpain: 0.5 },
];

sortArray(objArr, callbackSortArrPerName);

sortArray(objArr, callbackSortArrPerYearsInSpain);

// E6
console.log('E6: use a callback to filter the elements of an array');

const filterArrNumbers = (arr, callback) => callback(arr);

const callbackFilterArrNumbers1 = array =>
  console.log(array.filter(el => el > 5));

const numbersArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filterArrNumbers(numbersArr1, callbackFilterArrNumbers1);

// or
const callbackFilterArrNumbers2 = number => number % 2 !== 0;

const oddNumbers = numbersArr1.filter(callbackFilterArrNumbers2);
console.log(oddNumbers);

// E7
console.log(
  'E7: use a callback to calculate the sum of the elements of an array'
);

const numbersArr2 = [1, 2, 3, 4, 5];

const callbackSumArrNumbers = (number1, number2) => number1 + number2;

const sumArrNumbers = numbersArr2.reduce(callbackSumArrNumbers);
console.log(sumArrNumbers);

// E8
console.log('E8: use a callback to map elements of an array to new values');

const namesArr = ['Umberto', 'Emma'];

const callbackGetFirstLetter = name => name[0];

const firstLettersArr = namesArr.map(callbackGetFirstLetter);
console.log(firstLettersArr);

// E9
console.log(
  'E9: use a callback to perform an action on each character in a string'
);

const nameString = 'umberto PASINETTI';

const invertStringCaps = (str, callback) => callback(str);

const callbackInvertCaps = nameStr => {
  for (let i = 0; i < nameStr.length; i++) {
    if (nameStr[i] === nameStr[i].toLowerCase()) {
      console.log(nameStr[i].toUpperCase());
    } else {
      console.log(nameStr[i].toLowerCase());
    }
  }
};

invertStringCaps(nameString, callbackInvertCaps);

// E10
console.log(
  'E10: use a callback to simulate error handling in a fake asynchronous call'
);

const fakeAsyncCall2 = (status, callback) => callback(status);

const callbackManageError = status => {
  setTimeout(() => {
    if (status === 'success') {
      console.log('Successfull call :) !!!');
    }

    if (status === 'pending') {
      console.log('Pending call...');
    }

    if (status === 'error') {
      console.log('Failed call :( !!!');
    }
  }, 5000);
};

fakeAsyncCall2('error', callbackManageError);
