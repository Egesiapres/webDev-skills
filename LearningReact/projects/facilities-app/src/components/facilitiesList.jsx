import React, { useState, useEffect } from 'react';
import API from '../api.js';
import Facility from './facility.jsx';
import FormDialog from './formDialog.jsx';
import { Typography, LinearProgress, Alert } from '@mui/material';

// PROCESS
// fetchData(): f in the body of an anonymous cb f inside the useEffect() hook
// It's the first argument of this hook
// !!!
// []: second argument of useEffect() avoids the continuous data fetching (it happens just one time)
// response: stores the values awaited from the axios call with the url specified
// data: using .data I can acces to the objects stored in response
function FacilitiesList({ input }) {
  const [facilities, setFacilities] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [printedError, setPrintedError] = useState('All fine, no errors :)');

  // the states deal with the presentation of the dialog form
  const [open, setOpen] = useState(false);
  // state that allow to pass the facility clicked to the formDialog
  const [selectedFacility, setSelectedFacility] = useState([]);
  // data fetch & fetch management
  // try & catch for the success/failure management
  // new status setters to assign the loading and the error
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/`);
      console.log(res.data); // see the object in the console
      setFacilities(res.data);
      setLoading(false); // RIVEDERE
    } catch (e) {
      setPrintedError(e.message);
      setError(true);
      setLoading(false); // RIVEDERE
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CHECK
  // logic that talks with the props in App.jsx
  // filer(): returns only the elements that satisfy the conditions specified
  const filteredFacilities = facilities.filter(filteredFacility => {
    if (input === '') {
      return filteredFacility;
    } else {
      return filteredFacility.name.toLowerCase().includes(input);
    }
  });

  const onClickModify = facility => {
    setSelectedFacility(facility);
    console.log(facility);
  };

  // IMPORTANT
  // how to pass data from a child to a parent
  // map: executes a changing when a condition is satisfied
  // I'm working on facilities, the state that stores all the fetched data
  // uuid: used to match original and changed facility
  const onChangedFacility = changedFacility => {
    const newFacilities = facilities.map(facility =>
      facility.uuid === changedFacility.uuid ? changedFacility : facility
    );
    setFacilities(newFacilities);
  };

  return (
    <div>
      <br />
      <br />
      {/* conditional rendering of loading, error or multiple Facility istances */}
      {loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          Errore: {printedError}!
        </Alert>
      ) : (
        filteredFacilities.map(facility => (
          <Facility
            facility={facility}
            key={facility.uuid}
            setOpen={setOpen}
            onClickModify={onClickModify}
          />
        ))
      )}

      {/* conditionally render formDialog */}
      {open === true ? (
        <FormDialog
          selectedFacility={selectedFacility}
          open={open}
          setOpen={setOpen}
          onChangedFacility={onChangedFacility}
        />
      ) : null}
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
// S3. Dare la key al tag istanza <ReturnedFacilitiesList />
