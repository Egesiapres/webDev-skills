import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import FacilitiesHome from './components/facilititesHome.jsx';
import FacilitiesDetail from './components/facilitiesDetail';

import { TitleContext } from './components/titleContext';
import { Typography } from '@mui/material';

// :uuid: param that will be recalled in FacilityDetail
function App() {
  
  const title = <Typography variant='body1'>Strutture mediche</Typography>
  
  // no conditional rendering with the router
  // and also no props
  // FacilitiesDetail: is the first because in facility,
  // the button takes you in the first element with /
  return (
    <div className="App">
      <Navbar />

      <TitleContext.Provider value={title}>
        <Routes>
          <Route path="/:uuid" element={<FacilitiesDetail />} />

          <Route path="/" element={<FacilitiesHome />} />
        </Routes>
      </TitleContext.Provider>
    </div>
  );
}

export default App;
