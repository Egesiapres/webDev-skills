import React, { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import FacilitiesList from './components/facilitiesList';
// import SearchBox from './components/searchBox';

function App() {
  const [inputText, setInputText] = useState('');

  const inputHandler = e => {
    // always convert input text to lower case
    const lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
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
      <FacilitiesList input={inputText} />
    </div>
  );
}

export default App;
