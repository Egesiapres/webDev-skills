import { Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { TitleContext } from './titleContext';

function FacilityDetail({ facilityDetail }) {
  const title = useContext(TitleContext);

  return (
    <div>
      <br />
      {title}
      <Typography variant="h2">Dettaglio</Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">{facilityDetail.name}</Typography>
      <Typography variant="h6">{facilityDetail.phone}</Typography>
      <Typography variant="body1">{facilityDetail.city}</Typography>
      <Typography variant="body1">
        {facilityDetail.address}, {facilityDetail.street_number}
      </Typography>
      <Typography variant="body1">
        {facilityDetail.zip_code} - {facilityDetail.district} (
        {facilityDetail.country}){' '}
      </Typography>
      <Typography variant="body1">{facilityDetail.uuid}</Typography>
      <Typography variant="body2">{facilityDetail.created_at}</Typography>
      <Typography variant="body2">{facilityDetail.updated_at}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;
