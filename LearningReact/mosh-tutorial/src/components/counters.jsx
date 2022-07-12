import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // array of counter objects
  state = {
    // props: data that we give to a component. They are read-only
    // state: data that are local, private, not sharable between components
    // the state, that starts a bit above, is internal to the component, invisible to other components
    // there are situations in which the props are all we need. It's not necessary to use the state
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

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

  render() {
    return (
      // this is the wrap that contains all the 4 counter
      <div>
        <button
          className="button btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // attributes to initialize the counter
          // this attributes pick the from what i've written in the state
          // inserting the console.log in counter, key is not printed because it's a special attribute for the unique identifying
          // i can delete select={true}, it's setted by default

          // special prop: children
          // children is a react element
          // to pass content between opening and closing tag
          // for instance, in using dialog box components
          // with the code inside the h4, i'm dynamically rendering the number of the counter specified in the state (at the id)
          // <h4>Counter #{counter.id}</h4>
          // la stessa cosa di puà anche fare mettendo id={counter.id}. See in counter

          // these attributes (value, id) are part of the props
          // but we cannot access the state that is internal
          <Counter
            key={counter.id} // key and id are the same
            // key is used internally by react. That's why we need the id
            onDelete={this.handleDelete} // attribute to recall the handleDelete function
            // i removed the state to the counter
            // i have also modifield the function associated
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // id={counter.id}>
            counter={counter} // better syntax. Here i have all the props i need. If i add new props i just have to add it to the state
          />
        ))}
      </div>
    );
  }
}

export default Counters;
