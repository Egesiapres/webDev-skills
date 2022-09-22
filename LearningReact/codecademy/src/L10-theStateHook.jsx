// 1. WHY USE HOOKS
// they work with functional components
// same component functionalities, much easier
// (classes are difficoult)
// hooks: f that handle the internal state of a component and handle the post-rendering

// 2. UPDATE FUNCTION COMPONENT STATE
// state hook can be used to manage any type of data
// (before we managed strings)
// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  // names of the local variables are arbitrary
  const [color, setColor] = useState();

  // using the color variable, the background changes dynamically
  const divStyle = { backgroundColor: color };
  // to assign an eventHandler I have to assign the f returned by the useState() f in the body of an anonymous f  \
  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
      <button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
      <button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
      <button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
    </div>
  );
}
// this is a stateful function component

// 3. INITIALIZE STATE
// set a default value to a state
// passing a parameter into the useState() f
// if I don't pass it, the value is undefined
// states are always initialized with null
// it is preferred to undefined
//import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

// this is the initialization
// tomato is not in the array but it's a color
export default function ColorPicker() {
  const [color, setColor] = useState('Tomato'); 

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

// 4. USE STATE SETTER OUTSIDE JSX
// when we want to do something more interesting 
// (than just calling the state setter with a static value)
// good idea to separate that logic from everything else going on in our JSX
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}

// alternatives for handleChange
// removing variable
// const handleChange = (event) => setEmail(event.target.value);
// with object desctructoring
// const handleChange = ({target}) => setEmail(target.value);

// 5. SET FROM PREVIOUS STATE
// the state setter can be used to dynamically manage the state
// I have to use setState(prevState => prevState + 1) in the body of a f
export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
  const goBack = () => {setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1)};
  const goToNext = () => {setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)};
  // determine if on the first question or not 
  const onFirstQuestion = true;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// 6. ARRAY IN STATE


// MAKE IT WORK
