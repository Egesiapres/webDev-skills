import React, { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import FacilitiesList from './components/facilitiesList';

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
    <div>
      <h1>Strutture mediche</h1>
      <TextField 
        id='outlined-basic'
        onChange={inputHandler}
        variant='outlined'
        label='Cerca'
        placeholder='Es: Abbiategrasso'
      />
      <FacilitiesList input={inputBox} />
    </div>
  );
}

export default App;
