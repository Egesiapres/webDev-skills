// HOW TO USE A PROMISE

// setTimeout(callback, 1000)
// NodeAPI (similar to the API provided by web browsers)
// parameters: cb f and a delay in ms
// in a common use, th cb f is a normal f

// using setTimeout() to construct asynchronous promises
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code

const usingSTO = () => {
  console.log('This is the first line of ASYNCHRONOUS code in app.js');
}

setTimeout(usingSTO, 2500);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
