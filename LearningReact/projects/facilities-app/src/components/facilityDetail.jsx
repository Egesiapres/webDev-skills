import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TitleContext } from './titleContext';
import { format, parseISO } from 'date-fns';

function FacilityDetail({ data }) {
  const title = useContext(TitleContext);

  const date = new Date();
  const creationDate = new Date(data.created_at);
  console.log(data.created_at);
  console.log(typeof data.created_at);
  console.log(date);
  console.log(typeof date);
  console.log(creationDate);
  console.log(typeof creationDate);
  console.log(parseISO(data.created_at));
  // console.log(format(parseISO(data.created_at), 'MM/dd/yyyy'))

  // const formattedCreationDate = format(creationDate, 'MM/dd/yyyy');
  // console.log(format(date, 'MM/dd/yyy'));

  return (
    <div>
      <br />
      {title}
      <Typography variant="h2">Dettaglio</Typography>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h4">Nome: {data.name}</Typography>
      <Typography variant="h6">Telefono: {data.phone}</Typography>
      <Typography variant="body1">Città: {data.city}</Typography>
      <Typography variant="body1">
        Indirizzo: {data.address}, {data.street_number},{' '}
        {data.district} ({data.country})
      </Typography>
      <Typography variant="body1">CAP: {data.zip_code}</Typography>
      <Typography variant="body1">uuid: {data.uuid}</Typography>
      <Typography variant="body2">Data di creazione:{}</Typography>
      <Typography variant="body2">Ultimo aggiornamento:{}</Typography>

      <Button className="btn" variant="contained" size="medium">
        <Link to="/">Indietro</Link>
      </Button>
    </div>
  );
}

export default FacilityDetail;
