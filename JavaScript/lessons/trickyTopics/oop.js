console.log('------ %c2: OOP', 'font-weight: bold');

// ! OOP keywords
// * class
// * extends
// * new
// * constructor
// * super
// invokes the constructor and the methods of the parent class
// it has to be called if the constructor has been called in a child class
// (to correctly initialize the object)
// * this
// inside an obj, inside f: object properties (if not in a f, it refers to outside the obj)
// outside an obj: window object
// * static vs public
// STATIC: (or private?) method that is called on a class (not on an instance)
// PUBLIC: all the other methods (no keyword before their name)
// * this._example
// _ means that a property is private, so that is not accessible from the outside of the class
// its just a convention, JS does not provide a way to make properties private
// * get
// method to retrieve a property (ex: person.name)
// * set
// method to modify a property (ex person.name = 'Umberto')
// * instanceof
// * typeof

// ! SOLID principles
// ? improve maintainability, flexibility and quality of the code
// * S: single responsiblity
// a class should have just one reason (responsibility), to be modified
// TIP: divide functionalities into different classes
// * O: open/closed
// the sw entities (classes, f...) should be open to extension but closed to changes
// TIP: you should add new features without modifying the existing code
// * L: Liskov substitution
// TIP: a child class should be used instead of its parent class without problems
// * I: interface segregation
// TIP: divide small interfaces into tiny ones
// * D: dependency inversion
// high order classes should not depend on low order classes
// both should depends on abstractions (interfaces, or abstract base classes)
// TIP: this principle encourages the dipendencies abstraction

// ? binding

class Vehicle {
  constructor(model, wheels, seats, engine, weight) {
    (this._model = model), (this._wheels = wheels);
    this._seats = seats;
    this._engine = engine;
    this._weight = weight;
  }

  // getters
  get model() {
    return this._model;
  }

  get wheels() {
    return this._wheels;
  }

  get seats() {
    return this._seats;
  }

  get engine() {
    return this._engine;
  }

  get weight() {
    return this._weight;
  }

  // setters
  set model(newModel) {
    if (typeof newModel === 'string' || typeof newModel === 'object') {
      this._model = newModel;
    } else {
      console.log('The model provided is an incorrect data type');
    }
  }

  set weight(newWeight) {
    if (newWeight >= 1000) {
      this._weight = newWeight;
    } else {
      console.log('The vehicle is too light to be a car!');
    }
  }

  static classDescription() {
    console.log('This class represents a vehicle');
  }

  vehicleDescription() {
    return `This is a ${this._model.name}, an ${this._model.producer.nationality} ${this._model.type} produced by ${this._model.producer.name}. This ${this._model.year} model has ${this._engine.horsePower} HP, is ${this._engine.fuel} fueled, and it weights aroud ${this._weight} kg. It has ${this._seats} seats.`;
  }
}

class Car extends Vehicle {
  constructor(model, wheels, seats, engine, weight, doors) {
    super(model, wheels, seats, engine, weight);
    this._doors = doors;
  }

  get doors() {
    return this._doors;
  }
}

class Motorbike extends Vehicle {
  constructor(model, wheels, seats, engine, weight) {
    super(model, wheels, seats, engine, weight);
  }
}

Vehicle.classDescription();

const car = new Car(
  {
    type: 'car',
    name: '500',
    producer: { name: 'FIAT', nationality: 'italian' },
    year: 2007,
  },
  4,
  4,
  { horsePower: 69, fuel: 'gasoline', cylinders: 4 },
  1200,
  3
);
console.log(car);
console.log('car is an', typeof car);
console.log('Is car an instance of Car?', car instanceof Car);
console.log('Is car an instance of Vehicle?', car instanceof Vehicle);
console.log('Is Car an instance of Vehicle?', Car instanceof Vehicle);

// how to trigger getters
console.log(car.model);
console.log(car.wheels);
console.log(car.seats);
console.log(car.engine);
console.log(car.weight);
console.log(car.doors);

// how to trigger setters
car.model = 'Panda';
console.log(car.model);

car.model = {
  type: 'car',
  name: 'Panda',
  producer: { name: 'FIAT', nationality: 'italian' },
  year: 1980,
};
console.log(car.model);
console.log(typeof car.model);

car.weight = 50;
car.weight = 1050;
car.weight = 50;
console.log(car.weight);

console.log(Object.prototype.toString(car));

const carDescription = car.vehicleDescription();
console.log(carDescription);
