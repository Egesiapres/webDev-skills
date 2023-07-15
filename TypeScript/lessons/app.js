// * L3
var sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(3, 5));
// * L4
// ? dynamic (JS) VS static (TS) typing
// let dynamicTyping = 'hi';
// dynamicTyping = 5;
var staticTyping = 6; // it can be just a number
staticTyping = 9;
// ? type assignment VS inference
// the data type is manually specified by me
var typeAssignment = 'hi';
var string = 'string';
var ta1 = 1; // also dotted numbers
var ta2 = "".concat(string);
var ta3 = true;
// also what we've done in the sum f
// the first value assigned determines the data type
var typeInference = 10;
// typeInference = 'ciao';
// * L5
// ? data types
// 1. object
var objTi = {
    name: 'Luke',
    surname: 'Skywalker',
};
// in JS you could access the property and the it finds an error
// in TS the error is retrieved immediately here
objTi.eta;
objTi.name = 3;
var objTa = {
    // or : object
    name: 'Anakin',
    surname: 'Skywalker',
};
objTa.name; // objectAssignment no
var complexObjTa;
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
var data = { id: 1, username: 'Luke', password: 'Force1!' };
getData(data); // cleaner
// 2. array
var arrTi = [1, 2, 3];
var arrTa = [4, 5, 6];
var arrTa1 = ['', ''];
var arrTa2 = ['', true, {}, []]; // everything you want
// ? 3. tuple: array with a fixed length
// new for JS users
// const tuple: [] = [1, 2] // I'm saying I want an empty arr
var tuple = [1, 2]; // just 2 elements, 2 numbers
var game = {
    id: '',
    acces_code: '',
    players: ['username1', 'username2'], // max 2 players
};
// L5
// ? 4. any
var any;
any = 'hi';
any = 5;
var any1 = [4, 5];
var any2 = ['', 8];
// ? 5. union |
// so many unions? better a any
var union = true;
var person;
person = {
    name: 'Luke',
    surname: 'Skywalker',
};
function findPerson(person) { }
// ? 7. enum
// enumeration
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
var person1 = {
    name: 'Luke',
    surname: 'Skywalker',
    role: Roles.ADMIN,
    role1: Roles1.ADMIN
};
