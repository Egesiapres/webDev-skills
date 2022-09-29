import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import FacilitiesList from './components/facilitiesList';

import './App.css';


function App() {
  // the default state is an empty string
  const [inputBox, setInputBox] = useState('');

  // always convert input text to lower case
  // using the state setter I can update the state value
  const inputHandler = e => {
    const lowercase = e.target.value.toLowerCase();
    setInputBox(lowercase);
  };

  return (
    <div className='App'>
      <Typography variant="h2">
        Strutture mediche
      </Typography>
      <br />
      {/* searching box */}
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        label="Cerca struttura"
        placeholder="Es: Abbiategrasso"
      />
      <FacilitiesList input={inputBox} />
    </div>
  );
}

export default App;
