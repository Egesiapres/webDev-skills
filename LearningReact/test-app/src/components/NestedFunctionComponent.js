import React from 'react';

export function NestedFunctionComponent(props) {
  return (
    <>
      <h1>{props.example1}</h1>
      <p>{props.example2}</p>
      <button onClick={props.handleClick}>Click here!</button>
    </>
  );
}
