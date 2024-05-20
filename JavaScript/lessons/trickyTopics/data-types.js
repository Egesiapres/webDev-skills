console.log(' ');
console.log(' ');
console.log('%cTRICKY TOPICS', 'font-weight: bold; color: red')
console.log('------ %c1: Data types', 'font-weight: bold');

// * Primitive
// 1. string
// 2. number
// 3. big int
// 4. boolean
// 5. null
// 6. undefined
// 7. symbol

// * Reference
// 1. objects
// 2. array
// 3. function
// 4. date
// 5. regular expression
// 6. custom (using classes)

// !! DIFFERENCE: the way in which they're stored/referred to in the memory
// Primitive:
// Passed by value (they're copied).
// (When you assign a p dt to a variable or pass it as an argument to a function)you work on a copy, the original variable will not be affected
let x = 10;
let y = x; // Here, the value of x (10) is copied to y
y = 20; // Modifying y does not affect x
console.log(x); // Output: 10
console.log(y); // Output: 20

// Reference: 
// Passed by reference. 
// You actually work with a reference that points to the original object in memory.
let obj1 = { name: "John" };
let obj2 = obj1; // Here, obj2 references the same object as obj1
obj2.name = "Jane"; // Modifying obj2 also modifies obj1
console.log(obj1.name); // Output: "Jane"
console.log(obj2.name); // Output: "Jane"

let dog = 'alano';
console.log(dog);

dog = 'carlino';
console.log(dog);

const dogName = "Armando";
// dogName = 'Piero';
console.log(dogName);

let dataType = 'ciao';
dataType = 3;
dataType = 3.7238738178378278172;
dataType = true;
dataType = null;
dataType = undefined;
// symbol

dataType = {
  name: 'Emma',
  surname: 'Franchino',
  fullName(){
    return `${this.name} ${this.surname}`
  },
  age: 22,
  work: {
    employed: true,
    job: 'waitress',
  },
  interests: ['psychology', 'sleep', 'music'],
  shortIntro() {
    console.log(
      `Hi, my name is ${this.fullName()} and I'm ${this.age} years old. I${
        this.work.employed === true ? 'm' : 'am not'
      } employed as ${
        this.work.job
      }. Despite of this, my main interests are ${this.interests.map((el, i) =>
        i < this.interests.length ? el + ',' : el
      )}`
    );
  },
};

console.log(dataType.fullName());
dataType.shortIntro();

const body = window.document.querySelector('body');
console.log(body);
console.log(this.document);
// const window = window.document.querySelector('window');
// console.log(window);
