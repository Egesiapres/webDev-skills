console.log('------ %c10: Custom functions ⏎', 'font-weight: bold');

// 1. Crea una funzione basica custom
const input = document.querySelector('input');
const helloBtn2 = document.getElementById('hello-btn-2');
const h1 = document.querySelector('h1');

// io
const b = document.getElementById('b');

// 4. Parametri di DEFAULT: ciò che viene preso quando invoco la f senza inserire uno argomento specifico
function hiInput(input = 'stranger') {
  console.log(`Hello, ${input}!`);
}

hiInput('Nick'); // Output: Hello, Nick!
hiInput(); // Output: Hello, stranger!

// se metto solo x come parametro (senza ="") non va perché non l'ho definito
function sayHelloDefParam(
  x = "Ti stampo il parametro di default. O non hai messo un parametro nella funzione (sayHello()), o l'hai inserito non correttamente"
) {
  h1.innerHTML = `Ciao ${x}`; // .innerHTML cambia il contenuto (qui di h1)
}

// io
function prova(nome = 'Persona generica') {
  console.log(`${nome} sta eseguendo una prova`);
}

// prova();
prova('Umberto');

// 2. Usarla nel codice
// 3. Inserire dei parametri
// devo aggiungere il listener sul bottone
// .value prende il valore specifico
helloBtn2.addEventListener('click', () => {
  sayHelloDefParam(input.value);
});

// io
b.addEventListener('click', () => {
  prova(input.value);
});

// AGGIUNTA
// PARAMETRO: ciò che sta dentro alle () nella definizione di una f. Agisce da segnaposto
function sayThanks(input) {
  console.log(
    'Thank you for your purchase ' + input + '! We appreciate your business.'
  );
}
// ARGOMENTO: ciò che sta dentro alle () nell'invocazione di una funzione. Valore vero e proprio che viene passato alla f

sayThanks('Cole');

// HIGH-ORDER f
// accettano altre funzioni come argomento, restituiscono f come output (anche entrambi)
// permettono l'astrazione

// riassegnazione della f in una variabile f più leggibile
// f trattate come ogni altro tipo di dato
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// checkThatTwoPlusTwoEqualsFourAMillionTimes è richiamato SENZA ()
// vogliamo assegnare il VALORE DELLA FUNZIONE STESSA
// NON SOLO il valore RITORNATO QUANDO INVOCATA
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();

// funzione: FIRST CLASS OBJECT
// (può avere proprietà e metodi: .name, .toString(), .length...)
// se non mi ricordo più il nome della funzione originale:
console.log(isTwoPlusTwo.name);

// CALLBACK F: f che vengono passate come PARAMETRI
// (durante l'esecuzione di una high-order f)
// callback f passate senza (): dobbiamo passare la funzione stessa
// altrimenti sarebbe passato il parametro che viene ritornato dall'esecuzione della f
// le f anonime possono essere degli argomenti
const addTwo = num => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);

  if (checkA === checkB) {
    return func(val);
  } else {
    return 'inconsistent results';
  }
};

console.log(checkConsistentOutput(addTwo, 7));

// ITERATORS (.forEach(), .map(), .filter())
// (vedi methods)
// array built-in iteration methods (instead of using loops)
// they are high-order f because THE ARGUMENT IS A CB F
// types of cb f: pre-defined f, f expression, or an arrow f

// .forEach()
// used to execute the same code on every element in an array but DOES NOT CHANGE THE ARRAY
// AND RETURNS UNDEFINED
// the argument is a callback f. Three ways to recall it
// SYNTAX 1
// the cb f is executed for each array element
// each element is passed as an argument to the cb f
/*
groceries.forEach(function (groceryItem) {
  console.log(' - ' + groceryItem);
});
*/
// SYNTAX 2 (better)
// cb f can be passed also as an arrow f
// groceries.forEach(groceryItem => console.log(' - ' + groceryItem));
// SYNTAX 3
// define a f beforehand to be used as the cb f
/*
function printGrocery(element) {
  console.log(element);
}

groceries.forEach(printGrocery);
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// .map()
// takes an argument of a cb, returns a new array
// SIMILAR to .forEach(), BUT RETURNS A NEW ARRAY (with the updated elements)
// (elements in the original array are not modified)
let animals = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
let smallNumbers = bigNumbers.map(bigNumber => bigNumber / 100); // Create the smallNumbers array below
console.log(smallNumbers);

// .filter()
// (like .map()) returns a new array
// BUT after FILTERING OUT certain elements
// filter()'s cb f return a T/F value
// T values (that satisfies the condition) are stored in the new array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
smallNumbers = randomNumbers.filter(randomNumber => randomNumber < 250);

const favoriteWords = [
  'nostalgia',
  'hyperbole',
  'fervent',
  'esoteric',
  'serene',
];
const longFavoriteWords = favoriteWords.filter(
  favoriteWord => favoriteWord.length > 7
);

console.log(smallNumbers);
console.log(longFavoriteWords);

// .findIndex()
// used to find the location of an element (into an array)
// returns the index ONLY of the first element T, that satisfies the condition in the cb
// Output: -1: NO element in the array that satisfies the condition
animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(foundAnimal);
console.log(startsWithS);

// .reduce()
// returns a SINGLE VALUE
// 1 arg: cb f (anonymous f) with accumulator and currentValue as parameters
// accumulator: 10, currentValue: 1, return: 11; a: 11, cV: 3, r:14
// 2 arg: number
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// .some(), .every()
// Output: true or false
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(
  words.some(word => {
    return word.length < 6;
  })
);

const interestingWords = words.filter(word => word.length > 5);
console.log(
  interestingWords.every(word => {
    return interestingWords;
  })
);

const citiesArr = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

// "REAL LIFE" use case
//  Choose a method that will return undefined
citiesArr.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
const longCities = citiesArr.filter(city => city.length > 7);
// Choose a method that will return a single value
const word = citiesArr.reduce((acc, currVal) => {
  return acc + currVal[0];
}, 'C');
console.log(word);
// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
// Choose a method that will return a boolean value
nums.every(num => num < 0);
