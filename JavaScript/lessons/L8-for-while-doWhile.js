console.log('------ %c8: For, while & do while 🔁', 'font-weight: bold');

// * Cicli
// for
// for...of (arrays)
// for...in (objects)
// while
// do...while


// 1. Introduzione
// esempio del libro
// ho un libro con tante pagine
// ha una pagina? si
// l'ho letta? no
// allora la leggo
// ogni volta che la condizione (trovo una pagina non letta) è vera eseguo
// quando non trovo più pagine finisco, interrompo

let numbersArray = [22, 13, 34, 6, 99, 101];
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2. Perché ci servono i loop (cicli)
// al posto di
//  console.log(numbersArr[0]);
//  console.log(numbersArr[1]);
//  console.log(numbersArr[2]);
//  console.log(numbersArr[3]);
//  console.log(numbersArr[4]);
//  console.log(numbersArr[5]);
// macchinoso, ripetitivo e non automatico

// 3. FOR
// per ogni volta che si verifica () esegui {}
// i è il contatore (counter) (il nome, i, è una convenzione)
// I: initialization (inizializzare una variabile: let i = 0;)
// ciclo a partire dall'elemento dell'array il cui indice è 0
// II: stopping condition (finché i è minore della lunghezza totale 6. Quindi prendo fino a 5)
// III: iteration statement: nuovo valore per ogni iterazione del loop

console.log('normal loops');
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

for (let i = 0; i < 4; i++) {
  console.log(i);
}

console.log("from 'a' print just: 3, 4, 5, 6, 7");
// let a = [1,2,3,4,5,6,7,8,9]
for (let i = 2; i < a.length - 2; i++) {
  console.log(a[i]);
}

// si ferma perché dopo array.length[5] il contatore prova a salire
// però array.length[6] è uguale alla length totale, quindi si blocca
// perché la condizione è solo <, non <=
// se eseguo {console.log(i)} stampa l'indice a cui corrispondono i valori
// per avere i numeri: {console.log(a[i])}

// 4. USCIRE dal ciclo
// BREAK: termina anche se la stopping condition non è soddisfatta
// se mi imbatto nel numero 56 esci dal ciclo
console.log("'BREAK': go out of the loop");
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
  if (numbersArray[i] == 56) {
    break;
  }
}

const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}

console.log("And if you don't know, now you know");

// let array = [22,13,34,6,99,101];
for (let i = 0; i < numbersArray.length; i++) {
  // 4. SALTARE l'iterazione
  // CONTINUE
  // stampa tutto tranne il numero 56
  // se mettessi il console.log qua stamperebbe anche il 56
  // perché non avrebbe ancora letto l'istruzione di rimozione

  // io: saltare 13 e 34
  // no && si ||: può essere uno dei due o entrambi. Non per forza contemporaneamente
  if (numbersArray[i] == 13 || numbersArray[i] == 34) {
    continue;
  }
  console.log(numbersArray[i]);
}

// stampa tutti i numeri dispari
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 2 == 0) {
    continue;
  }
  console.log(numbersArray[i]);
}

// 6. WHILE & DO WHILE
// let arrayOne = [22,13,34,56,99,101];
let arrayOne = [22]; // length 1 e indice di partenza 0

// WHILE
// utile quando devo iterare un numero indeterminato di volte
// la sintassi è scomposta rispetto al for
// I: inizializzo il contatore
// II: stopping condition
// codice da eseguire
// III: iteration statement
// poiché prima viene verificata la condizione
// con l'array di 1 numero si blocca
// 1 non è < di 1 (avrei dovuto mettere)
let i = 1;
let k = 1;
while (i < arrayOne.length) {
  console.log('while:', arrayOne[i - 1]); //
  i++;
}

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];

let j = 0;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
  j++;
}

// DO...WHILE
// è un for smontato e al contrario
// prima dico cosa eseguo
// il do while esegue il codice prima di verificare la condizione
// per questo non si blocca se nel caso dell'array a 1 numero
// faccio eseguire il codice almeno una volta anche prima della verifica della condizione
do {
  console.log('do while:', arrayOne[k - 1]);
  k++;
} while (k < arrayOne.length);

// for sostituisce egregiamente il while
// for usarlo in quasi tutti i casi in cui si può
// do while offre quella flessibilità in più in certe situazioni

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);

// AGGIUNTE
// looping in REVERSE
console.log('reverse loops');
for (let i = 3; i >= 0; i--) {
  console.log(i);
}

// io: stampare al contrario i numeri
// console.log(a[i]) Output: undefined
// credo perché ho messo let i = a.length
console.log("'a' reverse");
for (let i = a.length; i > a.indexOf(1); i--) {
  console.log(i);
}

// NESTED FOR LOOPS
// spesso usati per le comparazioni
const bobsFollowers = ['Peter', 'Jane', 'Al', 'Eric'];
const tinasFollowers = ['John', 'Peter', 'Al'];
const mutualFollowers = [];
// inserire i follower uguali in mutualFollowers
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
