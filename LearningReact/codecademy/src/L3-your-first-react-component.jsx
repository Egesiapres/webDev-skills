// 1. WHAT IS A COMPONENT?
// a reusable piece of code, always responsible to render html
/*
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentsClass extends React.Component {
  render() {
    return <h1>Hello world - component</h1>;
  }
}

ReactDOM.createRoot(<MyComponentsClass />, document.getElementById('app'));
*/

// 2. IMPORT React & ReactDOM
// import: creates an object (React, ReactDOM) which contains methods necessary to use the relative libraries
// React.createElement() is from react
// methods from React don't deal with the DOM. They allow to write JSX
// then, we import methods that deal with the DOM: ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// 3. CREATION
// 3.1 CLASS EXTENSION STATEMENT
// using CLASSES (also functions - hooks)
// class components have some methods and properties in common
// NO rewriting every time, YES extend the Component class from the React library
// React.component{}: class (that came from React library)
// component: subclass of React.component{} (cames from React library too)
// for names use PascalCase, or UpperCamelCase (must begin with capital letters)
// 3.2 BODY (inside{})
// instructions for how to build components
// render(): method which inside has a
// return: followed by JSX
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
// 3.3 AFTER BODY
// component INSTANCE: different form html tags (lowercase)
// (similar, vecause both can be rendered by JSX)
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));

// COMPONENT CLASS
// what we've created so far
// NO component, YES factory that produces components


