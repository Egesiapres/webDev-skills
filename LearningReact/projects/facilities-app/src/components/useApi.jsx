import { useState, useEffect } from 'react';
import { axiosGet } from '../api';

const useApi = api => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // data fetch & fetch management
  // try & catch for the success/failure management
  // new status setters to assign the loading and the error
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axiosGet(api);
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
    }
  };

  // []: dependency/ies
  useEffect(() => {
    fetchData();
  }, []);

  // return the states as an object
  return { data, setData, loading, error };
  
};

export default useApi;

// NOTES:
// 1. a custom hook is a component that doesn't return JSX
// (NO: UI, YES: function)
// 2. if I insert something inside (), NO props, YES: parameters
// 3. AIM: to have a hook (f) that fetches and manages the response
// (I just have to insert the url required from each single situation)

// FETCH:
// fetchData(): f in the body of an anonymous cb f inside the useEffect() hook
// It's the first argument of this hook
// !!!
// []: second argument of useEffect() avoids the continuous data fetching (it happens just one time)
// response: stores the values awaited from the axios call with the url specified
// data: using .data I can acces to the objects stored in response
