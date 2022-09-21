// 2. INTRODUCTION TO LIFECYCLE METHODS
// methods used to deal with the component lifecycle
// constructor() and render() belong to this methods' family
// they belong to different lc phases and, in general, there's no one-to-one corrispondence
// constructor(): only mounting phase, first meethod to be used
// render(): mounting and updating phase, secondo method to be used

// display a static clock
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById('introLcMethods'));

// 3. componentDidMount()
// called after the component is rendered

// make the clock dynamic
class DynamicClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }

  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}

ReactDOM.render(<DynamicClock />, document.getElementById('componentDidMount'));

// 4. componentWillUnmount()
// remove the clock
// AVOIDING it will countinue to tick, updating the state

export class InteractiveClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

ReactDOM.render(
  <InteractiveClock />,
  document.getElementById('componentWillUnmount')
);

// 5. componenttDidUpdate
// when there are changes in the props or in the state
// calling setState() an update is triggered
// changing a props aswell

// TERMINARE
