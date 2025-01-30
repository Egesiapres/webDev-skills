## Functions 🧮

Una funzione è un **blocco di codice autonomo**, non associato a nessun oggetto, **riutilizzabile** in qualsiasi punto del programma (vedi in differenza rispetto ai metodi in dictionary).

Tipi di funzioni:

- **Named F:** funzioni con un nome, ad esempio `addTen()`.

```
function helloUser(name) {

  return `Hello ${name}!`;

};

// concise version
// no {} & return
// function helloUser(name) `Hello ${name}!`;

console.log(helloUser("Egesiapres")); // "Hello Egesiapres!"
```

- **Anonymous F:** funzioni senza un nome. Sono spesso utilizzate come funzioni di callback, in forma classica (`function()`) o, più comunemente, di arrow f, oppure per la creazione di f expressions.

```
console.log(function() {

  return "Hello World!"

}); // "Hello World!"

// concise version
// no {} & return
// console.log(function() "Hello World!");

console.log(() => "Hello World!"); // "Hello World!"
```

- **Arrow F:** introdotte con ES6. Sintassi più pulita e leggibile, ottime per funzioni anonime, quindi per callback functions e per function expressions. Quando c'è solamente un argomento possono essere rimosse le `()` (quando ce ne sono 0 rimane), se non contengono molta logica nel block scope possono essere anche scritte inline rimuovendo `{}` e la keyword `return`.

```
const helloWorld = () => "Hello World!"; // "Hello World!"

const helloUser = name => `Hello ${name}!`

console.log(helloUser("Egesiapres")); // "Hello Egesiapres!"
```

- **F Expressions:** funzioni anonime assegnate ad una variabile. L'invocazione della f avviene attraverso il nome della variabile a cui sono assegnate, ad esempio `helloUser()`.

```
const helloUser = function(name) `Hello ${name}!`;

console.log(helloUser("Egesiapres")); // "Hello Egesiapres!"
```

- **Callback F:** funzioni passate come argomento di altre funzioni/metodi. Necessitano dell'invocazione della f della quale sono argomento per funzionare, molto utilizzate nella programmazione asincrona. Molto spesso implementate sfruttando le arrow f.

```
console.log("user name", () => "Hello World!"); // "Hello World!"
```