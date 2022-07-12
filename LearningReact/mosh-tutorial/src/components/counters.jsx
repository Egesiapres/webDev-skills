import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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
            { id: 4, value: 0 }
        ]
    };

    // our counter component is raising an event
    // its parent, our counters component is handling the event
    // very common pattern in a lot of real applications
    handleDelete = counterId => {
        // filtro sui counters
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    render() {    
        return ( 
        // this is the wrap that contains all the 4 counter
            <div>
                {this.state.counters.map(counter => (
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
                        key={counter.id}
                        onDelete={this.handleDelete} // attribute to recall the handleDelete function
                        value={counter.value} 
                        id={counter.id}>
                    </Counter>   
                ))}
            </div>
        );  
    }
}
 
export default Counters;