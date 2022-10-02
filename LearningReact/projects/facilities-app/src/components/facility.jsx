import '../App.css';
// import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

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
    
    // prova a fare lo stesso con selectedFacility (evito di passare 2 volte)
  };

  return (
    <div key={facility.uuid}>
        {/* il vecchio Switch, la sintassi è cambiata */}
        <Typography variant="h6">{facility.name}</Typography>
        <Typography variant="body1">{facility.city}</Typography>
        <Typography variant="body2">{facility.id}</Typography>

        <Button className='btn' variant="contained" size="medium">
          <a href="detail">Apri</a>
        </Button>
        {/* the button seds the values of the facility clicked */}
        <Button className='btn' variant="outlined" size="medium" onClick={handleClickOpen}>
          Modifica
        </Button>
    </div>
  );
}

export default Facility;

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()
