import React from 'react';

export class GreetingTwo extends React.Component {
  render() {
    if (this.props.signedIn === false) {
      return <h1>GO AWAY</h1>;
    } else {
      return <h1>Hi there, {this.props.nameOne}!</h1>;
    }
  }
}
