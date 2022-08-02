// 1. A COMPONENT IN A RENDER F
// how components INTERACT PT1:
// component render another component

// the render() f can return a piece of JSX
// (ex: return <h1>Hello world!</h1>)
// BUT ALSO an INSTACE OF A COMPONENT CLASS
// (ex: return <OMG />)
// what happens is very similar to
// what happens when the instance is rendered by ReactDOM.render()

// 2. REQUIRE A FILE
// JS files are invisible to other JS files (in the app)
// IMPORT variable wanted using an import statement
// import has to be matched with EXPORT (used together)
// export: keyword used before elements that have to be exported
// (export/import used also to pass JS var, let, const, functions or classes also outside react) 
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './L6-other-files/NavBar.jsx';

// export/import of a const
import { small } from './L4-components-and-advanced-JSX';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" width={small} />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('componentRenderComponent'));