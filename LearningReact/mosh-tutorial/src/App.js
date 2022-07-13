import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  // i moved the state and the handlers here because now the parent is app

  // array of counter objects
  state = {
    // props: data that we give to a component. They are read-only
    // state: data that are local, private, not sharable between components
    // the state, that starts a bit above, is internal to the component, invisible to other components
    // there are situations in which the props are all we need. It's not necessary to use the state
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // component life cycle: constructor, componentDidMount, render
  // (but the order in which they appear in the console is const, rend (with the children in cascade), compDidMount)
  // the constructor is called once when an instance of a class is created
  // to initizize the property in the instance
  constructor(props) {
    super(props);
    console.log('App - Contructor');
    // this.state = this.props.something; // we cannot access the props unell we pass it as a parameter in the constructor and in the super (otherwise it returns undefined)
  
  }

  componentDidMount() {
    // ajax call
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    // [...] is a cloning operator. It creates a new array with the this.state.counters array
    const counters = [...this.state.counters];
    // we need to find the index of the counter that recives the parameter
    const index = counters.indexOf(counter);
    // f to avoid the changing of the state
    counters[index] = { ...counter };
    // f per incrementare
    counters[index].value++;
    this.setState({ counters });
  };

  // our counter component is raising an event
  // its parent, our counters component is handling the event
  // very common pattern in a lot of real applications
  handleReset = () => {
    // the method followed is just loke the one for handleDelete
    // new array of counters
    // array that takes all the counters and resets
    // c: prendo tutti i counters, => poi li metto a 0 e restituisco 0
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    // then recall it with setState()
    // like this it  does not work, because the value of the props (0) and the one of the state (4) are disconnected
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // we don't remove the state counters, we create a new array without a given counter
    // all the counters without the one with the given
    // filtro sui counters
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  // after moving state and handlers, i have to specify the props that have to be recall in the child piece
  // props are specified in <Counter />

  render() {
    console.log('App - Rendered')
    return (
      // f that returns the total number of items. Taking to the next level, i filter displaying just situations in which there are more than 0 elements
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters} // i have to pass also the counters in the state
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
