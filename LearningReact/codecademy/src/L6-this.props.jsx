// 1. ABOUT this.pros
// how components INTERACT PT2:
// components PASS information to other components
// PROPS: information passed

// 2. ACCESS A COMPONENT'S PROPS
// PROPS: objects that contain informations
// a lot of infos contained very useless

// (withoutmyProp="Hello") the code prints empty {}
// props object: contains other properties that JSON.stringify() method doesn't detect

// 3. PASS PROPS TO A COMPONENT
// <Example example="example" />
// whatever props name is ok
// if the information passed is not a string
// pass it inside {}
// <Example example={["ex1", "ex2", "ex3"] exampleOne={true} exampleTwo={2}}
import React from 'react';
import ReactDOM from 'react-dom';

// vedi punto 5 per questo import 
// qua per bug sull'import
import { GreetingOne } from './Greeting';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('this.props'));

// 4. RENDER A COMPONENT'S PROPS
// step1 (PASS the props): add the props to the component instance (firstName='Alex')
// step2 (ACCESS and DISPLAY the props): recall the props (this.props.firstName) somewhere inside the return method
// changing the value of the props, it will change also the h2

// no import because it has been already done upon
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Alex' />, 
  document.getElementById('renderComponentsProps')
);

// 5. PASS PROPS FROM COMPONENT TO COMPONENT
// MOST COMMON USE: pass info (props) from a component to a DIFFERENT one

// NOTE:
// props: name of the object (storing passed-in information)
// this.props: refers to that storage object 
// prop: (at the same time) each piece of passed-in information. 
// props could refer to TWO pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

// PROCESS:
// p1: inside App component (recalled as instance as <App />), it's rendered as JSX the Greeting component (<Greeting />)
// p2: to <Greeting /> is given a props, name="name"
// p3: the props is passed from <App /> to <Greeting /> and rendered inside Greeting's <h1> thanks to {this.props.name}

// import React from 'react';
// import ReactDOM from 'react-dom';
// l'import funzionante è su: bug sull'import
// import { GreetingOne } from './Greeting';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <GreetingOne name = "Umbe"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('passPropsFromComponentToComponent')
);

