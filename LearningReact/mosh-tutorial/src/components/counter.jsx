// shortcuts (using Simple React Snippets)
// imrc (import react component)
import React, { Component } from 'react';

// cc (create class)
// with the sintax below i can also export the class wit a single line
// export default class Counter extends Component
class Counter extends Component { 
    // to render a data dynamically
    // state is a property and set it to an object 
    // this object contains any data that this component need
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // to apply aimed changings to the style
    // 10 is convertedo into '10px'
    // inside styles i have to type using the camelCase syntax
    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // }
    
    render() {
        // how to render the color of the zero badge dinamically
        // in the const i put the class that is passed everywhere
        // i modify the const in a let to change the content of the bariable
        // shift + ctrl + r automatically transforms in a function

        return ( // essential to insert the () after the return method. Pretter does it automatically
            // JSX expression, that will be compiled in vanilla JS code by Babel
            // the div is necessary to help babel in reading the two tags (h1, button) separately
            // this code ise rendered into the root div, the template that is going to be completed with the different components
            // cmd + D after the selection of a piece of code to edit multiple instances simultaniously
            // React.Fragment removes the useful and endless div
            // the span contains the thing we want to display dinamically
            // set attributes (img example), the src value is setted automatically
            // className because we are in JSX
            // i can also apply inline styles, for example <span style={{ fontSize: 30 }}
            // i map the tags in the state in the li
            // the key={tag ia}
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    // function that returns a vaue
    // if the value is 0, the f returns zero, otherwise the number
    formatCount() {
        // use object destructoring to improve the code and remove the repetition in the return
        const { count } = this.state; 
        // ? is then, : is else 
        // i can return also JSX expression, better than plain text
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;