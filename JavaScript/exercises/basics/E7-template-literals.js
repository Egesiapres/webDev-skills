console.log('------ %c7: Template literals 🏛️', 'font-weight: bold');

// E1
console.log('E1: Write a program that uses a literal template to create a string that includes the value of a variable and prints the result on the console');

const techGadget = 'apple watch';

console.log(`I have a new ${techGadget}`);

// E2
console.log('E2: Write a program that uses a literal template to calculate and print the result of a sum between two variables on the console');

const num1 = 6363;
const num2 = 71662;

console.log(`The sum between ${num1} and ${num2} is ${num1 + num2}`);

// E3
console.log('E3: Write a program that uses a literal template to show a person\'s name, age, and city on several rows in the console');

const nameE = 'Emma';
const ageE = 22;
const cityE = 'Barcelona';

console.log(`
Name: ${nameE},
Age: ${ageE}
City: ${cityE}`);

// E4
console.log('E4: Write a program that uses a literal template to create an HTML list with dynamic elements and prints the result on the console');

const fruits = ['apple', 'banana', 'orange'];
let HTMLlist = '<ul>';

for (let fruit of fruits) {
  HTMLlist += `<li>${fruit}</li>`
}

HTMLlist += '</ul>'

console.log(HTMLlist);

// E5
console.log('E5: Write a program that uses a literal template to create a dynamically named formatted email message');

const emailName = 'Umberto';

console.log(`Ciao ${emailName}, grazie per averci contattato.
Al momento il tuo account sta venendo verificato...
Grazie per averci contattato

Il team di supporto`)

// E6
console.log('E6: Write a program that uses a literal template to create a dynamic URL by combining a base string and a parameter and prints the result on the console');

const baseString = 'https://www.example.com/';
const parameter = 'prodotto';
const url = `${baseString}${parameter}`;

console.log(url);

// E7
console.log('E7: Write a program that uses a literal template to format a monetary value and print it on the console');

const price = 13.47734568;

console.log(`The product costs ${price.toFixed(2)}`);

// E8
console.log('E8: Write a program that requires user input for name and age, then use a template literal to create a custom message and print it on the console');

const customWelcomeMessage = (name, age) => {
  console.log(`Hi ${name}, is it true that you're ${age}?`)
};

customWelcomeMessage('Umberto', 26);
