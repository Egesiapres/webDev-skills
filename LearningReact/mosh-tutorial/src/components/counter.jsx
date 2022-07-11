// shortcuts (using Simple React Snippets)
// imrc (import react component)
import React, { Component } from 'react';

// cc (create class)
// with the sintax below i can also export the class wit a single line
// export default class Counter extends Component
class Counter extends Component { 
    render() { 
        return <h1>Hello World</h1>; // JSX expression, that will be compiled in vanilla JS code by Babel
    }
}

export default Counter;