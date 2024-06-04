import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

// Recupération des données de Pokemon API
export default function Pokemons() {
  const [arrayPokemonName, setarrayPokemonName] = useState(null);
  const [pokemonInfos] = useState([]);
  let [id, setId] = useState(1);

  useEffect(() => {
    const axiosPokemon = async () => {
      const fullresponse = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      const resp = fullresponse.data.results;
      setarrayPokemonName(resp);
    }
    axiosPokemon();
  }, );

  

  useEffect(() => {
    for (id; id < 21; id++) {
      setId(id);
      const objet= {};
      objet.id = id ;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          const resp = response.data.sprites.front_default;
          objet.image = resp;
          pokemonInfos.push( objet );
      })
      .catch((error) => {
        console.error("Donnees non recuperer:", error);
      });
  }},[]);


  if (!arrayPokemonName) {
    return <p> Chargement des données de la page...</p>
  }

  return (
    <div>
      <Pokemon dataName = { arrayPokemonName } dataInfos = { pokemonInfos } />
    </div>
  );
}
