import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyComponentClass from './L3-your-first-react-component';
import NewComponent from './L4-components-and-advanced-JSX'; // prende tutti i componenti di questo file (Owl, Friend...)
import ProfilePage from './L5-components-render-other-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyComponentClass /> */}
  </React.StrictMode>
);

reportWebVitals();
