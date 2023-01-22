import React from 'react';
import NestedComponent from './NestedComponent';

export function FunctionComponent () {
  const example2 = 'prova';

  const handleClick = () => {
    console.log('click done');
  };

  return (
    <NestedComponent
      example1="example1"
      example2={example2}
      handleClick={handleClick}
    />
  );
};
