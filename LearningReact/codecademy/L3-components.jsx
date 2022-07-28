// 1. WHAT IS A COMPONENT?
// a reusable piece of code, always responsible to render html
// import React from 'react';
// import ReactDOM from 'react-dom';

class MyComponentsClass extends React.Component {
  render() {
    return <h1>Hello world - component</h1>;
  }
};

ReactDOM.createRoot(
  <MyComponentsClass />,
  document.getElementById('app')
);

// 2. Import React
// import React from 'react';
//