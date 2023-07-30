"use strict";
// * L3: typescript working explanation
const sum = (n1, n2) => {
    return n1 + n2;
};
console.log(sum(3, 5));
// * L4: string, number and boolean
// ? dynamic (JS) VS static (TS)
// let dynamicTyping = 'hi';
// dynamicTyping = 5;
let staticTyping = 6; // it can be just a number
staticTyping = 9;
// ? type assignment VS inference
// the data type is manually specified by me
const typeAssignment = 'hi';
const string = 'string';
const ta1 = 1; // also dotted numbers
const ta2 = `${string}`;
const ta3 = true;
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
// in JS you could access the property and the it finds an error
// in TS the error is retrieved immediately here
objTi.eta;
objTi.name = 3;
let objTa = {
    // or : object
    name: 'Anakin',
    surname: 'Skywalker',
};
objTa.name; // is specified objTa is an empty obj, so it could not have properties
let complexObjTa;
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
function getData(data) {
    console.log(data.id);
}
const data = { id: 1, username: 'Luke', password: 'Force1!' };
getData(data); // cleaner
// 2. array
const arrTi = [1, 2, 3];
const arrTa = [4, 5, 6];
const arrTa1 = ['', ''];
const arrTa2 = ['', true, {}, []]; // everything you want
// ? 3. tuple: array with a fixed length
// new for JS users
// const tuple: [] = [1, 2] // I'm saying I want an empty arr
const tuple = [1, 2]; // just 2 elements, 2 numbers
const game = {
    id: '',
    acces_code: '',
    players: ['username1', 'username2'], // max 2 players
};
// * L6: any, union, custom type and enum
// ? 4. any
let any;
any = 'hi';
any = 5;
let any1 = [4, 5];
let any2 = ['', 8];
// ? 5. union |
// so many unions? better a any
const union = true;
let person;
person = {
    name: 'Luke',
    surname: 'Skywalker',
};
function findPerson(person) { }
// ? 7. enum (enumeration)
// allow to create a ticket
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    // "resetting the index" (affects just the following number)
    // the value can be also a string
    Roles[Roles["USER"] = 100] = "USER";
    Roles[Roles["GUEST"] = 101] = "GUEST";
})(Roles || (Roles = {}));
var Roles1;
(function (Roles1) {
    Roles1["ADMIN"] = "admin";
    Roles1["USER"] = "user";
    Roles1["GUEST"] = "guest";
})(Roles1 || (Roles1 = {}));
const person1 = {
    name: 'Luke',
    surname: 'Skywalker',
    role: Roles.ADMIN,
    role1: Roles1.ADMIN,
};
// * L7: functions
function sum1(n1, n2 = 1) {
    return n1 + n2;
}
// ! reading the first line it's possible to understeand what the f does
// due to the inference of the default values, the value expected is a number
// the return value is inferred, it's a number
// ! any as return value when I have ifs and different things returned
sum1(5, 8);
// ! void when there's no value returned
function testVoid(v1) {
    console.log(v1);
}
let functionType;
functionType = sum1;
console.log(functionType(1, 9));
functionType = testVoid; // If i reassign the v to another f there is an error not retrieved
console.log(functionType(1, 1));
let functionType1;
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
// * L9: compiler: classes
class Person {
    constructor(name, surname) {
        (this.name = name), (this.surname = surname);
    }
    introYourself() {
        console.log(`Hi, I'm ${this.name} ${this.surname}`);
    }
    sayHello(person) {
        console.log(`Hi ${person.name} ${person.surname}, nice to meet you`);
    }
    changeSurname() { }
}
let person2;
person2 = new Person('Luke', 'Rossi');
console.log(person2);
const umberto = new Person('Umberto', 'Pasinetti');
umberto.introYourself();
// person2.sayHello('Umberto', 'Pasinetti')
person2.sayHello(umberto);
// ? public: to specify only in the constructor shorthand. The prop can change whenever u want
// ? private: the prop cannot change outside the class, neither inside a child class (It can, but using a class method, so, insiede the class)
// ? readonly: the property cannot change at all (useful for ids)
// ? protected: the prop cannot change outside the class, but it can inside a child class
person2.surname = 'Tirelli';
person2.changeSurname();
// ? constructor shorthand
// I can omit the this. part and constructor part
class PersonShorthand {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    introYourself() {
        console.log(`Hi, I'm ${this.name} ${this.surname} and I'm ${this.age} years old`);
    }
    changeInfo() {
        (this.name = 'A'), (this.surname = 'B');
        this.age = 4;
    }
    // it can be called from the class, NOT from the class instance
    static staticMethod() { }
}
let emma = new PersonShorthand('Emma', 'Franchino', 22);
emma.introYourself();
class StudentShorthand extends PersonShorthand {
    constructor(name, surname, age, favSubject) {
        super(name, surname, age);
        this.favSubject = favSubject;
    }
    change() {
        (this.name = 'miao'), (this.surname = 'bauuu');
    }
}
const studentShorthand = new StudentShorthand('Student name', 'Student surname', 15, 'Geometry');
PersonShorthand.staticMethod();
// abstract classes cannot be instanciated
// ! useful as template for the child classes
// if a method is abstract, it cannot be omitted in a child class
class Prova {
}
const prova = new Prova();
// ? singleton: just 1 instance creable
class Director {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
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
