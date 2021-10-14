import React, { useState, useEffect } from "react";
import HpCharacters from "../mock/hp-characters.json";

const HpCard = () => {

  const [hpData, setHpData] = useState([
    {
      name: null,
      gender: null,
      house: null,
      dateOfBirth: null,
      eyeColour: null,
      hairColour: null,
      hogwartsStudent: null,
      hogwartsStaff: null,
      alive: null,
      image: null
    }
  ]);
  useEffect(() => {
    if (HpCharacters) {
      setHpData(HpCharacters);
    }
  }, []);

  const renderHpCharacter = () => {
    console.log(hpData);
    return hpData.map((HpCharacter, index) => (
      <div className="hpCard" key={index}>
        <div className="imgCard">
          <img src={HpCharacter.image}/>
        </div>
        <div className="infoCard">
          <div className="statusCard">
            <span> / </span>
            <div className="favFlag"></div>
          </div>
          <h2>{HpCharacter.name}</h2>
          <div className="detailsCard">
            <p><strong>Cumpleaños: </strong>{HpCharacter.dateOfBirth}</p>
            <p><strong>Género: </strong>{HpCharacter.gender}</p>
            <p><strong>Color de ojos: </strong>{HpCharacter.eyeColour}</p>
            <p><strong>Color de pelo: </strong>{HpCharacter.hairColour}</p>
          </div>
        </div>
      </div>
    ));
  };
    return <div>{renderHpCharacter()}</div>;
    
};
  
export default HpCard;