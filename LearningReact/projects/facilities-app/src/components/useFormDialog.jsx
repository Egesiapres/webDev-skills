import { useState } from 'react';

const useFormDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, handleOpen, handleClose };
};

export default useFormDialog;

// NOTES:
// avoids (a lot of open and) all the setOpen props
// !!!: not separate open from its respective f
// (otherwise problems with the states between components)
// return { example, ... }
// custom hooks allows to avoid repetitions
