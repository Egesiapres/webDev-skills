import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MyComponentClass from './L3-your-first-react-component';
import NewComponent from './L4-components-and-advanced-JSX'; // prende tutti i componenti di questo file (Owl, Friend...)
import ProfilePage from './L5-components-render-other-components';
import PropsDisplayer from './L6-this.props';
import TodayImFeeling from './L7-this.state';
import Clock from './L8-component-lifecycle-methods';
import Friend from './L9-functionalComponents';
import ColorPicker from './L10-theStateHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyComponentClass /> */}
  </React.StrictMode>
);

ReactDOM.render(<ColorPicker />, document.getElementById('functionalStatefulComponent'));

reportWebVitals();
