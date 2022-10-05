import React, { useState } from 'react';
import useApi from './useApi.jsx';
import API from '../api.js';
import Facility from './facility.jsx';
import FormDialog from './formDialog.jsx';
import { LinearProgress, Alert } from '@mui/material';
import useFormDialog from './useFormDialog.jsx';

function FacilitiesList({ input }) {
  // the states deal with the presentation of the dialog form
  // const [open, setOpen] = useState(false);
  // using a custom hook that does the same work
  const { open, handleOpen, handleClose } = useFormDialog();

  // state that allow to pass the facility clicked to the formDialog
  const [selectedFacility, setSelectedFacility] = useState([]);
  // setFacilities has been exported because required in a below f
  const { facilities, setFacilities, loading, error } = useApi(API);

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
    // handleOpen();
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
    // handleClose();
  };

  return (
    <div>
      <br />
      <br />
      {loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          Errore: {error}!
        </Alert>
      ) : (
        filteredFacilities.map(facility => (
          <Facility
            facility={facility}
            key={facility.uuid}
            handleOpen={handleOpen}
            onClickModify={onClickModify}
          />
        ))
      )}

      {/* conditionally render formDialog */}
      {open === true ? (
        <FormDialog
          open={open}
          handleClose={handleClose}
          selectedFacility={selectedFacility}
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
