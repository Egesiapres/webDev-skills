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

// 5. VARIABLE ATTRIBUTES IN JSX
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

// 6. EVENT LISTENERS
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

// 7. JSX CONDITIONALS
// if statements do not run in JSX
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


