// 1. WHAT IS A COMPONENT?
// a reusable piece of code, always responsible to render html
// import React from 'react';
// import ReactDOM from 'react-dom';

class MyComponentsClass extends React.Component {
  render() {
    return <h1>Hello world - component</h1>;
  }
}

ReactDOM.createRoot(<MyComponentsClass />, document.getElementById('app'));

// 2. IMPORT React & ReactDOM
// creates an object named React which contains methods necessary to use the React library
// React.createElement()
// methods from react don't deal with the DOM. They allow to write JSX
import React from 'react';
// methods that deal with the doma
// ReactDOM.render()
import ReactDOM from 'react-dom';

// 3. CREATION
// components can be created using CLASSES (or functions - hooks)
