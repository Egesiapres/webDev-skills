import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FacilitiesHome from './components/facilititesHome';
import Navbar from './components/navbar.jsx';

import './App.css';
import FacilityDetail from './components/facilityDetail';

// * has been inserted as suggested from the console
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/home/*" element={<FacilitiesHome />} />
        <Route path="/detail" element={<FacilityDetail />} />
      </Routes>
    </div>
  );
}

export default App;
