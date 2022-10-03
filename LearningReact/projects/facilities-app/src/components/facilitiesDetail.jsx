import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LinearProgress, Alert } from '@mui/material';
import FacilityDetail from './facilityDetail';

// the new call is caused by the additional details of the url
function FacilitiesDetail({ openedFacility, setOpenedFacility }) {
  const [detail, setDetail] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [printedError, setPrintedError] = useState('All fine, no errors :)');

  const api = axios.create({
    baseURL: `/https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility/${uuid}`,
  });

  // per qualche motivo, probabilmente le props, non sta facendo il fetch
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = api.get('/');
      console.log(res.data); // see the object in the console
      setOpenedFacility(res.data);
      setLoading(false); // RIVEDERE
    } catch (e) {
      setPrintedError(e.name);
      setError(true);
      setLoading(false); // RIVEDERE
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
        <FacilityDetail openedFacility={openedFacility} />
      )}
    </div>
  );
}

export default FacilitiesDetail;
