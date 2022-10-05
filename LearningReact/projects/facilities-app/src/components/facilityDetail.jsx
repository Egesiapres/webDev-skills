import { Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { TitleContext } from './titleContext';

function FacilityDetail({ facilities }) {
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

      <Typography variant="h4">{facilities.name}</Typography>
      <Typography variant="h6">{facilities.phone}</Typography>
      <Typography variant="body1">{facilities.city}</Typography>
      <Typography variant="body1">
        {facilities.address}, {facilities.street_number}
      </Typography>
      <Typography variant="body1">
        {facilities.zip_code} - {facilities.district} (
        {facilities.country}){' '}
      </Typography>
      <Typography variant="body1">{facilities.uuid}</Typography>
      <Typography variant="body2">{facilities.created_at}</Typography>
      <Typography variant="body2">{facilities.updated_at}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;
