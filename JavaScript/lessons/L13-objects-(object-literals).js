console.log('------ %c13: Objects 📦', 'font-weight: bold');

// 1. Cosa è un oggetto? Proprietà, metodi
// 2. Creare un oggetto
// collezione di dati correlati fra loro
// * i dati si leggono per coppia chiave (key) valore (value) separari da una ,
const person = {
  name: 'Luca',
  surname: 'Rossi',
  gender: 'Maschio',
  age: 25,
  interests: ['snowboard', 'basket', 'picnic al parco'],
  // oggetti nidificat📥i
  address: {
    street: 'Piazza Roma',
    cap: '98765',
    province: 'MI',
    city: 'Milano',
  },
  sayHello: function () {
    // ACCEDO a una proprietà specifica scendendo attraverso oggetto.chiave[indice]
    // oppure con il this.
    console.log(`Hi, I'm ${person.name}`);
    console.log(`Hi, my surname is ${this.surname}`);
  },
};

// le "variabili" dentro un oggetto sono proprietà (nome, cognome...)
// * metodo: funzione di un particolare oggetto (saluta)
// saluta è il metodo di persona

// 2. Leggere proprietà e funzioni
console.log(person.name);
console.log(person.age);
console.log(person.interests[2]); // nell'array se voglio un dato specifico uso l'index
console.log(person.address.cap); // proprietà di un oggetto in una proprietà di un oggetto
persona.sayHello(); // richiamare le funzioni (oggetto.metodo())
// console.log(persona.saluta()); // bugga, da undefined. Sopra giusto
// è uguale a
console.log(person.name.toLocaleUpperCase());

// 3. Dot vs brackets notation
// questo
console.log(persona.nome);
// è uguale a
console.log(persona['nome']);
console.log(persona['interessi']);
console.log(persona['interessi'][1]);
console.log(persona['indirizzo']['cap']);
// per prendere in maniera statica va bene la dot notation
// per prendere dinamicamente cose è meglio la braketes notation
const chiave = 'interessi';
console.log(persona.chiave); // undefined, dentro a persona non c'è chiave
console.log(persona[chiave][0]); // snowboard

// 4. Aggiornare un oggetto
// (come per i let, scendendo con i . fin dove mi serve)
// perché posso modificare un valore nella costante?
// perché non sto cambiando interamente la natura dell'oggetto persona
persona.nome = 'Paolo';
// persona = 65; qua da errore
persona.indirizzo.cap = 12300;
persona.interessi[2] = 'cazzeggiare';

console.log(persona.nome);
console.log(persona.indirizzo.cap);
console.log(persona.interessi[2]);

// aggiungere proprietà
// l'aggiunta avviene in ordine alfabetico
persona.colorePreferito = 'blu';

console.log(persona.colorePreferito);
console.log(persona);

// 5. THIS
// quando lo usiamo facciamo riferiemnto allo STESSO oggetto
// quello che stiamo utilizzando
// vedi sopra dove c'è la stampa del cognome
// this prende come scope l'oggetto
// stampa il cognome perché siamo dentro all'oggetto persona

// AGGIUNTE
// la chive usa le '' se ha caratteri speciali (es: 'Fuel type')
// key e value compongono le proprietà

// ai valori si può accedere anche con la bracket notation
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5,
};

let propName = 'Active Mission';

let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

// anche oggetto definito con const si modifiche
const spaceshipOne = { type: 'shuttle' };
// spaceshipOne = { type: 'alien' }; // TypeError: Assignment to constant variable.
spaceshipOne.type = 'alien'; // Changes the value of the type property
spaceshipOne.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// delete operator per nimuovere proprietà
delete spaceshipOne.homePlanet;

// quando a una key è associato un metodo, la key diventa il suo nome
// pre ES6
let alienShip = {
  invade: function () {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};
// post ES6: posso rimuovere i : dopo la key quando il value è un method
alienShip = {
  invade() {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};

// pass by reference
let spaceshipTwo = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

const greenEnergy = obj => (obj['Fuel Type'] = 'avocado oil');
greenEnergy(spaceshipTwo);
const remotelyDisable = obj => (obj.disabled = true);
remotelyDisable(spaceshipTwo);

console.log(spaceshipTwo);

// for...in
spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}

// PRIVACY
// alcuni linguaggi hanno feature di default per il trattamento di oggetti che non devono essere modificati
// JS no
// si usa _ davanti al nome per indicare che qualcosa non deve essere mutato
// rimangono comunque modificabili (sono solo segnalati)
const bankAccount = {
  _amount: 1000,
};
// bankAccount._amount = 100000000

// GETTERS & SETTERS
// metodi per ottenere o modificare dei valori senza intaccarli veramente
// get, set: prima della funzione
// invocazione: come le proprietà, SENZA ()
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get energyLevel() {
    if (typeof this._energyLevel == 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  },
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};

console.log(robot.energyLevel);
robot.numOfSensors = 100; // riassegnare il numero di sensori e usare il metodo
console.log(robot.numOfSensors);
