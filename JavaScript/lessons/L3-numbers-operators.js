console.log('------ %c3: Numbers & operators 🔢', 'font-weight: bold');

// 1. Tipi di numeri
// interi
let integer = 34;
integer = -34;
// float (con virgola)
const float = 25.3546383; // si può arrivare fino a 7 decimali post virgola
// double
const double = 25.9938928938; // più precisi, fino a 10 decimali post virgola
// binary
const binary = 0; // o 1
// octal
// esadecimali

// 2. js ce li identifica // !! tutti come numeri
console.log('The data type of the integer', integer, `is: ${typeof integer}`);
console.log('The data type of the float', float, `is: ${typeof float}`);
console.log('The data type of the double', double, `is: ${typeof double}`);
console.log('The data type of the binary', binary, `is: ${typeof binary}`);

// 3. Metodo toFixed()
// funzione e metodo sono la stessa cosa
// !! FUNZIONE: al di fuori di una classe
// !! METODO: all'intero di una classe
// permette di scegliere fino a quale decimare restituire la print
const numero = 3.8736473465;

console.log(numero.toFixed(2));
console.log(numero.toFixed(4));

// 4. Metodo Number()
const n1 = '43'; // stringa
const n2 = '43' + 3; // stampa 433, viene fatta una concatenazione, diventa tutto una stringa

console.log(typeof n1);
console.log(n2);

// converte il numero da formato stringa in formato numero (toglie gli '')
console.log(Number(n1) + 3);

// 5. Operatori (classici, base)
// addizione +
const sum = 3 + 4;
// sottrazione -
const diff = 43 - 44;
// divisione /
const quot = 40 / 5;
// resto % (utile per capire se un numero è pari o dispari)
const rest = 40 % 5;
// potenza **
// per ora tralasciata

console.log(sum);
console.log(diff);
console.log(quot);
console.log(rest);

// 6. Precedenza degli operatori
// uguale a quella normale
// * e / prima, + e - dopo
const order = 42 + 10 * 2 + 5;

// se voglio invece prima le addizioni uso le parentesi
const order2 = (42 + 10) * (2 + 5);

console.log(order);
console.log(order2);

// 7. Operatori di incremento e decremento
let increment = 10;
// ++ operatore di incremento
// deve essere scritto prima della print della variabile
increment++; //aumenta di 1

let decrease = 5;
// operatore di decremento
decrease--;

console.log(increment);
console.log(decrease);

// 8. Operatori di assegnazione
// = dichiarazione di una variabile
let n3 = 10;
let n4 = 4;

// += sommo direttamente alla variabile
// al posto di
// n3 = n3 + 5;
// posso fare
n3 += 5;

// -= (sottraggo direttamente alla variabile)
n4 -= 3;
// /=
// *=
// stessa cosa con gli altri sottrazione e tutti gli altri

console.log(n3);
console.log(n4);

// 9. Operatori di comparazione
// < > <= >=
// maggiore, minore, maggiore o uguale, minore o uguale
// la console stampa un boolean
let n5 = 10;

console.log(n5 < 11); // viene restituito true
console.log(n5 > 10); // false
console.log(n5 >= 10); // true
console.log(n5 <= 1); // false

// == !=
console.log(n5 == 10); // true
console.log(n5 != 10); // false
console.log(n5 == 11); // false
console.log(n5 != 12); // true

// === (e !==) vs == (e !=)
// (identico vs uguale)
let n6 = '6';
let n7 = 6;

console.log(n6 == 6); // il valore numerico è uguale ma il tipo di dato no (uno è una stringa, l'altro un numero)
// === verifica che sia uguale anche il tipo di dato (deve essere uguale anche il valore!!!)
// non è una sola verifica del tipo di dato
// stessa cosa per !==
console.log(n6 === 6); // false
console.log(n7 === 6); // true
console.log(n6 != 5); // true
console.log(n6 !== 5); // true
console.log(n7 !== 6); // false
