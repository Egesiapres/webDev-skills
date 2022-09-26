// tentativo mio di creare una custom searchbox
import React from 'react';

function SearchBox() {
  return (
    <div>
      <h1>Ricerca</h1>
      <label>Inserisci il nome della struttura</label>
      <br />
      <br />
      <input type="text" placeholder="Es: Abbiategrasso"></input>
      <button>Cerca!</button>
    </div>
  );
}

export default SearchBox;
