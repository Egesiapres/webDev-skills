import '../App.css';
// import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import FacilityDetails from './facilityDetails';

// props importing using the destructoring
// (there's no props.)
function Facility({ facility, setOpen, onClickedFacility }) {
  // QUESTION
  // how to decide between states and variables?
  const handleClickOpen = () => {
    setOpen(true); // open the dialog
    // // create every single variable
    const uuid = facility.uuid;
    const name = facility.name;
    const city = facility.city;
    const id = facility.id;
    // create a variable that includes the past ones
    const clickedFacility = {
      uuid,
      name,
      city,
      id,
    };
    console.log(clickedFacility);
    // pass the variable back to the parent component
    onClickedFacility(clickedFacility);
  };

  return (
    <div key={facility.uuid}>
        {/* il vecchio Switch, la sintassi è cambiata */}
        <Typography variant="h6">{facility.name}</Typography>
        <Typography variant="body1">{facility.city}</Typography>
        <Typography variant="body2">{facility.id}</Typography>

        <Button className='btn-space' variant="contained" size="small">
          <a href="facilityDetails"></a>Apri
        </Button>
        {/* the button sends the values of the facility clicked */}
        <Button className='btn-space' variant="contained" size="small" onClick={handleClickOpen}>
          Modifica
        </Button>

        <Routes>
          <Route path="facilityDetails" element={<FacilityDetails />} />
        </Routes>
    </div>
  );
}

export default Facility;

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()
