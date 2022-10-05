import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TitleContext } from './titleContext';
import { format, parseISO } from 'date-fns';

function FacilityDetail({ facilities }) {
  const title = useContext(TitleContext);

  const date = new Date();
  const creationDate = new Date(facilities.created_at);
  console.log(facilities.created_at);
  console.log(typeof facilities.created_at);
  console.log(date);
  console.log(typeof date);
  console.log(creationDate);
  console.log(typeof creationDate);
  console.log(parseISO(facilities.created_at));
  // console.log(format(parseISO(facilities.created_at), 'MM/dd/yyyy'))

  // const formattedCreationDate = format(creationDate, 'MM/dd/yyyy');
  // console.log(format(creationDate, 'MM/dd/yyy'));

  return (
    <div>
      <br />
      {title}
      <Typography variant="h2">Dettaglio</Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">Nome: {facilities.name}</Typography>
      <Typography variant="h6">Telefono: {facilities.phone}</Typography>
      <Typography variant="body1">Città: {facilities.city}</Typography>
      <Typography variant="body1">
        Indirizzo: {facilities.address}, {facilities.street_number},{' '}
        {facilities.district} ({facilities.country})
      </Typography>
      <Typography variant="body1">CAP: {facilities.zip_code}</Typography>
      <Typography variant="body1">uuid: {facilities.uuid}</Typography>
      <Typography variant="body2">Data di creazione:{}</Typography>
      <Typography variant="body2">Ultimo aggiornamento:{}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;
