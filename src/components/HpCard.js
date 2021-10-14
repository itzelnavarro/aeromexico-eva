import React, { useState, useEffect } from "react";
import HpCharacters from "../mock/hp-characters.json";

const HpCard = () => {

    return (
      <div className="hpCard">
        <div className="imgCard">
          <img />
        </div>
        <div className="infoCard">
          <div className="statusCard">
            <span> / </span>
            <div className="favFlag"></div>
          </div>
          <h2></h2>
          <div className="detailsCard">
            <p><strong>Cumpleaños:</strong></p>
            <p><strong>Género:</strong></p>
            <p><strong>Color de ojos:</strong></p>
            <p><strong>Color de pelo:</strong></p>
          </div>
        </div>
      {/*
       HpCharacters.map (HpCharacter => <h1> {HpCharacter.name} </h1>)
      */}
      </div>
    );
  };
  
  export default HpCard;