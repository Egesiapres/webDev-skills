/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = radiusLength => {
  return PI * radiusLength ** 2;
};

const squareArea = sideLength => {
  return sideLength ** 2;
};

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
