console.log(' ');
console.log(' ');
console.log('%cTRICKY TOPICS', 'font-weight: bold; color: red')
console.log('------ %c1: Data types', 'font-weight: bold');

// * Primitive
// string
// number
// big int
// boolean
// null
// unefined
// symbol

// * Reference
// objects 

let dog = 'alano';
console.log(dog);

dog = 'carlino';
console.log(dog);

const dogName = "Armando";
// dogName = 'Piero';
console.log(dogName);

let dataType = 'ciao';
dataType = true;
dataType = 3;
dataType = 3.7238738178378278172;
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
        i < this.interests.lenght ? el + ',' : el
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
