import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  } 
    render() { 
        return ( 
        // this is the wrap that contains all the 4 counter
        <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>);
    }
}
 
export default Counters;
