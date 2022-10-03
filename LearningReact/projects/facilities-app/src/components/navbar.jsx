import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Typography>
        <Link to="/home">Home</Link>
      </Typography>
    </div>
  );
}

export default Navbar;
