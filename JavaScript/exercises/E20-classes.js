console.log('------ %c: Classes 🏭', 'font-weight: bold;');

// E1
console.log(
  'E1: create a "Person" class with first and last name properties. Add a "greeting" method that prints a greeting with the first and last name'
);

class Person {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }

  greeting() {
    console.log(`Hi, my name is ${this.name} ${this.surname}`);
  }
}

const giovanni = new Person('Giovanni', 'Pasinetti');
giovanni.greeting();

// E2
console.log(
  'E2: create a class "Car" with properties make and year of production. Add a "details" method to the "Car" class that prints the details of the car'
);

class Car {
  constructor(make, year) {
    (this.make = make), (this.year = year);
  }

  getDetails() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

const renaultCar = new Car('Renault', 2001);
renaultCar.getDetails();

// E3
console.log(
  'E3: create a class "Circle" with radius property and a method to calculate area'
);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    const circleArea = Math.PI * (this.radius * this.radius);

    console.log(
      `Being the circle radius ${this.radius}, its area is`,
      circleArea
    );
  }

  calculateArea2() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(3);
circle.calculateArea();

const circle2 = new Circle(5);
const circle2Area = circle2.calculateArea2();
console.log("L'area del cerchio misura:", circle2Area);

// E4
console.log(
  'E4: create a class "Book" with title and author properties. Add a "details" method to the "Book" class that prints the details of the book'
);

class Book {
  constructor(title, author) {
    (this.title = title), (this.author = author);
  }

  getDetails() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

const book = new Book("Harry Potter and the Sorcerer's stone", 'J. K. Rowling');
book.getDetails();

// E5
console.log(
  'E5: create a class "Student" with properties first name, last name, and an array of grades. Add an "addVote" method to the "Student" class that allows a grade to be added to the grades array'
);

class Student {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname), (this.grades = []);
  }

  addGrade(newGrade) {
    const newGrades = [...this.grades, newGrade];

    this.grades = newGrades;
  }
}

const student = new Student('Emma', 'Franchino');
console.log(student.grades);
student.addGrade(10);
student.addGrade(9);
console.log(student.grades);

// E6
console.log(
  'E6: create a class "Product" with properties name, price and a method to apply a discount to the price'
);

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  applyDiscount(discountPercentage) {
    const discountValue = (this.price * discountPercentage) / 100;
    return this.price - discountValue;
    // this.price -= discountValue
  }
}

const iPhone = new Product('iPhone', 1000);
console.log('Entire price:', iPhone.price);
const discountedPrice = iPhone.applyDiscount(30);
console.log('Discounted price:', discountedPrice);

// E7
console.log(
  'E7: create a class "Point" with x and y properties, and a method to calculate the distance from the point to the origin'
);

class Point {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }

  calcDistanceFromOrigin() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const point = new Point(1, 2);
const pointDistance = point.calcDistanceFromOrigin();
console.log('Point distance from origin', pointDistance);

// E8
console.log(
  'E8: create a class "Rectangle" with base and height properties, and a method to calculate the area'
);

class Rectangle {
  constructor(base, height) {
    (this.base = base), (this.height = height);
  }

  calculateArea() {
    return this.base * this.height;
  }
}

const rectangle = new Rectangle(4, 5);
const rectangleArea = rectangle.calculateArea();
console.log("Rectangle area:", rectangleArea);

// E9
console.log(
  'E9: create a class "User" with properties first name, last name and a method to generate the email address'
);

class User {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }

  generateEmailAddress(emailDomain) {
    return `${this.name.toLowerCase()}.${this.surname.toLowerCase()}@${emailDomain}.${(emailDomain =
      'gmail' ? 'com' : 'it')}`;
  }
}

const user = new User('Umberto', 'Pasinetti');
const userEmail = user.generateEmailAddress('gmail');
console.log('Indirizzo e-mail:', userEmail);

// E10
console.log(
  'E10: create a class "Triangle" with base and height properties, and a method to calculate the area'
);

class Triangle {
  constructor(base, height) {
    (this.base = base), (this.height = height);
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

const triangle = new Triangle(6, 7);
const triangleArea = triangle.calculateArea();
console.log('Triangle area:', triangleArea);
