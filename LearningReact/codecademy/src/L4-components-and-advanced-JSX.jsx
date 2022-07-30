// 1. MULTILINE JSX in a component
// long piece of JSX code = use () after return
// 2. VARIABLE ATTRIBUTE in a component
import React from 'react';
import ReactDOM from 'react-dom';

const small = 250;

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} width={small} />
      </div>
    );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('variableAttributeInComponent')
);

// 3. INTO a render() f
// 3.1 LOGIC
// whatever is not a piece of html (constants, f...):
// inside the render(), OUTSIDE the return
const friends = [
  {
    title: 'Yummmmmmm',
    src: 'https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg',
    alt: 'adorable animal',
  },
  {
    title: 'Hey Guys!  Wait Up!',
    src: 'https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg',
  },
  {
    title: 'Yikes',
    src: 'https://content.codecademy.com/courses/React/react_photo-alpaca.jpg',
  },
];

class Friend extends React.Component {
  render() {
    const friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} width={small} alt={friend.alt} />
      </div>
    );
  }
}

ReactDOM.render(<Friend />, document.getElementById('logicIntoRender'));

// 3.2 CONDITIONAL
const fiftyFifty = Math.random() < 0.5;

// return: can be insertend in f bodies
/*
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}
*/
// better syntax
class TonightsPlan extends React.Component {
  render() {
    let place;
    if (fiftyFifty) {
      place = 'out';
    } else {
      place = 'to bed';
    }

    return <h1>Tonight I'm going {place} WOOO</h1>;
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('conditionalIntoRender')
);

// 3.3 THIS
// refers to the object on which this‘s enclosing method, in this case .render(), is called. It is almost inevitable that this object will be an instance of MyName, but technically it could be something else
// this.name (and NO this.name()): the way to recall getter methods
class MyName extends React.Component {
  get name() {
    return 'whatever-my-name-is-goes-here';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('this'));

// 3.4 EVENT HANDLERS
// different syntax: NO onclick, YES onClick
// f recalled by the event handler defined before the render()
// scream(){}: ES6 syntax
// inside the object Button
// NO scream: function(){}, YES scream(){}
// old PROPERTY NAME now IS METHOD NAME
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));
