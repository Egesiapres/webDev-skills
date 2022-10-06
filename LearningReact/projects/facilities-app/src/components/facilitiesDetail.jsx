import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';
import { GetFacility, FacilityApi } from '../api.js';

function FacilitiesDetail() {
  const facility = GetFacility(FacilityApi());

  return (
    <div>
      {facility.state.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facility.state.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facility.state.error}!
        </Alert>
      ) : (
        <FacilityDetail data={facility.state.data} />
      )}
    </div>
  );
}

export default FacilitiesDetail;

// new api call due to the additional details of the new api
// id I use the router, I don't have to pass props
// (no state prop to know if the window has been opened)
