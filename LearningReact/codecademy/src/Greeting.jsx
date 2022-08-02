import React from 'react';

export class GreetingOne extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
