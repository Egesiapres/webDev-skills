console.log('------ %c3: Numbers & operators 🔢', 'font-weight: bold');

// 1. Tipi di numeri
// interi
const intero = 34;
const secondoIntero = -34;
// float (con virgola)
const float1 = 25.3546383; // si può arrivare fino a 7 decimali post virgola
// double
const double = 25.9938928938; // più precisi, fino a 10 decimali post virgola
// binary
const binary = 0; // o 1
// octal
// esadecimali

// 2. js ce li identifica tutti come numeri
console.log(typeof intero);
console.log(typeof float1);
console.log(typeof double);
console.log(typeof binary);

// 3. Metodo toFixed()
// funzione e metodo sono la stessa cosa
// (funzione: al di fuori di una classe; metodo: all'intero di una classe)
// permette di scegliere fino a quale decimare restituire la print
const numero = 3.8736473465;

console.log(numero.toFixed(2));
console.log(numero.toFixed(4));

// 4. Metodo Number()
const number1 = '43'; //stringa
const number2 = '43' + 3; //stampa 433, viene fatta una concatenazione, diventa tutto una stringa

console.log(typeof number1);
console.log(number2);

// converte il numero da formato stringa in formato numero (toglie gli '')
console.log(Number(number1) + 3);

// 5. Operatori (classici, base)
// addizione +
const addizione = 3 + 4;
// sottrazione -
const sottrazione = 43 - 44;
// divisione /
const divisione = 40 / 5;
// resto % (utile per capire se un numero è pari o dispari)
const resto = 40 % 5;
// potenza **
// per ora tralasciata

console.log(addizione);
console.log(sottrazione);
console.log(divisione);
console.log(resto);

// 6. Precedenza degli operatori
// uguale a quella normale
// * e / prima, + e - dopo
const precedenza = 42 + 10 * 2 + 5;

// se voglio invece prima le addizioni uso le parentesi
const precedenza2 = (42 + 10) * (2 + 5);

console.log(precedenza);
console.log(precedenza2);

// 7. Operatori di incremento e decremento
let incremento = 10;
// ++ operatore di incremento
// deve essere scritto prima della print della variabile
incremento++; //aumenta di 1

let decremento = 5;
// operatore di decremento
decremento--;

console.log(incremento);
console.log(decremento);

// 8. Operatori di assegnazione
// = dichiarazione di una variabile
let number3 = 10;
let number4 = 4;

// += sommo direttamente alla variabile
// al posto di
// number3 = number3 + 5;
// posso fare
number3 += 5;

// -= (sottraggo direttamente alla variabile)
number4 -= 3;
// /=
// *=
// stessa cosa con gli altri sottrazione e tutti gli altri

console.log(number3);
console.log(number4);

// 9. Operatori di comparazione
// < > <= >=
// maggiore, minore, maggiore o uguale, minore o uguale
// la console stampa un boolean
let number5 = 10;

console.log(number5 < 11); // viene restituito true
console.log(number5 > 10); // false
console.log(number5 >= 10); // true
console.log(number5 <= 1); // false

// == !=
console.log(number5 == 10); // true
console.log(number5 != 10); // false
console.log(number5 == 11); // false
console.log(number5 != 12); // true

// === (e !==) vs == (e !=)
// (identico vs uguale)
let number6 = '6';
let number7 = 6;

console.log(number6 == 6); // il valore numerico è uguale ma il tipo di dato no (uno è una stringa, l'altro un numero)
// === verifica che sia uguale anche il tipo di dato (deve essere uguale anche il valore!!!)
// non è una sola verifica del tipo di dato
// stessa cosa per !==
console.log(number6 === 6); // false
console.log(number7 === 6); // true
console.log(number6 != 5); // true
console.log(number6 !== 5); // true
console.log(number7 !== 6); // false
