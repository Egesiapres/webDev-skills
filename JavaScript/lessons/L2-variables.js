console.log('------ %c2: Variables ❌', 'font-weight: bold');

// 1. Cos'è una variabile?
// !! 2. Dichiarare VS Inizializzare
// quando dichiaro la variabile creo la scatola
// quando la inizializzo la dichiaro e le assegno un valore (riempendo la scatola)
let name = 'Edoardo';

// 3. Aggiornare una variabile
name = 'Luca'; // riprendo il nome ma senza il let
// i valori nella variabile sono mutabili nel corso del tempo
name = 6;

console.log(name); 
// !! undefined: la variabile esiste (è stata dichiarata) ma non ha contenuto 
// (non è stata inizializzata, o meglio, è stata inizializzata con il dt undefined)
// console.log(cognome); 
// !! errore: la variabile non è definita, non esiste (non c'è la scatola)

// 4. Norme per la dichiarazione delle variabili
// le variabili vanno scritte in minuscolo. Quando ho più parole una accanto all'altra posso user l'underscore ma il meglio è il camelCase
// l' _ si usa di più nelle variabili di php
// no _ per iniziare e no numeri all'inizio
// no accenti
// scrivere dei nomi intuibili e sensati
let dichiarazioneVariabileNuova;
let dichiarazionevariabilenuova; // meno leggibile della precedente

// 5. Let VS Var
// meglio usare let quando devo definire una variabile, var ormai non si usa più
// aggiornare una variabile (riassegnazione del suo valore)
let newName = 'Umberto';
newName = 'Emma';

// 6. Tipi di variabili
let number = 25; // number: interi
let f = 25.2; // float: numeri con la virgola
let string = 'Umberto'; // string: stringhe di testo (il testo va scritto dentro le '' o "")
let boolean = true; // boolean: può essere true or false
let arr = ['Fede', 'Thomas']; // array (vettore): insieme di dati
// negli array (e in generale) il conteggio parte sempre da 0 (si tratta dell'indice, di index)
let infamousExample = [1, 2, 3];

console.log(
  'This is a number:',
  number,
  `- its data type is: ${typeof number}`
);
console.log('This is a float:', f, `- its data type is: ${typeof f}`);
console.log(
  'This is a string:',
  string,
  `- its data type is: ${typeof string}`
);
console.log(
  'This is a boolean:',
  boolean,
  `- its data type is: ${typeof boolean}`
);
console.log('This is an array:', arr, `- its data type is: ${typeof arr}`);
// stampare valori ripresi dall'array
console.log(arr[1]); // Thomas
console.log(infamousExample[0]); // 1
// posso usare la notazione sopra per accedere ad un valore solamente quando sono in presenza di array
// con gli oggetti no (a meno che dentro all'oggetto ci siano altri array)

// 7. Oggetti
// sono rappresentazioni programmatiche, in codice di quello che esiste nella realtà
// contengono molti dati fra cui ci possono anche essere array
let person = {
  name: 'Umberto',
  surname: 'Pasinetti',
  fiscal_code: 'AAAAAA11A11A111A',
  id: 'AA1111111',
  eta: 25,
  city_of_birth: 'Brescia',
  favorite_colors: ['rosso', 'blu', 'nero'],
};

console.log(person);
// stampare valori specifici ripresi dall'interno dell'oggetto
// in persona.dni, il . può essere letto come un "della"
console.log(person.id);
console.log(person.favorite_colors[1]);

// !! 8. Tipizzazione dinamica
// js a differenza di ts (typescript) o java, quando dobbiamo dichiarare una variabile, non ci costringe a dichiararne il tipo
let user = 'Giovanni'; // in altri linguaggi sarebbe stato una cosa tipo let string user = 'Giovanni';
user = 55; // da string viene dinamicamente cambiato il tipo di variabile in number all'aggiornamento della variabile

console.log(typeof user);

// 9. Costanti
// valori che non devono variare nel tempo (variabili fisse)
// quindi non possono essere aggiornate come per i let
// es: indirizzo del db
const secondUser = 'Mariarosa';
// secondUser = 'Montirone'; //qui viene restituito un errore perché le const sono fisse

console.log(secondUser);

// AGGIUNTA
// !! posso dichiarare una variabile senza assegnarle un valore
// !! viene inizializzata automaticamente con il valore: undefined
// stessa cosa è assegnarle 0, o ''
let example;
console.log(example);

example = 'Now the variable is also initialized';
console.log(example);
