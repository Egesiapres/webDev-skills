import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  // the states manage the presentation of the dialog form
  const [open, setOpen] = useState(false);

  const [newName, setNewName] = useState(props.facility.name);
  const [newCity, setNewCity] = useState(props.facility.city);
  const [newId, setNewId] = useState(props.facility.id);
  // const [newFacility, setNewFacility] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // managing of the custom working of the saving button
  const inputNameHandler = e => {
    const inputName = e.target.value;
    setNewName(inputName);
  };
  const inputCityHandler = e => {
    const inputCity = e.target.value;
    setNewCity(inputCity);
  };
  const inputIdHandler = e => {
    const inputId = e.target.value;
    setNewId(inputId);
  };

  const handleSave = () => {
    console.log(newName);
    console.log(newCity);
    console.log(newId);

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
          <DialogContentText>
            Inserisci i nuovi dati per la struttura: {props.facility.name}
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            variant="standard"
            onChange={inputNameHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Città"
            fullWidth
            variant="standard"
            onChange={inputCityHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Id"
            fullWidth
            variant="standard"
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
