import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import FacilitiesHome from './components/facilititesHome.jsx';
import FacilitiesDetail from './components/facilityDetail';

// * has been inserted as suggested from the console
// :uuid: param that will be recalled in FacilityDetail
function App() {
  const [openedFacility, setOpenedFacility] = useState([]);
  const [openPage, setOpenPage] = useState(false);
  // probably I could just use onClickedFacility

  const onClickOpen = facility => {
    setOpenedFacility(facility);
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/home/*"
          element={
            <FacilitiesHome
              setOpenPage={setOpenPage}
              openedFacility={openedFacility}
              onClickOpen={onClickOpen}
            />
          }
        />
        <Route
          path='/:uuid'       
             element={
            openPage === true ? (
              <FacilitiesDetail openedFacility={openedFacility} setOpenedFacility={setOpenedFacility} />
            ) : null
          }
        />
      </Routes>
    </div>
  );
}

export default App;
