// 1. Cos'è JSX (JavaScript XML)?
// XML: Extensible Markup Language
// JSX: estensione sintattica di JS pensata per React
// JSX non può essere letto direttamente dal browser
// (non è JS vanilla)
// deve essere compilato, serve un compilatore che traduca in JS

// 2. ELEMENTs
// unità base che compongono il JSX: <h1>Hello world!</h1>
// è html
// ma dentro a un file JS
const h1 = <h1>Hello world!</h1>;

// trattati come espressioni JS
// (salvati dentro una variabile, passati a una funzione, messi in un oggetto o array...)
// JSX dentro una variabile
const myArticle = <article>This is an article</article>;
// JSX dentro un oggetto
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>,
};

// 3. ATTRIBUTEs
// sintassi: my-attribute-name="my-attribute-value"
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;
const panda = <img src="#" alt="panda" width="500px" height="500px" />;

// 4. NESTED JSX
// quando c'è tanto html, lo si mette dentro ()
// (ok anche senza)
const theExample = (
  <a href="#">
    <h1>Click me!</h1>
  </a>
);

// 5. OUTER ELEMENTS
// elementi sempre contenuti in un elemento parent
// tag inizio e chiusura uguali, stesso tag
// se problemi includere tutto in un div
// NO (multiple outer elements)
/*
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);
*/
// SI (single outer element)
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// 6. ReactDOM.render()

// importare le librerie
// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM: nome della libreria
// che contiene in metodi specifici
// render() è un metodo della libreria ReactDOM (il più usato)
// primo argomento: cosa renderizzare (pezzo html)
// secondo argomento: dove renderizzare (posizione)
// (se come secondo elemento metto document.querySelector('#...') non va)
ReactDOM.render(<h1>Hello world! - ReactDOM.render</h1>, document.getElementById('reactDom'));
// (MANCANO UNA SERIE DI FILE PER FAR FUNZIONARE IL TUTTO)

// 7. VIRTUAL DOM
// ReactDOM.render() aggiorna solo gli elementi del DOM che cambiano
// se provo a renderizzare due volte la stessa cosa non succede niente
// avviene una comparazione DOM reale vs DOM virtuale
const hello = <p>Hello world!</p>;

ReactDOM.render(hello, document.getElementById('virtualDomOne'));
ReactDOM.render(hello, document.getElementById('virtualDomTwo'));
