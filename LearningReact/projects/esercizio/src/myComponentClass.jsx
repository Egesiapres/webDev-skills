import React, { Component } from 'react';
import axios from 'axios';

let api = axios.create({
  baseURL: `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility`,
});

class MyComponentClass extends Component {
  state = {
    struttureMediche: []
  }
  
  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data);
      this.setState({ struttureMediche: res.data})
    });
  }

  render() {
    return (
      <div>
        <h1>Strutture mediche</h1>
        {this.state.struttureMediche.map(struttureMediche => <p key={struttureMediche.id}>{struttureMediche.city}</p>)}
      </div>
    );
  }
}
export default MyComponentClass;
