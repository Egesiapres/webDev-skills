// * L3: typescript working explanation
const sum = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(sum(3, 5));

// * L4: string, number and boolean
// ? dynamic (JS) VS static (TS)
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

// * L5: object, array and tuple
// 1. object
const objTi = {
  name: 'Luke',
  surname: 'Skywalker',
};

// in JS you could access the property and then it finds an error
// in TS the error is retrieved immediately here
objTi.eta;
objTi.name = 3;

let objTa: {} = {
  // or : object
  name: 'Anakin',
  surname: 'Skywalker',
};

objTa.name; // is specified objTa is an empty obj, so it could not have properties

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

// instead of using a lot of params: obj with properties and their data types
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
  access_code: '',
  players: ['username1', 'username2'], // max 2 players
};

// * L6: any, union, custom type and enum
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

// ? 7. enum (enumeration)
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
  role1: Roles1.ADMIN,
};

// * L7: functions
function sum1(n1: number, n2 = 1): number {
  return n1 + n2;
}

// ! reading the first line it's possible to understand what the f does
// due to the inference of the default values, the value expected is a number
// the return value is inferred, it's a number
// ! any as return value when I have ifs and different things returned
sum1(5, 8);

// ! void when there's no value returned
function testVoid(v1: string): void {
  console.log(v1);
}

let functionType: Function;
functionType = sum1;

console.log(functionType(1, 9));

functionType = testVoid; // If i reassign the v to another f there is an error not retrieved
console.log(functionType(1, 1));

let functionType1: (x: number, y: number) => number;
// testVoid parameters are not numbers

// function test(x: number, cb: () => void{}){}

// * L8: compiler
// ? avoid continuously running tsc app.ts (1 file)
// ! tsc app.ts -w (o --watch)

// ? compile the entire project (1+ files)
// (not creating a different watch mode for each file)
// ! tsc init
// ! tsc -w
// generates a json

// from the json I can exclude certain files
// same thing with include

// ? some useful json settings
// compilation target: es5/6...

// check with the compiler also the js files
// (generating the json and activating these lines)
// "allowJs": true,
// "checkJs": true,
// ! or use the ts bonus features in a js project

// see the app.ts file in the source tab (dev tools)
// "sourceMap": true,

// folders to retrieve the project
// "rootDir": "./"
// "rootDirs": [],

// folder where the project is outputted
// "outDir": "./",

// * L9: classes
class Person {
  private name: string;
  private surname: string;

  constructor(name: string, surname: string) {
    (this.name = name), (this.surname = surname);
  }

  introYourself(): void {
    console.log(`Hi, I'm ${this.name} ${this.surname}`);
  }

  sayHello(person: Person): void {
    console.log(`Hi ${person.name} ${person.surname}, nice to meet you`);
  }

  changeSurname() {}
}

let person2: Person;
person2 = new Person('Luke', 'Rossi');
console.log(person2);

const umberto: Person = new Person('Umberto', 'Pasinetti');
umberto.introYourself();
// person2.sayHello('Umberto', 'Pasinetti')
person2.sayHello(umberto);

// ? public: to specify only in the constructor shorthand. The prop can change whenever u want
// ? private: the prop cannot change outside the class, neither inside a child class (It can, but using a class method, so, inside the class)
// ? readonly: the property cannot change at all (useful for ids)
// ? protected: the prop cannot change outside the class, but it can inside a child class
person2.surname = 'Tirelli';
person2.changeSurname();

// ? constructor shorthand
// I can omit the this. part and constructor part
class PersonShorthand {
  constructor(
    private name: string,
    protected surname: string,
    readonly age: number
  ) {}

  introYourself(): void {
    console.log(
      `Hi, I'm ${this.name} ${this.surname} and I'm ${this.age} years old`
    );
  }

  changeInfo() {
    (this.name = 'A'), (this.surname = 'B');
    this.age = 4;
  }

  // it can be called from the class, NOT from the class instance
  static staticMethod() {}
}

let emma: PersonShorthand = new PersonShorthand('Emma', 'Franchino', 22);
emma.introYourself();

class StudentShorthand extends PersonShorthand {
  constructor(
    name: string,
    surname: string,
    age: number,
    private favSubject: string
  ) {
    super(name, surname, age);
  }

  change() {
    (this.name = 'miao'), (this.surname = 'bauuu');
  }
}

const studentShorthand: StudentShorthand = new StudentShorthand(
  'Student name',
  'Student surname',
  15,
  'Geometry'
);

PersonShorthand.staticMethod();

// abstract classes cannot be instanciated
// ! useful as template for the child classes
// if a method is abstract, it cannot be omitted in a child class
abstract class Prova {}

const prova: Prova = new Prova();

// ? singleton: just 1 instance creable
class Director {
  private static instance: Director;

  private constructor(private name: string, private surname: string) {}

  static getInstance() {
    if (Director.instance) {
      return this.instance;
    }

    this.instance = new Director('Mario', 'Rossi');
    return this.instance;
  }

  presenta() {
    console.log(`Good morning, I'm the director ${this.name} ${this.surname}`);
  }
}

// const preside: Preside = new Preside('Mario', 'Rossi');
Director.getInstance().presenta();

// * L10: interfaces
// implemented into classes
// are tools to do things
// not present in JS

// interface VS abstract class
interface Prova {
  readonly name: string;
  saluta(): void;
  // abstract saluta(): void
}

interface Qwerty {
  scrivi(): void;
}

abstract class x {
  saluta() {}
  abstract prova(): void;
}

// interface VS custom type
// interface into classes to add functionalities
// custom type per tipi più complessi
type Provaa = {
  name: string;
  saluta(): void;
};

type Provaaa = string | number | {};

class y implements Prova, Qwerty {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  scrivi(): void {
    throw new Error('Method not implemented.');
  }

  saluta(): void {
    console.log('ciao');
  }
}

// derivo dalla classe madre
// implemento però più strumenti attraverso le interfacce

abstract class Device {
  constructor(protected name: string, protected year: number) {}

  abstract turnOn(): void;
  abstract turnOff(): void;
}

interface Internet {
  ip: string;
  connectToInternet(): void;
}

class Phone extends Device {
  turnOn(): void {
    console.log('The phone is turning on...');
  }

  turnOff(): void {
    console.log('The phone is turning off...');
  }
}

class Smartphone extends Device implements Internet {
  ip: string;

  constructor(name: string, year: number, ip: string) {
    super(name, year);
    this.ip = ip;
  }

  turnOn(): void {
    console.log('The smartphone is turning on...');
  }

  turnOff(): void {
    console.log('The smartphone is turning off...');
  }

  connectToInternet(): void {
    console.log('The smartphone is connecting to internet');
  }
}

class Computer extends Device implements Internet {
  ip: string;

  constructor(name: string, year: number, ip: string) {
    super(name, year);
    this.ip = ip;
  }

  turnOn(): void {
    console.log('The computer is turning on...');
  }

  turnOff(): void {
    console.log('The computer is turning off...');
  }

  connectToInternet(): void {
    console.log('The computer is connecting to internet');
  }
}

// interfaces extending other interfaces
// just interfaces can extend multiple interfaces
// classes no
interface Interface1 {
  name: string;
  eat(): void;
}

interface Interface2 extends Interface1 {
  surname: string;
  breath(): void;
}

interface Interface3 extends Interface2 {
  phone: string;
  sayHello(): void;
}

interface Interface4 extends Interface2, Interface3 {
  street: string;
}

class Persona implements Interface4 {
  street: string;
  surname: string;
  name: string;
  phone: string;

  constructor(street: string, surname: string, name: string, phone: string) {
    this.street = street;
    this.surname = surname;
    this.name = name;
    this.phone = phone;
  }

  breath(): void {
    throw new Error('Method not implemented.');
  }

  eat(): void {
    throw new Error('Method not implemented.');
  }

  sayHello(): void {
    throw new Error('Method not implemented.');
  }
}

// * L11: generics
// instrument that allow to create reusable components
// generics built-in
const noGenericsArr: string[] = ['umberto', 'emma'];
const genericsArr: Array<string> = ['pasinetti', 'franchino'];
// the type can change
// i can add one or more generic types
// using extends I can add constraints
function createArray<T extends number | string>(items: T[]): T[] {
  return new Array().concat(items);
}

// it understands we're dealing with numbers or strings
// or the datatype needed
const arr1 = createArray<number>([1, 2, 3, 4]);

// class that generates lists of different things
// T is a generic type that can change (similar ad an argument)
class Test<T> {
  private list: T[] = [];

  addItem(item: T) {
    this.list.push(item);
  }

  removeItem(item: T) {
    this.list.splice(this.list.indexOf(item, 1));
  }
}

const stringList = new Test<string>();
stringList.addItem('nabil');
stringList.addItem('livia');
stringList.addItem('sofia');
stringList.removeItem('sofia');

const numberList = new Test<number>();
numberList.addItem(1);
