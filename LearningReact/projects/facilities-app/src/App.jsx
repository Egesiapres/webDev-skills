import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FacilitiesHome from './components/facilititesHome';
import Navbar from './components/navbar.jsx';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path="/facilitiesHome" element={<FacilitiesHome />} />
      </Routes>
    </div>
  );
}

export default App;
