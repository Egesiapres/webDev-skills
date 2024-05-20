console.log('------ %c6: Arrays 📂', 'font-weight: bold');

// 1. Cosa è un array
// è il modo di fare una lista di valori di JS

// 2. Creare un array
// creo una variabile e inserisco il contenuto fra [] separato da ,
// elementi: contenuto dell'array
let array = ['Emma', 'Fede', 'Umbe'];

// 3. Accedere e modificare gli elementi di un array
console.log(array);
console.log(array[1]);
console.log(array[4]); // stampa undefined perché non esiste un elemento con index 4

// la length è 4 (4 elementi). Stampa però l'index of di 4-1, il 3 è umbe
console.log(array[array.length - 1]); // Umbe

// 4. Lunghezza di un array e passare in rassegna gli elementi all'interno
// ciclo for ha 3 parametri in entrata
// i è il contatore
// dove parte il contatore (da valore con index 0), dove finisce, di quanto incrementa
let cities = ['Napoli', 'Biella', 'Milano', 'Brescia'];

// li potrei stampare manualmente prendendoli uno a uno con il loro valore di indice
console.log(cities[0], cities[2]);

// ma è meglio creare un ciclo che stampa ogni elemento, così viene fatto anche se viene aggiunto qualcosa
for (i = 0; i < cities.length; i++) {
  console.log(cities[i]);
} // non so perché non stampa ma dovrebbe restituire tutti i valori
// scrivevo sbagliato il length

// 5. Convertire stringhe e array
// .split('')
// splittare, separare
// da stringa ad array
// per eseguire lo split i dati devono essere in forma di stringa, no dentro a []
let names = 'Umberto,Mariarosa,Giovanni';
let splittedNames = names.split(','); // in questa variabile aggiungo il metodo e come argomento il suo separatore

console.log(splittedNames);

// .join()
// unire
// da array a stringa
let courses = ['Inge', 'Psico', 'Data science', 'TTC'];
let joinedCourses = courses.join(', '); // in questa var aggiungo il metodo e rimuovo il separatore indicato

console.log(joinedCourses);

// 6. Aggiungere e rimuovere elementi
// push e pop lavorano in coda
// .push()
// con il semplice push aggiungo l'elemento alla fine dell'index, come ultimo
cities.push('Bergamo');

// .pop()
// elimino l'ultimo elemento
// se inserisco l'index ne tolgo uno specifico
// tolgo TTC
courses.pop();
// tolgo inge
courses.pop(courses.indexOf[0]);

console.log(courses);

// unshift e shift lavorano in testa
// .unshift()
// aggiunge un elemento all'inizio
array.unshift('Thomas');

// .shift()
// rimuove l'elemento all'inizio
array.shift(); // quindi in questo caso rimuove Thomas appena aggiunto

console.log(array);

// AGGIUNTA
let sauces = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const tools = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

sauces[0] = 'Mayo';
console.log(sauces);

condiments = ['Mayo'];
console.log(sauces);

tools[3] = 'Spoon'; // anche se utensils è stato definito con una const rimane modificabile
console.log(tools);

// nested arrays
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
