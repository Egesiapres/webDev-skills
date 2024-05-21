## Scope 🔫

Lo scope è il **contesto** all'interno del quale una variabile è disponibile, accessibile. Determina **dove** una variabile può essere utilizzata all'interno del codice.

Tipi di scope:

- **Local:** la variabile `ten` è accessibile solamente all'interno della funzione addTen().

```
function addTen(n) {

  const ten = 10;
  console.log(ten); // 10

  return n + ten;

}

console.log(ten); // error
```

- **Global:** la variabile `oneHundred` è accessibile sia fuori che dentro la funzione addOneHundred(). È disponibile all'interno di tutto il programma.

```
const oneHundred = 100;

function addOneHundred(n) {

  console.log(oneHundred); // 100

  return n + oneHundred;

}

console.log(ten); // 100
```

- **Block:** la variabile `number` è accessibile solamente all'interno del blocco, ovvero tutto ciò che si trova all'interno delle `{}` (che si tratti di una funzione, di un `if...else`, o altro):

```
{

  const number = 123;

  console.log(number); // 123

}
```

- **Lexical:** riferito al fatto che lo scope di una funzione è definito staticamente, in base alla struttura lessicale del codice.\
  Per questo motivo, una funzione una funzione annidata ha accesso alle variabili della funzione genitrice anche se viene eseguita in un contesto diverso.

```
function externalFunction() {

  const string = 'abc';

  function innerFunction() {

    console.log(string);

  }

}

externalFunction();
```

- **Shadow scope** o **Shadowing** (comportamento): è un comportamento con il quale si va a coprire una variabile dallo scope globale con una locale dallo stesso nome.

```
const x = 'variabile esterna';

function shadowScopeExample() {

  let x = 'variabile interna'; // Questa variabile ombra la variabile esterna con lo stesso nome

  console.log(x); // Stampa "variabile interna"

}

shadowScopeExample();

console.log(x);
```

# IMPORTANTE

Casistiche particolari:
- **Utilizzo ```this``` fuori da un oggetto:** window object
- **callback functions:** si 