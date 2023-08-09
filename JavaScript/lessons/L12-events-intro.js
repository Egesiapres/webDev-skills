console.log('------ %c12: Events intro 🎉', 'font-weight: bold');

// 1. Cosa sono gli eventi?
// cose che succedono sulla pagina
// all'agire di una persona
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const nicknameInput = document.getElementById('nickname');
const outputParagraph = document.getElementById('output-p');

nameInput.onfocus = function () {
  console.log('sono in focus'); // quando metto il cursore nella casella di input
};

// 2. Event handler
// prendo l'elemento che mi interessa
// e a fianco ci metto .onclick, .onsubmit, .onfocus...
// onclick è per quando clicco con il mouse
nameInput.onclick = function () {
  console.log('ciao');
};

// 3. Inline event handler (vedi l'html)
// sconsigliato, meglio non intaccare l'html
function prova() {
  console.log('Hai cliccato sul cognome');
}

function prova2() {
  console.log(`Daje ora riempi l'input!`);
}

// 4. addEventListener()
// metodo migliore
// danno + controllo
nicknameInput.addEventListener('focus', () => {
  console.log(`Sei in focus sull'input del nickname tramite il listener`);
});

// 5. Oggetto Event
// se aggiungo un evento creo un oggetto evento
// il parametro di .addEventListener() spesso è e o event
// (potrebbe anche essere pippo)
// se nel console.log metto come parametro e mi fa vedere l'oggetto generato
// e tutti i suoi parametri

// ho selezionato una proprietà dell'oggetto event
// il .target si userà molto molto
nameInput.addEventListener('focus', function (e) {
  console.log(`Sei in focus sull'input del nome tramite il listener`);
  console.log(e);
  console.log(e.target);
  // console.log(e.value);
  console.log(e.target.value);
});

// 6. e.preventDefault
// certi eventi hanno comportamento predefiniti
// esempio: il form manda i dati
// se il valore di nome, cognome o nickname è vuoto eviti il comportamento di base (eviti che i dati vengano inviati)
// se un evento ha qualche problema aggiungo .preventDefault() e mi faccio il debugging
form.onsubmit = function (e) {
  if (
    nameInput.value === '' ||
    surnameInput.value === '' ||
    nicknameInput.value === ''
  ) {
    e.preventDefault();
    // mandi a schermo della roba
    outputParagraph.textContent = 'You need to fill in every input field!';
  } else {
    e.preventDefault();
    outputParagraph.innerHTML = `Ciao ${nameInput.value} ${surnameInput.value}. Mi hanno detto che spesso i tuoi amici ti chiamano ${nickname.value}, è vero?`;
  }
};

// 7. Event bubbling e capturing (stop propagation)
// 2 eventi che possono succedere
// vedi documentazione MDN

// event capturing: lettura a scendere degli event handlers applicati (prima html, body, poi div e infine video)
// event bubbling: lettura e propagazione a salire (prima video, che passa a div che passa a html e body)
// il loop si interrompe con e.stopPropagation();
// appunto stoppo la propagazione dell'evento
// cose abbastanza rare ma che vanno capite
// serve + per eventuali debug

// 8. Event delegation
// approfondimento extra fai da te
