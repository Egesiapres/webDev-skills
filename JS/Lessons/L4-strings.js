console.log('------ %c4: Strings 🔤', 'font-weight: bold')

// 1. Come creare una stringa
// si possono usare sia i singoli apici (''), single quotes, che i doppi, double quotes ("")
// non si possono mischiare i tipi di apici
let stringa = 'Stringa con i singoli apici';
let stringa2 = 'Stringa con i doppi apici';

// 2. '' o ""?
// se devo scrivere l'apostrofo con i "" non c'è problema
// con i '' invece l'apostrofo (') diventa un problema
// lo devo fare con il \
let stringa3 = "L'apostrofo";
// let stringa4 = 'L'apostrofo';

// 3. Escape dei caratteri in una stringa
// per rispovere il problema dei caratteri devo usare il \ (back slash)
// così facendo eseguo l'escape dei caratteri
let stringa4 = "L'apostrofo";

// in generale
// i singoli apici sono utili se all'interno ho una citazione fra ""
let citazione = 'Questa è una "citazione"';
// i doppi apici se all'interno ho un apostrofo
let apostrofo = "In questa frase c'è un apostrofo";
// avere consistenza nell'uso

// 4. Concatenare le stringhe
let name = 'Umberto';
// concatenazione stringa + variabile
let saluto = 'Ciao sono ' + name;
// c stringa + stringa
let obiettivo = 'Sto cercando di imparare' + ' ' + 'JavaScript';

console.log(saluto);
console.log(obiettivo);

// 5. Numeri vs stringhe
// stringa + numero = stringa
let stringaNumero = 'Umberto' + 25;
// stringa (contenente numero) + stringa (contenente numero) = stringa
let fakeSomma = '25' + '25'; // 2525

// Number()
// se volessimo convertire numeri dentro a stringa in numeri (veri anche per tipo)
let realSomma = Number('25') + Number('25');
// dentro alle () di Number() va messo il singolo numero, no tutta l'espressione
// no let realSomma = Number('25' + '25');
let realSomma2 = Number('1') + 26; // 27

// .toString()
// da numero a stringa
let numero1 = 3;
let aStringa = '48' + numero1.toString();

console.log(stringaNumero);
console.log(fakeSomma);
console.log(realSomma);
console.log(realSomma2);
console.log(aStringa);

// 6. Template literals ``
// (quel simbolo si chiama backtick)
// posso inserire in una stringa funzioni, variabili, evito l'escape...
// la caratteristica è la potenza delle stringhe ora
// è come un'altro tipo di apostrofo
let testo = 'ciao sono una variabile';
let elemento = `<h4>${testo} bellissima</h4>`; // in fondo c'è anche una concatenazione con una stringa
//posso anche andare a capo
// document.body.innerHTML = elemento;
