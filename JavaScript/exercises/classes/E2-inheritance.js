console.log('------ %c2: Inheritance 👶🏻', 'font-weight: bold;');

// E1
console.log(
  'E1: create a class "Vehicle" with properties "make" and "year of production." Next, create a class "Automobile" that inherits from the class "Vehicle" and has an additional property "model"'
);

class Vehicle {
  constructor(make, year) {
    (this.make = make), (this.year = year);
  }
}

class Car1 extends Vehicle {
  constructor(make, year, model) {
    super(make, year);
    this.model = model;
  }
}

const peugeoutCar = new Car1('Peugeot', 2001, 206);
console.log(peugeoutCar);
console.log(peugeoutCar.make, peugeoutCar.year, peugeoutCar.model);
console.log(peugeoutCar instanceof Car1);
console.log(Object.prototype.toString(Car1));

// E2
console.log(
  'E2: create an "Animal" class with property "name" and a method "verse" that returns the verse of the animal. Next, create a class "Dog" that inherits from the class "Animal" and has an additional property "breed"'
);

class Animal {
  constructor(name) {
    this.name = name;
  }

  verse(verse) {
    return verse;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog('Snow', 'Husky');
console.log(dog);
const dogVerse = dog.verse('Bauuuuuuuuuu!!!');
console.log(dogVerse);

// E3
console.log(
  'E3: create a class "Person" with properties "first name" and "last name." Next, create a "Student" class that inherits from the "Person" class and has an additional property "courseOfStudies"'
);

class Person1 {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }
}

class Student1 extends Person1 {
  constructor(name, surname, courseOfStudies) {
    super(name, surname);
    this.courseOfStudies = courseOfStudies;
  }
}

const student1 = new Student1('Matteo', 'Verdi', 'Ingegneria informatica');
console.log(student1.name, student1['surname'], student1['courseOfStudies']);

// E4
console.log(
  'E4: create a class "Shape" with method "calculateArea". Next, create a "Rectangle" class that inherits from the "Shape" class and has "base" and "height" properties and implements the "calculateArea" method to calculate the area of the rectangle'
);

class Shape {
  calculateArea() {
    return this.base * this.height;
  }
}

class Rectangle1 extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
}

const rectangle1 = new Rectangle1(7, 8);
const rectangle1Area = rectangle1.calculateArea();
console.log('Rectabgle area:', rectangle1Area);

// E5
console.log(
  'E5: create a class "Vehicle" with method "accelerate". Next, create an "Automobile" class that inherits from the "Vehicle" class and has a "soundClacson" method in addition to the "accelerate" method'
);

class Vehicle1 {
  accelerate() {
    console.log('Vehicle in acceleration...');
  }
}

class Car2 extends Vehicle1 {
  accelerate() {
    console.log('Car in acceleration...');
  }

  soundClaclson() {
    console.log('Beep beep');
  }
}

const car1 = new Car2();
car1.soundClaclson();

// E6
console.log(
  'E6: create an "Animal" class with method "verse". Next, create a "Cat" class that inherits from the "Animal" class and overrides the "verso" method to return the cat\'s verso'
);

class Animal1 {
  verse() {
    console.log('Animal verse');
  }
}

class Cat extends Animal1 {
  verse() {
    console.log('Miaooo');
  }
}

const cat = new Cat();
cat.verse();

// E7
console.log(
  'E7: create a "Person" class with the "greeting" method. Then, create a "Student" class that inherits from the "Person" class and override the "greeting" method to add the course of study in the greeting'
);

class Person3 {
  greeting() {
    console.log('Hellooo!');
  }
}

class Student2 extends Person3 {
  constructor(name, faculty) {
    super();
    (this.name = name), (this.faculty = faculty);
  }

  greeting() {
    console.log(`Hi, I'm ${this.name}, and I'm a ${this.faculty} student`);
  }
}

const student2 = new Student2('Mario', 'Philosphy');
student2.greeting();

// E8
console.log(
  'E8: create a "Vehicle" class with a "startEngine" method. Next, create a "Motorcycle" class that inherits from the "Vehicle" class and has a "ride" method in addition to the "startMotor" method'
);

class Vehicle2 {
  startEngine() {
    console.log('Engine started');
  }
}

class Motorbike extends Vehicle2 {
  ride() {
    console.log('Riding the motorbike');
  }
}

const motorbike = new Motorbike();
motorbike.startEngine();
motorbike.ride();

// E9
console.log(
  'E9: create a class "Shape" with method "calculateArea". Next, create a "Circle" class that inherits from the "Shape" class and has a "radius" property and implements the "calculateArea" method to calculate the area of the circle'
);

class Shape1 {
  calculateArea() {
    console.log('Area sconosciuta')
  }
}

class Circle1 extends Shape1 {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea(){
    const area = Math.PI * Math.pow(this.radius, 2)
    console.log('Area del cerchio:', area)
  }
}

const circle1 = new Circle1(5);
circle1.calculateArea();