import React, { useState } from 'react';
import Facility from './facility.jsx';
import FormDialog from './formDialog.jsx';
import { LinearProgress, Alert } from '@mui/material';
import useModal from './useModal.jsx';
import { GetFacilities, facilitiesApi } from '../api.js';

function FacilitiesList({ input }) {
  // states that manages the presentation of the dialog form
  // const [open, setOpen] = useState(false);
  // custom hook that does the same work
  // const { open, handleOpen, handleClose } = useModal();
  // shorter syntax
  const modal = useModal();

  // state that allow to pass the facility clicked to formDialog
  const [selectedFacility, setSelectedFacility] = useState([]);
  // setFacilities is required in a below f
  const facilities = GetFacilities(facilitiesApi);

  // logic that talks with the props in App.jsx
  // filter(): returns only the elements that satisfy the conditions specified
  const filteredFacilities = facilities.state.data.filter(filteredFacility => {
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

  // data passing from child to parent
  // map: executes a changing when a condition is satisfied
  const onChangedFacility = changedFacility => {
    const newFacilities = facilities.state.data.map(facility =>
      facility.uuid === changedFacility.uuid ? changedFacility : facility
    );
    // ???
    // facilities.setData(newFacilities);
    // reassign f.s.d in nF
    facilities.state.data = newFacilities;
  };

  return (
    <div>
      <br />
      <br />
      {facilities.state.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facilities.state.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facilities.state.error}!
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
