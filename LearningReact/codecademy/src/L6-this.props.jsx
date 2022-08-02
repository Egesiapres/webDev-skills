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
import { GreetingOne } from './L6-other-files/GreetingOne';
import { GreetingTwo } from './L6-other-files/GreetingTwo';
import { Button } from './L6-other-files/Button';
import { List } from './L6-other-files/List';

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

ReactDOM.render(
  <PropsDisplayer myProp="Hello" />,
  document.getElementById('this.props')
);

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
  <Greeting firstName="Alex" />,
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
        <h1>Hullo and, "Welcome to The Newzz," "On Line!"</h1>
        <GreetingOne name="Umbe" />
        <article>Latest newzz: where is my phone?</article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('passPropsFromComponentToComponent')
);

// 6. RENDER DIFFERENT UI BASED ON PROPS
// WIDELY USED technique: use this.props to make a decision
// (WITHOUT rendering it. thi.props will be used outside the return, or associated to an if with different return)

// changing between true and false the sentence rendered changes
class AppTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hullo and, "Welcome to The Newzz," "On Line!"</h1>
        <GreetingTwo nameOne="Alison" signedIn={true} />
        <article>Latest: where is my phone?</article>
      </div>
    );
  }
}

ReactDOM.render(
  <AppTwo />,
  document.getElementById('renderDifferentBasedOnProps')
);

// 7. PUT AN EVENT HANDLER IN A COMPONENT CLASS
// FUNCTIONS too can be passed as props, especially EVENT HANDLERS f
// (obviously, define it before pass it)
// event handlers are defined as f of the component class
// (just like render())

// 8. PASS AN EVENT HANDLER AS A PROP
// SENDER
// event handler can have a custom name
// {this.talks}: injects JS code that passes to the f talk() defined inside the object class Talker (STEP1)

// 9. RECIVE AN EVENT HANDLER AS A PROP
// RECIEVER
// link the component instance prop <Button talk=... />, (contained inside the parent component), with the original (child) one (STEP2)
// insert an event handler in the original (child) component
// (onClick={this.props.talk})

// 10. LANGUAGE CONVENTIONS
// handleClick(): f that runs when there is an event (depending on the event type: handleHover, handleKeyPress...)
// <Button onClick=... /> (parent component onClick): ARBITRARY prop name WITHOUT FUNCTION (linked to the event handler, to the f)
// <Button onClick=... ><Button/> (child component onClick): keyword that creates an event handler and links it to the parent c f, NOT ARBITRARY

// NOTE: component instance and not HTML-like JSX element (<ComponentInstance /> VS <Button><Button/>) means prop and not event handler

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('eventHandlerInComponentClass')
);

// 11. this.props.children
// return everything in between a component’s opening and closing JSX tags
// more than one component as child: array

//

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { List } from './List';

class AppOne extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Romeo the Singer Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <AppOne />, 
  document.getElementById('this.props.children')
);

// 12. DEFAULT PROPS

// import React from 'react';
// import ReactDOM from 'react-dom';

class ButtonOne extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// to add to the object ButtonOne a property called defaultProps
// rendered when <ButtonOne /> has not a text prop 
ButtonOne.defaultProps = { text: "I am a button" };

ReactDOM.render(
  <ButtonOne />, 
  document.getElementById('defaultProps')
);
