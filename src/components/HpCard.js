import React, { useState, useEffect } from "react";
import HpCharacters from "../mock/hp-characters.json";

const HpCard = () => {

    return (
      <div>
      {
       HpCharacters.map (HpCharacter => <h1> {HpCharacter.name} </h1>)
      }
   </div>
    );
  };
  
  export default HpCard;