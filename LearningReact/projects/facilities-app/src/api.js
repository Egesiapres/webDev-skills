import axios from 'axios';
import useApi from './components/useApi';
import { useParams } from 'react-router-dom';

// f which calls the facilities list
export const GetFacilities = api => {
  const facilities = useApi(api);
  return facilities;
};
// f which calls the single facility neeeded
export const GetFacility = api => {
  const facility = useApi(api);
  return facility;
};

// general f that make an axios call
export const axiosGet = api => axios.get(api);

// all the facilities
export const facilitiesApi =
  'https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility';
// each time a different facility
export const FacilityApi = () => {
  const params = useParams();
  return `${facilitiesApi}/${params.uuid}`;
};

// useParams(): reads from the Routes and from the Link
// export: YES destructoring (object)
// default export: NO destructoring
// hooks can be used only in components
// (both normal and custom h: useParams(), useApi())
// the first letter has to be maiusc
