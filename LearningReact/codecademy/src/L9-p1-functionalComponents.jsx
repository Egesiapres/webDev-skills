// 1. STATELESS FUNCTIONAL COMPONENTS
// functional components: another way to define components
// (not just class components)
// added in the last version of React
// same functions but more elegant and concise syntax
import React from 'react';
import ReactDOM from 'react-dom';

// component using class syntax
// class FriendOld extends React.Component {
//   render(){
//     return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
//   }
// }

const small = 400;
// component using function syntax
const FunctionComponent = () => {
  return (
    <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" width = {small} />
  );
};

ReactDOM.render(
  <FunctionComponent />,
  document.getElementById('functionComponent')
);

// 2. FUNCTION COMPONENTS AND PROPS
// as the other components, fc can recive information using to props
// insert props as a parameter of the function
// recall the props without using .this
// we're now dealing with a f, not with an object anymore
const Props = props => {
  return (
    <div>
      <img src={props.src} width={small} />
    </div>
  );
};

ReactDOM.render(
  <Props src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('functionComponentProps')
); 