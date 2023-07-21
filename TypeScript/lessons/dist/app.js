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
