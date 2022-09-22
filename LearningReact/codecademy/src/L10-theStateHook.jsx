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
import React, { useState } from 'react';

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

