import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import API from '../api.js';
import ReturnedFacilitiesList from './returnedFacilitiesList';
import { LinearProgress } from '@mui/material';

// PROCESS
// fetchData(): f in the body of an anonymous cb f inside the useEffect() hook
// It's the first argument of this hook
// !!!
// []: second argument of useEffect() avoids the continuous data fetching (it happens just one time)
// response: stores the values awaited from the axios call with the url specified
// data: using .data I can acces to the objects stored in response

function FacilitiesList(props) {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // data fetch & fetch management
  // try & catch for the success/failure management
  // new status setters to assign the loading and the error
  const fetchData = async () => {
    try {
      const res = await API.get(`/`);
      console.log(res);
      console.log(res.data); // see the object in the console
      setFacilities(res.data);
      setLoading(true);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // RIVEDERE
  // logic that talks with the props in App.jsx
  // filer(): returns only the elements that satisfy the conditions specified
  const filteredFacilities = facilities.filter(item => {
    if (props.input === '') {
      return item;
    } else {
      return item.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <div>
      <h2>Tutte</h2>
      {loading ? (
        filteredFacilities.map(item => (
          <ReturnedFacilitiesList key={item.uuid} data={item} />
        ))
      ) : (
        <LinearProgress variant="determinate" value={100} />
      )}
      {/* {loading && error ? (
        filteredFacilities.map(item => (
          <ReturnedFacilitiesList key={item.uuid} data={item} />
        ))
      ) : !loading && error ? (
        <LinearProgress variant="determinate" value={100} />
      ) : (
        <h1>Ciao</h1>
      )} */}
    </div>
  );
}

export default FacilitiesList;

// PROBLEMI
// 1. console.log(): stampa due volte gli oggetti presi grazie al fetch
// S1. Eliminare i tag <React.StrictMode> in index.js
// 2. I child dentro al return() devono avere key diversi (quando aggiungo altri tag html)
// S2. Dare la key al tag padre, nel nostro caso il <div>
// 3. Uguale a 2
