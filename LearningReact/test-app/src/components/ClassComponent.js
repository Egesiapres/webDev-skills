import React from 'react';
import { NestedClassComponent } from './NestedClassComponent';
import { NestedFunctionComponent } from './NestedFunctionComponent';

export class ClassComponent extends React.Component () {  
  handleClick () {
    console.log('click done');
  };

  render () {
    return (
      <NestedFunctionComponent
        example="example"
        handleClick={this.handleClick}
      />
    );
  }
};
