// 1. MULTILINE JSX in a component
// long piece of JSX code = use () after return
// 2. VARIABLE ATTRIBUTE in a component
import React from 'react';
import ReactDOM from 'react-dom';

const small = 250

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
};

class Owl extends React.Component {
  render (){
    return (
    <div>
    <h1>{owl.title}</h1>
      <img 
        src={owl.src}
        alt={owl.title}
        width={small}
      />
    </div>
    )
  }
}

ReactDOM.render(<Owl />, document.getElementById('variableAttributeInComponent'));

// 3. LOGIC into a render() f
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {
  render() {
    const friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img 
          src={friend.src}
          width={small}
        />
      </div>
    )
  }
}

ReactDOM.render(<Friend />, document.getElementById('logicIntoRender'));

// 4. CONDITIONAL into render() f
