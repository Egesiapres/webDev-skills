import React, { useState, useEffect } from 'react';

function ReturnedFacilitiesList (props) {
  const [returnedFacilitiesList, setReturnedFacilitiesList] = useState([]);
  
  useEffect(() => {
    setReturnedFacilitiesList(props.data);
  }, [])

  return (
    <div key={returnedFacilitiesList.id}>
      <h3>{returnedFacilitiesList.name}</h3>
      <p>{returnedFacilitiesList.city}</p>
    </div>
  )
}

export default ReturnedFacilitiesList;

// PROBLEMI
// 1. React Hook useEffect has a missing dependency: 'props.data'. Either include it or remove the dependency array. If 'setState' needs the current value of 'props.data', you can also switch to useReducer instead of useState and read 'props.data' in the reducer  react-hooks/exhaustive-deps