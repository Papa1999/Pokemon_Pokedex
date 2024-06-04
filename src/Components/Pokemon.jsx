import React from "react";
import "../style/Pokemon.css";

export default function Pokemon(props) {
  let pokemonInfos = props.dataInfos;
  const showMessage = () => {
    alert("Ce bouton n'est pas encore fonctionnelle");
  }

  return (
    <div className="Layer">
       
        {
          pokemonInfos.map((element) => (
            <div className="Card">

              <img src = { element.image }  alt="pock_image"/>
              <p>
                <span> <b>Numéro: </b> <i> { element.id }</i> </span> <br />
              </p>
                <button className="Add_Pokedex" title="Ajouter à mon Pokedex" onClick={ () => showMessage()}> Ajouter au Pokedex </button>
            </div>
          ))
        }
    </div>
);}