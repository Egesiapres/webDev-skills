import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';
import { useParams } from 'react-router-dom';

// the new call is caused by the additional details of the url
// using the router, I don't have to pass props
// (no state prop to know if the window has been opened)
function FacilitiesDetail() {
  const [facilityDetail, setFacilityDetail] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [printedError, setPrintedError] = useState('All fine, no errors :)');

  // useParams(): reads from the Routes and from the Link
  const params = useParams();

  const api = axios.create({
    baseURL: `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility/${params.uuid}`,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/');
      console.log(res.data);
      setFacilityDetail(res.data)
      setLoading(false);
    } catch (e) {
      setPrintedError(e.message);
      setError(true);
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <LinearProgress variant="determinate" value={100} />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          Errore: {printedError}!
        </Alert>
      ) : (
        <FacilityDetail facilityDetail={facilityDetail}
        />
      )}
    </div>
  );
}

export default FacilitiesDetail;
