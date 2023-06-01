const { checkInventory } = require('./3-thenCatch2.js');

const order = [
  ['sunglasses', 1],
  ['bags', 2],
];

// Write your code below:
const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
};

const handleFailure = rejectedValue => {
  console.log(rejectedValue);
};

// NO: only .then syntax
// checkInventory(order).then(handleSuccess, handleFailure);

// YES: .then & .catch syntax
checkInventory(order).then(handleSuccess).catch(handleFailure);
