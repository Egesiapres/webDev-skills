import React from 'react';

export class NestedClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exampleTitle2: 'exampleTitle2' };
  }

  render() {
    return (
      <>
        <h1>{this.props.example}</h1>
        <h2>{this.state.exampleTitle2}</h2>
        <button onClick={this.props.handleClick}>Click here!</button>
      </>
    );
  }
}
