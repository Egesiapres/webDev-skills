import React from 'react';
import ReactDOM from 'react-dom';

// 1. class vs className
// in JSX NO class, YES className
// class: reserved word in JS
// (it is translated by the compiler in class)
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById('app'));
