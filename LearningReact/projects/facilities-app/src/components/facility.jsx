import '../App.css';
// import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // PROSEGUIRE

// props importing using the destructoring
// (there's no props.)
function Facility({ facility, setOpen, onClickedFacility }) {
  // QUESTION
  // why not simple variables?
  // const [clickedUuid, setClickedUuid] = useState(); // ?
  // const [clickedName, setClickedName] = useState();
  // const [clickedCity, setClickedCity] = useState();
  // const [clickedId, setClickedId] = useState();

  const handleClickOpen = () => {
    setOpen(true); // open the dialog
    // // create every single variable
    // setClickedUuid(facility.uuid); // ?
    // setClickedName(facility.name);
    // setClickedCity(facility.city);
    // setClickedId(facility.id);
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
    console.log(clickedFacility)
    // pass the variable back to the parent component
    onClickedFacility(clickedFacility);
  };

  return (
    <div key={facility.uuid}>
      <Typography variant="h6">{facility.name}</Typography>
      <Typography variant="body1">{facility.city}</Typography>
      <Typography variant="body2">{facility.id}</Typography>

      <Button variant="contained" size="small">
        Apri
      </Button>
      {/* the button sends the values of the facility clicked */}
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        Modifica
      </Button>
    </div>
  );
}

export default Facility;

// NOTES
// The state is automatically passed from the parent to the child component
// It's not necessary to use useState() and useEffect()
