console.log('------ %c5: Strings methods 📝', 'font-weight: bold');

// 1. Cosa è una stringa?
// per js è un oggetto. Quindi ha dei metodi (delle funzioni)
let jsCourse = `This is a complete and updated JS course`;
let hi = `Hi`;

// 2. Lunghezza di una stringa
// .length
console.log(jsCourse.length);
console.log(hi.length);

// 3. Prendere la lunghezza di un carattere specifico
// come per gli array
console.log(jsCourse.length - 1); // 52
console.log(greeting[2]); // stampa la a

// 4. Prendere una parte di stringa
// .indexOf()
console.log(jsCourse.indexOf('course'));

// trovo l'inizio di quello che mi interessa
let courseIndex = jsCourse.indexOf('course');
// stampo a partire dal valore della variabile indexCorso, ovvero 12
console.log(jsCourse.slice(courseIndex));

// 5. Cambiare il case di una stringa
// .toUpperCase() mette tutto in caps lock
console.log(jsCourse.toUpperCase());
// .toLowerCase() mette tutto in minuscolo
console.log(jsCourse.toLocaleLowerCase());

// 6.Cambiare parti di una stringa
// .replace
console.log(jsCourse.replace('course', 'FUCKING course'));
