// import React from 'react';
// import ReactDOM from 'react-dom';

// 1. class vs className
// in JSX NO class, YES className
// class: reserved word in JS
// (it is translated by the compiler in class)
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById('classVsClassName'));

// 2. SELF CLOSING TAGS
// html: YES <br> and <br/>
// JSX: NO <br> YES <br/> (<img/>)
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

// 3. JS IN JSX INTO JS 
// Output: 2 + 3 in h1
// if the cose is inside a tag
// it behaves like JSX (not like JS)
ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('jsInJsxIntoJsOne'));
// Output: 5
// to make the code behave like JS
// (even if it is inside a tag)
// write the code inside {} (injection)
// {} are not treathed neither as JS or JSX
// they indicates where JS starts and ends
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('jsInJsxIntoJsTwo'));

let math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(math, document.getElementById('jsInJsxIntoJsThree'));

// 4. VARIABLES in JSX
// work as normal variables, just remember to insert {}
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('variablesInJsx'));

// 4.1 VARIABLE ATTRIBUTES IN JSX
// in JSX common to use variables to pass attributes
const pics = {
  panda: 'http://bit.ly/1Tqltv5',
  owl: 'http://bit.ly/1XGtkM3',
  owlCat: 'http://bit.ly/1Upbczi',
};

const panda = <img src={pics.panda} alt="Lazy Panda" />;

const owl = <img src={pics.owl} alt="Unimpressed Owl" />;

const small = 400;
const owlCat = <img src={pics.owlCat} alt="Ghastly Abomination" width={small}/>;

ReactDOM.render(owlCat, document.getElementById('varibleAttributesInJSX'));

// 5. EVENT LISTENERS
// JSX camelCase intead of html lowercase (onClick)
// attributes are part of JSX expressions
// i have to inject JS to make the f run (using{})
function makeDoggy(e) {
  // The <img> will become a picture of a doggy.
  e.target.setAttribute(
    'src',
    'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  );
  e.target.setAttribute('alt', 'doggy');
  // e.target.setAttribute('width', '100px');
}

const kitty = (
  <img
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
    width={small}
    onClick={makeDoggy}
  />
);

ReactDOM.render(kitty, document.getElementById('eventListeners'));

// 6. JSX CONDITIONALS
// if statements do not run into JSX pieces of code
// NO inject, YES put if/else outside the JSX
// (because of the way in which it's compiled)
/*
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
*/

// This function will randomly return either 'heads' or 'tails'.
function coinToss() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const picsOne = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

if (coinToss() === 'heads') {
  img = <img src={picsOne.kitty} width={small} />
} else {
  img = <img src={picsOne.doggy} width={small}/>
}

ReactDOM.render(img, document.getElementById('workingIfStatements'));

// 6.1 ternary operator and &&: not React-specific
// OFTEN USED
// ternary operator
const imgOne = <img src={picsOne[coinToss() === 'heads' ? 'kitty' : 'doggy']} width={small} />;

ReactDOM.render(
	imgOne, 
	document.getElementById('ternaryOperator')
);

// 6.2 &&
// if the condition at the left of the && is satisfied
// the code on the right is executed

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('&&')
);

// 7. map()
// the function contained between () is applied
// to the elements of the array before the .
// OFTEN USED to create list of elements
const people = ['Rowe', 'Prevost', 'Gare'];
// person: parametro della funzione anonima dentro a map()
let peopleLis = people.map(person =>
  <li>{person}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('map()'));

// 8. KEYS
// unique attribute (similar to id)
// useful for React to keep track of lists. Not all lists
// YES ones:
// to-do: list items have a memory from one render to one other
// (the item has to remember wheter it was checked)
// search: results might be shuffled from one render to the next 
peopleLis = people.map((person, i) => <li key={"person_"+i}>{person}</li>)

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('keys'));

// 9. React.createElement()
// every JSX piece of code is a call to the React.createElement() method
const h1 = <h1>Hello world</h1>;
/* is compiled into
const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);
*/