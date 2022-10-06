import React, { useState } from 'react';
import Facility from './facility.jsx';
import FormDialog from './formDialog.jsx';
import { LinearProgress, Alert } from '@mui/material';
import useModal from './useModal.jsx';
import { GetFacilities, facilitiesApi } from '../api.js';

function FacilitiesList({ input }) {
  // the states deal with the presentation of the dialog form
  // const [open, setOpen] = useState(false);
  // using a custom hook that does the same work
  // const { open, handleOpen, handleClose } = useModal();
  // below: same thing, shorter syntax
  const modal = useModal();

  // state that allow to pass the facility clicked to the formDialog
  const [selectedFacility, setSelectedFacility] = useState([]);
  // setFacilities has been exported because required in a below f
  const facilities = GetFacilities(facilitiesApi);

  // logic that talks with the props in App.jsx
  // filer(): returns only the elements that satisfy the conditions specified
  const filteredFacilities = facilities.data.filter(filteredFacility => {
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

  // how to pass data from a child to a parent
  // map: executes a changing when a condition is satisfied
  const onChangedFacility = changedFacility => {
    const newFacilities = facilities.data.map(facility =>
      facility.uuid === changedFacility.uuid ? changedFacility : facility
    );
    facilities.setData(newFacilities);
  };

  return (
    <div>
      <br />
      <br />
      {facilities.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facilities.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facilities.error}!
        </Alert>
      ) : (
        filteredFacilities.map(facility => (
          <Facility
            facility={facility}
            key={facility.uuid}
            handleOpen={modal.handleOpen}
            onClickModify={onClickModify}
          />
        ))
      )}

      {/* conditionally render formDialog */}
      {modal.open === true ? (
        <FormDialog
          open={modal.open}
          handleClose={modal.handleClose}
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
