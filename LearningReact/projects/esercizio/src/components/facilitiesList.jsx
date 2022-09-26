// DATA IMPORTING/MANAGEMENT & RENDERING
import React, { useState, useEffect } from 'react';
// import API from './api.js';
import axios from 'axios';

// printing just API, the data are not visualized
// console.log(API);

// PROCESS
// fetchData(): f in the body of an anonymous cb f inside the useEffect() hook
// It's the first argument of this hook
// !!!
// []: second argument of useEffect() avoids the continuous data fetching (it happens just one time)
// response: stores the values awaited from the axios call with the url specified
// data: using .data I can acces to the objects stored in response

function FacilitiesList(props) {
  const [facilities, setFacilities] = useState([]);
  // data management
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://ooxvks6089.execute-api.eu-south-1.amazonaws.com/dev/test/facility`
      );
      const data = await response.data;
      console.log(data);

      setFacilities(data);
    };

    fetchData();
  }, []);

  // RIVEDERE
  // logic that talks with the props in App.jsx
  const filteredFacilities = facilities.filter(item => {
    if (props.input === '') {
      return item;
    } else {
      return item.name.toLowerCase().includes(props.input)
    }
  })

  return (
    <div>
      <h2>Tutte</h2>
      {filteredFacilities.map(facility => (
        <p key={facility.id}>{facility.name}</p>
      ))}
    </div>
  );
}

export default FacilitiesList;

// PROBLEMI
// console.log(): stampa due volte gli oggetti presi grazie al fetch
// i child dentro al return() devono avere key diversi (quando aggiungo altri tag html)