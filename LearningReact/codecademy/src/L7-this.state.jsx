import React from 'react';
import ReactDOM from 'react-dom';

// 1. SETTING INITIAL STATE
// constructor() is a method that defines the elements of the class
// it's used when a class is defined using the class keyword, not using a f
// super() is a method that recalls all the parameters that are ok

// I have to give a component the state property (declared inside the constructor method)
class State extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }

  render() {
    return <h1>Wow this entire app is just an h1.</h1>;
  }
}

ReactDOM.render(<State />, document.getElementById('this.state'));

// 2. ACCESS A COMPONENT'S STATE
// {this.state.mood}
class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <h1>I'm feeling {this.state.mood}</h1>;
  }
}

ReactDOM.render(<TodayImFeeling />, document.getElementById('accessState'));
