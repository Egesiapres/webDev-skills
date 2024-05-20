var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// * L3: typescript working explanation
var sum = function (n1, n2) {
    return n1 + n2;
};
console.log(sum(3, 5));
// * L4: string, number and boolean
// ? dynamic (JS) VS static (TS)
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
// * L5: object, array and tuple
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
objTa.name; // is specified objTa is an empty obj, so it could not have properties
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
// instead of using a lot of params: obj with properties and their data types
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
    access_code: '',
    players: ['username1', 'username2'], // max 2 players
};
// * L6: any, union, custom type and enum
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
var person1 = {
    name: 'Luke',
    surname: 'Skywalker',
    role: Roles.ADMIN,
    role1: Roles1.ADMIN,
};
// * L7: functions
function sum1(n1, n2) {
    if (n2 === void 0) { n2 = 1; }
    return n1 + n2;
}
// ! reading the first line it's possible to understand what the f does
// due to the inference of the default values, the value expected is a number
// the return value is inferred, it's a number
// ! any as return value when I have ifs and different things returned
sum1(5, 8);
// ! void when there's no value returned
function testVoid(v1) {
    console.log(v1);
}
var functionType;
functionType = sum1;
console.log(functionType(1, 9));
functionType = testVoid; // If i reassign the v to another f there is an error not retrieved
console.log(functionType(1, 1));
var functionType1;
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
var Person = /** @class */ (function () {
    function Person(name, surname) {
        (this.name = name), (this.surname = surname);
    }
    Person.prototype.introYourself = function () {
        console.log("Hi, I'm ".concat(this.name, " ").concat(this.surname));
    };
    Person.prototype.sayHello = function (person) {
        console.log("Hi ".concat(person.name, " ").concat(person.surname, ", nice to meet you"));
    };
    Person.prototype.changeSurname = function () { };
    return Person;
}());
var person2;
person2 = new Person('Luke', 'Rossi');
console.log(person2);
var umberto = new Person('Umberto', 'Pasinetti');
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
var PersonShorthand = /** @class */ (function () {
    function PersonShorthand(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    PersonShorthand.prototype.introYourself = function () {
        console.log("Hi, I'm ".concat(this.name, " ").concat(this.surname, " and I'm ").concat(this.age, " years old"));
    };
    PersonShorthand.prototype.changeInfo = function () {
        (this.name = 'A'), (this.surname = 'B');
        this.age = 4;
    };
    // it can be called from the class, NOT from the class instance
    PersonShorthand.staticMethod = function () { };
    return PersonShorthand;
}());
var emma = new PersonShorthand('Emma', 'Franchino', 22);
emma.introYourself();
var StudentShorthand = /** @class */ (function (_super) {
    __extends(StudentShorthand, _super);
    function StudentShorthand(name, surname, age, favSubject) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.favSubject = favSubject;
        return _this;
    }
    StudentShorthand.prototype.change = function () {
        (this.name = 'miao'), (this.surname = 'bauuu');
    };
    return StudentShorthand;
}(PersonShorthand));
var studentShorthand = new StudentShorthand('Student name', 'Student surname', 15, 'Geometry');
PersonShorthand.staticMethod();
// abstract classes cannot be instanciated
// ! useful as template for the child classes
// if a method is abstract, it cannot be omitted in a child class
var Prova = /** @class */ (function () {
    function Prova() {
    }
    return Prova;
}());
var prova = new Prova();
// ? singleton: just 1 instance creable
var Director = /** @class */ (function () {
    function Director(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Director.getInstance = function () {
        if (Director.instance) {
            return this.instance;
        }
        this.instance = new Director('Mario', 'Rossi');
        return this.instance;
    };
    Director.prototype.presenta = function () {
        console.log("Good morning, I'm the director ".concat(this.name, " ").concat(this.surname));
    };
    return Director;
}());
// const preside: Preside = new Preside('Mario', 'Rossi');
Director.getInstance().presenta();
var x = /** @class */ (function () {
    function x() {
    }
    x.prototype.saluta = function () { };
    return x;
}());
var y = /** @class */ (function () {
    function y(name) {
        this.name = name;
    }
    y.prototype.scrivi = function () {
        throw new Error('Method not implemented.');
    };
    y.prototype.saluta = function () {
        console.log('ciao');
    };
    return y;
}());
// derivo dalla classe madre
// implemento però più strumenti attraverso le interfacce
var Device = /** @class */ (function () {
    function Device(name, year) {
        this.name = name;
        this.year = year;
    }
    return Device;
}());
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phone.prototype.turnOn = function () {
        console.log('The phone is turning on...');
    };
    Phone.prototype.turnOff = function () {
        console.log('The phone is turning off...');
    };
    return Phone;
}(Device));
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(name, year, ip) {
        var _this = _super.call(this, name, year) || this;
        _this.ip = ip;
        return _this;
    }
    Smartphone.prototype.turnOn = function () {
        console.log('The smartphone is turning on...');
    };
    Smartphone.prototype.turnOff = function () {
        console.log('The smartphone is turning off...');
    };
    Smartphone.prototype.connectToInternet = function () {
        console.log('The smartphone is connecting to internet');
    };
    return Smartphone;
}(Device));
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer(name, year, ip) {
        var _this = _super.call(this, name, year) || this;
        _this.ip = ip;
        return _this;
    }
    Computer.prototype.turnOn = function () {
        console.log('The computer is turning on...');
    };
    Computer.prototype.turnOff = function () {
        console.log('The computer is turning off...');
    };
    Computer.prototype.connectToInternet = function () {
        console.log('The computer is connecting to internet');
    };
    return Computer;
}(Device));
var Persona = /** @class */ (function () {
    function Persona(street, surname, name, phone) {
        this.street = street;
        this.surname = surname;
        this.name = name;
        this.phone = phone;
    }
    Persona.prototype.breath = function () {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.eat = function () {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.sayHello = function () {
        throw new Error('Method not implemented.');
    };
    return Persona;
}());
// * L11: generics
// instrument that allow to create reusable components
// generics built-in
var noGenericsArr = ['umberto', 'emma'];
var genericsArr = ['pasinetti', 'franchino'];
// the type can change
// i can add one or more generic types
// using extends I can add constraints
function createArray(items) {
    return new Array().concat(items);
}
// it understands we're dealing with numbers or strings
// or the datatype needed
var arr1 = createArray([1, 2, 3, 4]);
// class that generates lists of different things
// T is a generic type that can change (similar ad an argument) 
var Test = /** @class */ (function () {
    function Test() {
        this.list = [];
    }
    Test.prototype.addItem = function (item) {
        this.list.push(item);
    };
    Test.prototype.removeItem = function (item) {
        this.list.splice(this.list.indexOf(item, 1));
    };
    return Test;
}());
var stringList = new Test();
stringList.addItem('nabil');
stringList.addItem('livia');
stringList.addItem('sofia');
stringList.removeItem('sofia');
var numberList = new Test();
numberList.;
