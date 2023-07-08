console.log('------ %c7: If else & switch ✅', 'font-weight: bold');

// 1. Cosa sono le condizioni
// if
// se la condizione è soddisfatta (se ciò che c'è scritto dopo l'if e le ())
let nome1 = 'Umberto';
let eta = 21;
let soglia = 25;

// 2. if else statement
// se l'if è la condizione da eseguire nelle prime {}
// l'else è la cosa da eseguire in caso la condizione non viene soddisfatta
if (nome1 == 'Umberto') {
  console.log('Ciao Umberto'); // se si verifica la c
} else {
  console.log('Ciao persona anonima'); // se non si verifica la c
}

// 3. else if
// se voglio aggiungere un'altra condizione
// posso inserire tanti else if quanti me ne servono
if (nome1 == 'Umberto') {
  console.log(`${nome1} sei vecchio, hai già ${eta} anni`);
} else if (nome == 'Emma') {
  console.log(`${nome1} è giovane :(. Lei ha solo ${eta} anni!`);
} else if (nome == 'Fede') {
  console.log(`${nome1} flexa tutti i giorni almeno 1000 muscle-up...`);
} else {
  console.log('Chissene tanto moriremo tutti');
}

// 4. Ripasso sugli operatori comparativi
// === !== == != < > <= >=
if (eta < 25) {
  console.log(`Se l'età è minore di ${soglia}, potrebbe trattarsi di Emma`);
} else if (eta > 25) {
  console.log(`Se l'età è maggiore di ${soglia}, potrebbe trattarsi di Fede`);
} else if (eta == 25) {
  //è uguale
  console.log(`Se l'età è uguale a ${soglia}, si tratta certamente di Umbe`);
} else {
  console.log(
    'Non si tratta di nessuno, oppure il valore scritto non è un numero'
  );
}

let anni = 15;
// non è uguale
if (anni != 25) {
  console.log(
    `Se l'età non è uguale a ${soglia}, potrebbe trattarsi di Emma o di Fede`
  );
}

let age = 25;

if (age <= 25) {
  console.log(
    `Se l'età è minore o uguale a ${soglia}, potrebbe trattarsi di Umbe o di Emma`
  );
} else if (age >= 25) {
  console.log(
    `Se l'età è maggiore o uguale a ${soglia}, potrebbe trattarsi di Umbe o di Fede`
  );
}

let edad = '21';
// è identico (controlla il valore e il tipo)
if (edad === 25) {
  console.log(
    `Se l'età è identica a ${soglia}, il valore dell'età di Umbe è un numero`
  );
} else if (edad !== 25) {
  // non è identico
  console.log(
    `Se l'età non è identica a ${soglia}, il valore dell'età di Umbe non è un numero`
  );
}

// 5. Innestare gli if
// if dentro ad un altro if
// quando l'if viene inserito dentro la () di un if precedente
let num = 16;

if (num < 20) {
  // if innestato (il resto della divisione di numero per 2)
  if (num % 2 == 0) {
    console.log(`${num} è pari`);
  } else {
    console.log(`${num} non è pari ma dispari`);
  }
}

// 6. Operatori logici
// AND &&
// entrambe le condizioni devono essere soddisfatte
let eighteen = 18;

if (eighteen < 20 && eighteen % 2 == 0) {
  console.log(`${eighteen} è minore di 20 ed è un numero pari`);
} else {
  console.log(
    `${eighteen} o non è minore di 20 o non è un numero pari, o entrambi`
  );
}

// OR ||
// basta che solo una delle due condizioni
let twentyFive = 25;

// nell'if prima e dopo || devo sempre scrivere la variabile
if (twentyFive < 20 || twentyFive % 2 == 0) {
  console.log(`${twentyFive} è minore di 20 o è un numero pari, o entrambi`);
} else {
  console.log(`${twentyFive} è un numero dispari maggiore di 20`);
}

// NOT !
let nombre = 'Umberto';

//condizione: è il nome diverso (not) da Umberto?
//basta scrivere
//if (nombre != 'Umberto')
if (!(nombre == 'Umberto')) {
  console.log(`Sicuramente non si tratta di Umnberto`);
} else {
  console.log(`Si tratta sicuramente di Umberto`);
}

// 7. Switch statement
// lo switch è la casistica, e automaticamente ne ho più di una
// risolve il problema dell'else if quando ce ne sono molti
// più leggibile e pulito
// si usa quando ho una condizione sola, senza operatori logici vari
let marco = 'Marco';

// dopo lo switch si inserisce la condizione
switch (marco) {
  // a ogni case si inserisce la condiziond dell'else if
  case 'Luca':
    console.log('Ciao Luca');
    break; // evita che il codice vada avanti, sono delle interruzioni
  case 'Marco':
    console.log('Ciao Marco');
    break;
  case 'Gino':
    console.log('Ciao Gino');
    break;
  default: // è l'else
    console.log('Non so il tuo nome');
}

// 8. Ternary operator
// si usa molto nei template literals ``
let numero2 = 12;
// è numero2 minore di 20? Se si scrivi Luca, altrimenti Leonardo
// ? stampa in caso di true
// : stampa in caso di false
let templateOperator = numero2 < 20 ? 'Luca' : 'Leonardo';

console.log(templateOperator);

// AGGIUNTA
// short-circuit evaluation
let tool = 'marker'; // se rendo tool falso, svuotando la variabile inserendo 0, o '', viene stampato pen
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
