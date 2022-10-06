import axios from 'axios';
import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';
// import { useParams } from 'react-router-dom';
import { GetFacility, FacilityApi } from '../api.js';

// the new call is caused by the additional details of the url
// using the router, I don't have to pass props
// (no state prop to know if the window has been opened)
function FacilitiesDetail() {
  const facility = GetFacility(FacilityApi())

  return (
    <div>
      {facility.loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : facility.error ? (
        <Alert variant="outlined" severity="error">
          Errore: {facility.error}!
        </Alert>
      ) : (
        <FacilityDetail data={facility.data}
        />
      )}
    </div>
  );
}

export default FacilitiesDetail;
