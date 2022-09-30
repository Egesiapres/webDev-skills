import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// props and parent f importing using the destructoring
export default function FormDialog({ facility, onChangedFacility }) {
  // the states deal with the presentation of the dialog form
  const [open, setOpen] = useState(false);
  // storing a value that is not going to change
  const uuid = facility.uuid;

  const [name, setName] = useState(facility.name);
  const [city, setCity] = useState(facility.city);
  const [id, setId] = useState(facility.id);
  // storing all the values needed by the parent component
  const changedFacility = { uuid, name, city, id };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // managing of the custom working of the saving button
  const inputNameHandler = e => {
    const inputName = e.target.value;
    setName(inputName);
  };
  const inputCityHandler = e => {
    const inputCity = e.target.value;
    setCity(inputCity);
  };
  const inputIdHandler = e => {
    const inputId = e.target.value;
    setId(inputId);
  };

  // IMPORTANT
  const handleSave = () => {
    // to return back to the facilitiesList component the data
    onChangedFacility(changedFacility);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        Modifica
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifica dati</DialogTitle>

        <DialogContent>
          <DialogContentText>Inserisci i nuovi dati</DialogContentText>
          <br />

          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            variant="standard"
            value={name}
            onChange={inputNameHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Città"
            fullWidth
            variant="standard"
            value={city}
            onChange={inputCityHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Id"
            fullWidth
            variant="standard"
            value={id}
            onChange={inputIdHandler}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Annulla</Button>
          <Button onClick={handleSave}>Salva</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
