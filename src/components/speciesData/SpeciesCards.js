import React from "react";
import { speciesList } from "./speciesData";
function SpeciesCards() {
  return (
    <div>
       
      {speciesList.map((speciesName) => {
          return( <>
            <li key={speciesName.id}>{speciesName.name}</li>
            </>)
       
      })}
    </div>
  );
}

export default SpeciesCards;
