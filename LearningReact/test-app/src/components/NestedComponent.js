import React from 'react'

export default class NestedComponent extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.example1}</h1>
        <p>{this.props.example2}</p>
        <button onClick={this.props.handleClick}>Click here!</button>
      </>
    );
  }
}
