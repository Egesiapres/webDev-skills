import React from 'react';
import { NestedClassComponent } from './NestedClassComponent';
import { NestedFunctionComponent } from './NestedFunctionComponent';

export function FunctionComponent () {
  const handleClick = () => {
    console.log('click done');
  };

  return (
    <NestedClassComponent
      example="example"
      handleClick={handleClick}
    />
  );
};
