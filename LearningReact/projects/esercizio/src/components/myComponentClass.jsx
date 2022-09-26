import React, { Component } from 'react';
import axios from 'axios';

// axios initialization in a variable
let api = axios.create({
  baseURL: `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility`,
});

// component type:
// old: class
// modern: function
class MyComponentClass extends Component {
  state = {
    struttureMediche: [],
  };
  // axios usage:
  // old: .then .catch, promises based
  // modern: async, await (they're promises based and incorporate that machanism)
  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data); // stampo nella console
      this.setState({ struttureMediche: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Strutture mediche</h1>
        {this.state.struttureMediche.map(struttureMediche => (
          <p key={struttureMediche.id}>{struttureMediche.city}</p>
        ))}
      </div>
    );
  }
}

export default MyComponentClass;

// NOTE:
// the warning error could be caused by the non-use of componentDidMount()
// (or something in that way)
