console.log('------ %c5: Strings methods 📝', 'font-weight: bold');

// 1. Cosa è una stringa?
// per js è un oggetto. Quindi ha dei metodi (delle funzioni)
let stringa1 = `Questo è un corso di JavaScript completo e aggiornato`;
let greeting = `ciao`;

// 2. Lunghezza di una stringa
// .length
console.log(stringa1.length);
console.log(greeting.length);

// 3. Prendere la lunghezza di un carattere specifico
// come per gli array
console.log(stringa1.length - 1); // 52
console.log(greeting[2]); // stampa la a

// 4. Prendere una parte di stringa
// .indexOf()
console.log(stringa1.indexOf('corso'));

// trovo l'inizio di quello che mi interessa
let indexCorso = stringa1.indexOf('corso');
// stampo a partire dall valore della variabile indexCorso, ovvero 12
console.log(stringa1.slice(indexCorso));

// 5. Cambiare il case di una stringa
// .toUpperCase() mette tutto in caps lock
console.log(stringa1.toUpperCase());
// .toLowerCase() mette tutto in minuscolo
console.log(stringa1.toLocaleLowerCase());

// 6.Cambiare parti di una stringa
// .replace
console.log(stringa1.replace('corso', 'FOTTUTO CORSO'));
