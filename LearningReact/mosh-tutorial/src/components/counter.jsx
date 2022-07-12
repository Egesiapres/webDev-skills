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
        // tags: []
    };

    // every time there is a component i have to add a constructor, the super (base constructor) and for every event handler a funtction like the one in red blow
    // to solve the problem below: bind method
    // i can use this method because functions in JS are objects
    // method called everytime an object like class Counter... is called
    
    // constructor() {
    //     super(); // adding super() the error disappears and there is a contructor with different proeperties
    //     // the bind method below returns a new instance of the f handleIncrement
    //     // in the console it's possible to see the counter properties to update them 
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    
    // despite to do all the job done with the constructor, i can do the same thing with an arrow f ( => )
    // cleaner and simpler
    // in this function we don't have access to the this, to the state
    handleIncrement = product => {
        console.log('product');
        // the method immediately below doesn't work. I have to add also the second line
        // this.state.count++;
        // this m tells react we are updating the state. It keeps the dom updated with the virtual dom
        this.setState({ count: this.state.count + 1 }); 
    };

    // f that emulates the case in which i have to change the id of an item clicking on a button
    // no more useful using onClick={ () => this.handleIncrement(product) }
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id:1 });
    // };

    // we want to display the array dynamically. If this array has at least one element we want to render this array in a list, otherwise print a msg
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     // this works automatically as an else
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

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
            // handling events
            // onClick, not onclick
            // by clicking on the button, only the span is updated, nothing else in the dom is affected
            <div className='.flex-column'>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // changing this function inside, i have no more all the details but the id specified
                    // but here it prints just 1. So, i have to add an inline function
                    onClick={() => this.handleIncrement()} 
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>
            </div>

            // we want to display the array dynamically. If this array has at least one element we want to render this array in a list, otherwise print a msg
            // before to render the tags we want to display a separate msg based on a single condition
            // && is an and operator. In JS we are linking a boolean value and a string. it is possible

            /* this piece of code was inside the fragment
            <React.Fragment>
                {this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
            </React.Fragment> */
        );
    }

    // function for the dynamical choosing of the bootsrap style to apply
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