console.log('------ %c9: Functions introduction 🦾', 'font-weight: bold');

// 1. Blocchi di codici riutilizzabili
// set di istruzioni ripetuto ogni volta che viene invocato
// function: keyword
// function body (contenuto delle {}): blocks
function cucinaPasta() {
  tirareFuoriPentola;
  mettereAcqua;
  lasciarBollire;
  mettereSale;
  metterePasta;
  fareSugo;
  mettereDentroPiatti;
}

// 2. Funzioni del browser string.replace(), array.join(), Math.random()

// anche questa è una funzione
// date insieme al browser
let u = 'Umberto';
let e = u.replace('Umberto', 'Emma');
console.log(e);

// 3. Funzioni e metodi
// !! METODI: funzioni di oggetti.
// sintassi: oggetto.metodo(). Es: console.log(), Math.random()
// !! FUNZIONI: al di fuori di oggetti e custom

// 4. Invocare una funzione
// metodo (predefinite)
u.replace('Umberto', 'Piero');
console.log(u);
// custom
function sayHello() {
  console.log('ciao');
}

sayHello(); // invocazione

// 5. Funzioni ANONIME
// no nome, chiamate in un altro modo
// molto usate in eventi e callback
// NO f anonima: dentro a const viene assegnata alla variabile
const helloBtn = document.getElementById('hello-btn');

helloBtn.onclick = function () {
  // SI f anonima
  alert('hello');
};

// AGGIUNTA
// FUNCTION EXPRESSIONS
const calculateArea = function (width, height) {
  let area = width * height;
  return area;
};

calculateArea(7, 8); // invocare una function expression
console.log(calculateArea(7, 8)); // Output: valore

// 6. SCOPE
// scope: accessibilità delle variabili
// GLOBAL SCOPE (v globali): fuori dal block (contenuto delle {})
let nameUmberto = 'Umberto';
let ageUmberto = 25;
// BLOCK SCOPE (v locali): dentro al block
function introduceUmberto() {
  let surnameUmberto = 'Pasinetti';
  console.log(`${nameUmberto} ${surnameUmberto} ha ${ageUmberto} anni`);
}

introduceUmberto();

console.log(nameUmberto);
// console.log(surnameUmberto);
// Output: cognome is not undefined (perché lo scope di cognome è prova())

// 7. Innestare funzioni
// 8. Parametri
// parametro: ciò che sta dentro le ()
// in questo caso name
// la f si aspetta in entrata OGNI VOLTA il parametro name
// name è come se fosse un segnaposto
// (non deve corrispondere necessariamente a qualcosa)
function hello(x) {
  console.log('hello', x);
}

hello(); // stampa undefined: non ho richiamato la funzione con il parametro
hello(e); // funzione richiamata correttamente con il parametro

function hiSurname() {
  let surnameUmberto = 'Pasinetti';
  let surnameEmma = 'Franchino';
  console.log('Hi', surnameUmberto);
  hello(surnameEmma); // funzioni innestate
  // ha il parametro in entrata
  // il parametro può essere solo locale
  // se prendo una variabile globale mi da errore ???
}

hiSurname(); // non parametro perché la f ciao() non ce l'ha
// ciao(surname); // error

// concatenazione di funzioni serve molto nelle tabelle
// esempio di innesto
function generateTable() {
  generateHeader();
  generateRows();
  generateFooter();
  console.log('Table generated');
}

function generateHeader() {
  console.log('Header generated');
}

function generateRows() {
  console.log('Righe generate');
}

function generateFooter() {
  console.log('Footer generated');
}

generateTable();

// AGGIUNTA
// ARROW FUNCTIONS
// rimuovo la keyword function
// inserisco direttamente la condizione () seguita da => e da ciò che eseguo {}
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

// CONCISE BODY ARROW FUNCTIONS
// sintassi basata sul numero di parametri
const functionZeroParam = () => {}; // no, 0 parametri
const functionOneParam = paramOne => {}; // 1 parametro (no ())
const functionTwoParam = (paramOne, paramTwo) => {}; // >= 2 parametri
// sintassi basata sul numero di linee
const sumNumbers = number => number + number; // 1 linea (evito le {} e l'uso del return) (automatico)
const subtractNumbers = number => {
  // linee multiple (uso sia {} che il return)
  let subtraction = number - number;
  return number;
};

// single line es 2
const plantNeedsWater = day => (day === 'Wednesday' ? true : false);
