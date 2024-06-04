import React from 'react';
import '../style/Pokedex.css';

export default function Pokedex() {
  return (
    <div>
      <form action="">
        <div>
          <label> Entrez le nom: </label> <input type="text" placeholder= " Pokemon's Name" /> 
        </div>
        
        <button> Rechercher </button>
      </form>
     
      <p className='Not_done'> <b> Working on the Code </b> : No Pokemon on your Pokedex Yet  </p> 
    </div>
  )
}
