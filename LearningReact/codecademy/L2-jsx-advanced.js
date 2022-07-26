import React from 'react';
import ReactDOM from 'react-dom';

// 1. class vs className
// in JSX NO class, YES className
// class: reserved word in JS
// (it is translated by the compiler in class)
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById('app'));

// 2. SELF CLOSING TAGS
// html: YES <br> and <br/>
// JSX: NO <br> YES <br/> (<img/>)
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br/>
      JENKINS IS MY NAME
      <br/>
      THANKS HA LOT
    </article>
  </div>
);

// 3. JS IN JSX INTO JS
// Output: 2 + 3 in h1
// if the cose is inside a tag
// it behaves like JSX (not like JS)
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
)
// Output: 5
// to make the code behave like JS
// (even if it is inside a tag)
// write the code inside {}
// {} are not treathed neither as JS or JSX
// they indicates where JS starts and ends
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
)

let math = (
  <h1>
    2 + 3 = {2 + 3}
  </h1>
)

// 4. VARIABLES in JSX
// work as normal variables, just remember to insert {}
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));