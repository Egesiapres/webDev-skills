import axios from 'axios';
import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';
import API from '../api';
import { useParams } from 'react-router-dom';
import useApi from './useApi';

// the new call is caused by the additional details of the url
// using the router, I don't have to pass props
// (no state prop to know if the window has been opened)
function FacilitiesDetail() {
  // useParams(): reads from the Routes and from the Link
  const params = useParams();
  const api = axios.create({
    baseURL: `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility/${params.uuid}`,
  });
  // const api = axios.create({
  //   baseURL: `${API.baseURL}/${params.uuid}`,
  // });
  const { facilities, loading, error } = useApi(api);

  return (
    <div>
      {loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          Errore: {error}!
        </Alert>
      ) : (
        <FacilityDetail facilities={facilities}
        />
      )}
    </div>
  );
}

export default FacilitiesDetail;
