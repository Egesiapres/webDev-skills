import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FacilityDetail({ openedFacility }) {
  console.log(openedFacility);

  // the first time prints undefined
  const params = useParams();
  useEffect(() => {
    console.log('Params', params)
  }, [params])

  return (
    <div>
      <Typography variant="h2">Dettaglio</Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">{openedFacility.name}</Typography>
      <Typography variant="h6">{openedFacility.city}</Typography>
      <Typography variant="body1">{openedFacility.region}</Typography>
      <Typography variant="h5">{openedFacility.id}</Typography>
      <Typography variant="h7">{openedFacility.uuid}</Typography>
      <Typography variant="body2">{openedFacility.created_at}</Typography>
      <Typography variant="body2">{openedFacility.updated_at}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/home">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;
