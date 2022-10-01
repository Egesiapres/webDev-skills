import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

function FacilityDetails({ facility }) {

  return (
    <div>
      <Typography variant="h6">{facility.name}</Typography>
      <Typography variant="body1">{facility.city}</Typography>
      <Typography variant="body2">{facility.id}</Typography>
    </div>
  );
}

export default FacilityDetails;
