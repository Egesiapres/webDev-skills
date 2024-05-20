console.log('------ %c4: Strings 🔤', 'font-weight: bold');

// 1. Come creare una stringa
// si possono usare sia i singoli apici (''), single quotes, che i doppi, double quotes ("")
// non si possono mischiare i tipi di apici
let str = 'String with single quotes';
let str2 = 'String with double quotes';

// 2. '' o ""?
// se devo scrivere l'apostrofo con i "" non c'è problema
// con i '' invece l'apostrofo (') diventa un problema
// lo devo fare con il \
let str3 = "L'apostrofo";
// let stringa4 = 'L'apostrofo';

// 3. Escape dei caratteri in una stringa
// per risolvere il problema dei caratteri devo usare il \ (back slash)
// così facendo eseguo l'escape dei caratteri
let str4 = "L'apostrofo";

// in generale
// i singoli apici sono utili se all'interno ho una citazione fra ""
let citazione = 'This is a "quote"';
// i doppi apici se all'interno ho un apostrofo
let apostrofo = "In questa frase c'è un apostrofo";
// avere consistenza nell'uso

// 4. Concatenare le stringhe
let name1 = 'Umberto';
// concatenazione stringa + variabile
let greeting = "Hi, I'm " + name1;
// c stringa + stringa
let goal = "I'm trying to learn" + ' ' + 'JavaScript';

console.log(greeting);
console.log(goal);

// 5. Numeri vs stringhe
// stringa + numero = stringa
let numberString = 'years' + 25;
// stringa (contenente numero) + stringa (contenente numero) = stringa
let fakeSum = '25' + '25'; // 2525

// Number()
// se volessimo convertire numeri dentro a stringa in numeri (veri anche per tipo)
let realSum = Number('25') + Number('25');
// dentro alle () di Number() va messo il singolo numero, no tutta l'espressione
// no let realSomma = Number('25' + '25');
let realSum2 = Number('1') + 26; // 27

// .toString()
// da numero a stringa
let number1 = 3;
let str5 = '48' + number1.toString();

console.log(numberString);
console.log(fakeSum);
console.log(realSum);
console.log(realSum2);
console.log(str5);

// !! 6. Template literals ``
// (quel simbolo si chiama backtick)
// posso inserire in una stringa funzioni, variabili, evito l'escape...
// la caratteristica è la potenza delle stringhe ora
// è come un'altro tipo di apostrofo
let text = "Hi, I'm a wonderful";
let element = `<h4>${text} variable</h4>`; // in fondo c'è anche una concatenazione con una stringa
//posso anche andare a capo
// document.body.innerHTML = element;
