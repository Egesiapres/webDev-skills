import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import FacilitiesList from './facilitiesList';

function FacilitiesHome({ setOpenPage, openedFacility, onClickOpen }) {
  // the default state is an empty string
  const [inputBox, setInputBox] = useState('');

  // always convert input text to lower case
  // using the state setter I can update the state value
  const inputHandler = e => {
    const lowercase = e.target.value.toLowerCase();
    setInputBox(lowercase);
  };

  return (
    <div className="App">
      <Typography variant="h2">Strutture mediche</Typography>
      <br />
      {/* searching box */}
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        label="Cerca struttura"
        placeholder="Es: Abbiategrasso"
      />

      <FacilitiesList
        setOpenPage={setOpenPage}
        openedFacility={openedFacility}
        onClickOpen={onClickOpen}
        input={inputBox}
      />
    </div>
  );
}

export default FacilitiesHome;
