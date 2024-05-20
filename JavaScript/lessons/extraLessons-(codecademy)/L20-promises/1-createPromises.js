// HOW TO CONSTRUCT A PROMISE

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// unlike L20
// the custom f has been defined separately
// custom f parameters, resolve and reject, are not defined by the programmer
// (they're built-in in JS)
const myExecutor = (resolve, reject) => {
  inventory.sunglasses > 0 ? resolve('Sunglasses order processed.') : reject('That item is sold out.')
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);

// NOTE:
// to make this file work in node runTime environment:
// node 'nameOfTheFile'
// example: node L20-promises.js