import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Components - Rendered');

    // attributes destructuring
    // it makes the code cleaner
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      // this is the wrap that contains all the 4 counter
      <div>
        <button
          className="button btn btn-primary btn-sm m-2"
          onClick={onReset} // i recall the function in app using .props.nameOfTheF
          // i have to modify it using the proprs: the method is no longer here
        >
          Reset
        </button>
        {counters.map((counter) => (
          // we no longer have the state

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

          // we are bubbling the event (f) not here but in the parent page
          <Counter
            key={counter.id} // key and id are the same
            // key is used internally by react. That's why we need the id
            onDelete={onDelete} // attribute to recall the handleDelete function
            // i removed the state to the counter
            // i have also modifield the function associated
            onIncrement={onIncrement}
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
