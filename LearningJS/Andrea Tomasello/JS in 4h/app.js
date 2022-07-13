// KEYWORD: var, let, const sono alcuni esempi
var nome = 'umberto';
console.log(nome);

var eta = 20;
var cognome = 'pasinetti';
console.log(cognome);
console.log(eta);

eta = 21;
console.log(eta);



//VARIABILI
//lettere, numeri (non all'inizio, solo di mezzo o alla fine), _, $

// prima 2015 var
var _eta = 24;
console.log(_eta);

var e2ta = 25;
console.log(e2ta);

// dopo 2015 let, const (nuove versioni di Js)
let saluto = 'ciao';

//le constanti non possono essere modificate nel corso del tempo
const saluto1 = 'buongiorno';
console.log(saluto);
console.log(saluto1);

saluto = 'ciao ciao'
console.log(saluto);

//inizializzare una variabile. Con const non è possibile
let nomeproprio;
nomeproprio = 'umbi';
console.log(nomeproprio);

/*
const nome;
nome = 'giovanni';
console.log(giovanni);
*/



// DATI PRIMITIVI - Primitive type
// String
const nome1 = "umberto sta scrivendo";
console.log(nome1);
console.log(typeof nome1); 
// Number
const etamia = 12 * 2;
console.log(etamia);
console.log(typeof etamia);
// Boolean
const eMaggiorenne = true;
console.log(eMaggiorenne);
console.log(typeof eMaggiorenne);
// Null
const val = null;
console.log(val);
console.log(typeof val);
// Undefined
let nome2 = undefined;
console.log(nome2);
// Symbol (aggiunto con le nuove versioni, raro)
const simbolo = Symbol();
console.log(simbolo);



// DATI DI RIFERIMENTO - Reference type
// Arrays
const nomi = ['umberto', 'gabriele', 'gioele'];
console.log(nomi);
console.log(typeof nomi);
// Objects
const persona = {
    name: 'billy',
    eta: 25,
};
console.log(persona);
console.log(typeof persona);
// con arrays e object le const possono essere cambiate, perché sono reference e no dati fissi
persona.name = 'jhonny';
console.log(persona);
//se cambio il valore dentro all'oggetto è tutto ok. Se cambio il valore stesso no



// TYPE CONVERSION

// 1. Da numero a stringa
let valore;
let valore1;

valore = String(5);

console.log(valore);
console.log(typeof valore);

// 2. Da boolean a stringa
valore = String(true);

// 3. .toString()
valore = (5).toString();

// 4. Da stringa a numero
valore = Number('5');

// 5. Da boolean a numero
valore = Number(false); 

// 6. Stringa a numero
valore = parseInt('100.56');
valore1 = parseFloat('103.56');

console.log(valore);
console.log(valore1);
console.log(typeof valore);
console.log(typeof valore1);



// TYPE COERCION: 2 var con valori diversi si incorciano
const nome3 = 'marco';
const cognome1 = 'rossi';
const emaschio = true;

console.log(nome3 + ' ' + cognome1 + eta + emaschio);

console.log(eta);
console.log(typeof eta);
// tutti i tipi di dati (string, numeri...) se concatenati diventano stringhe

// sono marco rossi e ho 20 anni. Sono maschio? true
const verbo = 'sono';
const nomeMarco = 'marco';
const cognomeMarco = 'rossi';
const cong = 'e';
const verbo1 = 'ho';
const etaMarco = '20 anni.';
const domanda = 'Sono maschio?'
const sesso = true;

console.log(verbo + ' ' + nomeMarco + ' ' + cognomeMarco + ' ' + 
    cong + ' ' + verbo1 + ' ' + etaMarco + ' ' + domanda + ' ' + sesso);



// NUMERI
const num1 = 24;
const num2 = 6;

let risultato;

risultato = num1 + num2;
console.log(risultato);
risultato = num1 - num2;
console.log(risultato);
risultato = num1 * num2;
console.log(risultato);
risultato = num1 / num2;
console.log(risultato);
// Modulo
risultato = num1 % num2;
console.log(risultato);

// OGGETTO MATH
// Math.PI
risultato = Math.PI;
console.log(risultato);
// Math.round()
risultato = Math.round(42.5);
console.log(risultato);
risultato = Math.round(42.7);
console.log(risultato);
risultato = Math.round(42.2);
console.log(risultato);
// Math.ceil() - arrotonda sempre per eccesso
risultato = Math.ceil(42.2);
console.log(risultato);
// Math.floor() - arrotonda sempre per difetto
risultato = Math.floor(5.9)
console.log(risultato);
// Math.sqrt() - radice quadrata
risultato = Math.sqrt(144);
console.log(risultato);
// Math.abs() - valore assoluto di un numero (neg div positivi)
risultato = Math.abs(-24);
console.log(risultato);
// Math.pow()
risultato = Math.pow(3,2);
console.log(risultato);
// Math.min()
risultato = Math.min(2,4,678,567, 1, -45);
console.log(risultato);
// Math.max()
risultato = Math.max(2,4,678,567, 1, -45, 1000);
console.log(risultato);
// Math.random() - di base il numero random è compreso fra 0 e 1
risultato = Math.random();
console.log(risultato);

risultato = Math.random() * 100
console.log(risultato);

risultato = Math.floor(Math.random() * 100);
console.log(risultato);

risultato = Math.floor(Math.random() * 20);
console.log(risultato);


// STRINGHE
             //01234567
const nome4 = 'Gesualdo';
let risultato1;

// lenght
risultato1 = nome4.length
console.log(risultato1);
// toUpperCase()
risultato1 = nome4.toUpperCase();
console.log(risultato1);
// toLowerCase()
risultato1 = nome4.toLowerCase();
console.log(risultato1);
// [] - stampa la lettera che corrisponde al numero 2 dell'indice (si parte sempre dallo 0)
risultato1 = nome4[2];
console.log(risultato1);
// indexOf() - contrario di []: indico la lettera e mi ritorna il numero
risultato1 = nome4.indexOf('u');
console.log(risultato1);
// charAt() - molto simile a []
risultato1 = nome4.charAt(3);
console.log(risultato1);
// substring()
risultato1 = nome4.substring(0,2); //viene escluso l'ultimo estremo, in questo caso il 2
console.log(risultato1);



// ARRAY - struttura di dati, immagazzinano i dati in qualche luogo
// si identificano per la []
const amico1andrea = 'jhonny';
const amico2andrea = 'osvaldo';

// ma è meglio così
                     //0          1          2
const amiciAndrea = ['jhonny', 'osvaldo', 'billy'];
const mix = ['stringa', 45, true, false, ['frutta'], {}]

console.log(amiciAndrea.length);

const piloti = ['vale', 'pecco', 'morbido', 'quarta'];
console.log(piloti[2]);
console.log(piloti.length);
console.log(piloti.indexOf('quarta'));

amiciAndrea[0] = 'nuovo amico'
console.log(amiciAndrea);


// ARRAYS - metodi
// push - aggiungere un elemento alla fine dell'array
const colori = ['rosso', 'blu', 'verde'];

colori.push('rosa');
console.log(colori);

// pop - toglie un elemento, se non specifico cosa quello alla fine
colori.pop();
console.log(colori);

// unshift - aggiunge l'elemento come primo
colori.unshift('rosa');
console.log(colori);

// shift - toglie il primo elemento
colori.shift();
console.log(colori);

// indexOf - restituisce l'indice di un determinato elemento
console.log(colori.indexOf('blu'));
// se il valore non esiste da -1

// slice - restituiscono una parte selezionata dell'array
const nuovo = colori.slice(0, 2);
console.log(nuovo);

// concat
const arr1 = ['facebook', 'instagram'];
const arr2 = ['whatsapp'];

console.log(arr1.concat(arr2));


// Esercizio 1: quale n viene ritornato?
let col = ['rosso', 'blu', 'verde', 'viola'];
console.log(col[col.length - 2]);
//lenght è 4 (0, 1, 2, 3). Tolgo 4-2=2. Il colore che ha index 2 è il verde

// Esercizio 2
// array con dentro 3 array
// Quali elementi vengono ritornati?
const social1 = [
        // 0    // 1
    ['facebook', 'IG'], // 0
    ['whatsapp', 'telegram'], // 1 
    ['tiktok', 'snapchat'], // 2
]

console.log(social1[1][1]); //telegram
console.log(social1[2][0]);  //tiktok
// NICE!!!!!!!!!!!

// Esercizio 3
// aggiungere il rosso all'array col
col.push('marrone');
console.log(col);
// togliere il rosso dall'array col
col.shift();
console.log(col);



// OGGETTI
// altra struttura di dati che permette di immagazzinare dei dati in un modo + strutturato

// array
const arr3 = ['umbi', 'mamma', 'papà'];

// oggetto
const persona4 = {
 //chiave  //valore  
    nome: 'billy',
    età: 24, 
    città:'Roma',
    indirizzo: {città: 'roma', via: 'viale del carro 233'},
    èmaggiorenne: true,
    coloriPreferiti: ['rosso', 'blu'],
}

// prendere i valori 
// modo1
console.log(persona4);
console.log(persona4.età);
console.log(persona4.città);
// modo2
console.log(persona4['nome']);
console.log(persona4['coloriPreferiti']['1']);


// CREARE OGGETTI
// 1. Creo la var vuota e poi la riempio all'occorrenza
const persona5 = {};
persona5.nome = 'andrea'
persona5.cognome = 'dovizioso'
console.log(persona5);
// 2. Classico
const persona6 = {nome: 'umberto', cognome: 'pasinetti', età: 24,}
console.log(persona6);
// 3. Simile all'1 ma con object
const persona7 = new Object;
persona7.cognome = 'rossi'
console.log(persona7);

persona7.cognome = 'verdi'
console.log(persona7);


// OGGETTI vs ARRAY

// OGGETTI
// dichiarazione (creazione)
const persona8 = {
    nome: 'giovanni'
}
// richiamo
console.log(persona8.nome);
console.log(persona8['nome']);
// aggiungere e modificare proprietà
persona8.cognome="pasinetti";
console.log(persona8);
persona8.cognome="pasinetti1"
console.log(persona8);
// cancellare
delete persona8.cognome;
console.log(persona8);

// ARRAY
// dichiarazione (creazione)
const persona9 = ['mariarosa'];
// richiamo
console.log(persona9[0]);
// aggiungere e modificare proprietà;
persona9.push('tirelli');
console.log(persona9);
persona9 [0] = 'giusy'
console.log(persona9);
// cancellare
persona9.pop();
console.log(persona9);


// DATE
let oggi = new Date();
console.log(oggi);
// restituisce il momento esatto in cui è stata fatta l'operazione
console.log(typeof oggi);

let compleanno = new Date ('11-1-1996-10:30:00'); // formato di data diverso, mese poi gg
console.log(compleanno);

let valore2; 
valore2 = oggi.getDay()
console.log(valore2)

compleanno.setMonth(4);
console.log(compleanno);


// OPERATORI BASE

// DRY - don't repeat yourself (minimizzare quello che scriviamo)
let x = 20;

x = x * 2;
console.log(x)
// oppure

x *= 2; // x = x * 2
x -= 2; // x = x - 2

x = x + 1;
x += 1;
x ++
x --

console.log(x)
// COMPARAZIONE
const maggioreEta = 18; // = di assegnazione
const etaBilly = 15;
console.log(etaBilly > maggioreEta)
console.log(etaBilly < maggioreEta)
console.log(etaBilly >= maggioreEta)
console.log(etaBilly <= maggioreEta)

console.log(etaBilly === maggioreEta) // === sto facendo una comparazione

// IF ELSE

// if(condizione) {
//     fai qualcosa
// } else {
//     fai qualcosaltro
// } 

if (true) {
    console.log('ciao')
} else {
    console.log('ciao parte 2')
}

// const maggioreEta2 = 18;
const etaBilly2 = 15 ;

if (etaBilly2 < 11) {
    console.log('billy è un bambino')
} else if(etaBilly2 > 11 && etaBilly2 < 19) {
    console.log('billy è un ragazzo')
} 
else {
    console.log('billy è un adulto')
}

