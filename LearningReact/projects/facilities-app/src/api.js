import axios from 'axios';
import useApi from './components/useApi';
import { useParams } from 'react-router-dom';

// facilities api f
// using useApi, NO: getFacilities, YES: GetFacilities
// it has to be a React component
export const GetFacilities = api => {
  const facilities = useApi(api);
  return facilities;
};

export const GetFacility = api => {
  const facility = useApi(api);
  return facility;
};

// general f that uses axios
export const axiosGet = api => axios.get(api);

// all the facilities
export const facilitiesApi =
  'https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility';

// each time a different facility
export const FacilityApi = () => {
  const params = useParams();
  return `${facilitiesApi}/${params.uuid}`
};

// an object has to be destructored
// YES: facilitiesApi, NO: GetFacilities

// useParams(): reads from the Routes and from the Link
