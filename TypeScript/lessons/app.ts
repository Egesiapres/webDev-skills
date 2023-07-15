// * L3
const sum = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(sum(3, 5));

// * L4
// ? dynamic (JS) VS static (TS) typing
// let dynamicTyping = 'hi';
// dynamicTyping = 5;

let staticTyping: number = 6; // it can be just a number
staticTyping = 9;

// ? type assignment VS inference
// the data type is manually specified by me
const typeAssignment: string = 'hi';

const string = 'string';

const ta1: number = 1; // also dotted numbers
const ta2: string = `${string}`;
const ta3: boolean = true;

// also what we've done in the sum f

// the first value assigned determines the data type
let typeInference = 10;
// typeInference = 'ciao';

// * L5
// ? data types
// 1. object
const objTi = {
  name: 'Luke',
  surname: 'Skywalker',
};

// in JS you could access the property and the it finds an error
// in TS the error is retrieved immediately here
objTi.eta;
objTi.name = 3;

let objTa: {} = {
  // or : object
  name: 'Anakin',
  surname: 'Skywalker',
};

objTa.name; // objectAssignment no

let complexObjTa: {
  name: string;
  surname: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
  };
};

complexObjTa = {
  name: 'Obi One',
  surname: 'Kenobi',
  // there is no age
  age: 10,
  address: {
    street: '',
    number: 1,
    city: '',
  },
};

// instead to use a lot of params: obj with properties and their data types
function getData(data: { id: number; username: string; password: string }) {
  console.log(data.id);
}

const data = { id: 1, username: 'Luke', password: 'Force1!' };

getData(data); // cleaner

// 2. array
const arrTi = [1, 2, 3];
const arrTa: number[] = [4, 5, 6];
const arrTa1: string[] = ['', ''];
const arrTa2: any[] = ['', true, {}, []]; // everything you want

// ? 3. tuple: array with a fixed length
// new for JS users
// const tuple: [] = [1, 2] // I'm saying I want an empty arr
const tuple: [number, number] = [1, 2]; // just 2 elements, 2 numbers

const game = {
  id: '',
  acces_code: '',
  players: ['username1', 'username2'], // max 2 players
};

// L5
// ? 4. any
let any: any;
any = 'hi';
any = 5;

let any1: any[] = [4, 5];
let any2: [any, number] = ['', 8];

// ? 5. union |
// so many unions? better a any
const union: string | number | string[] = true;

// ? 6. custom type
// similar to classes
// avoids tons of code lines
// useful with objects
type PersonCustomType = {
  name: string;
  surname: string;
};

let person: PersonCustomType;

person = {
  name: 'Luke',
  surname: 'Skywalker',
};

function findPerson(person: PersonCustomType) {}

// ? 7. enum
// enumeration
// allow to create a ticket
enum Roles {
  ADMIN, // default = 0
  // "resetting the index" (affects just the following number)
  // the value can be also a string
  USER = 100,
  GUEST,
}

enum Roles1 {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

const person1 = {
  name: 'Luke',
  surname: 'Skywalker',
  role: Roles.ADMIN,
  role1: Roles1.ADMIN
};
