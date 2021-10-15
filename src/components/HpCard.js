import React, { useState, useEffect } from "react";
import HpCharacters from "../mock/hp-characters.json";
import './HpCard.scss';

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

  function houseBg(house) {
    switch(house){
      case 'Hufflepuff':
        return 'bgHuff';
        break;
      case 'Ravenclaw':
        return 'bgRaven';
        break;
      case 'Slytherin':
        return 'bgSlyth';
        break;
      default:
          return 'bgGriff';
    }
  }

  const renderHpCharacter = () => {

    return hpData.map((HpCharacter, index) => (
      <div className="hpCard" key={index}>
        <div className={"houseCard " + houseBg(HpCharacter.house)}>
          <div className="imgCard">
            <img src={HpCharacter.image}/>
          </div>
        </div>
        <div className="infoCard">
          <div className="statusCard">
            <span>{HpCharacter.alive ? 'vivo' : 'muerto'}  {HpCharacter.hogwartsStudent ? '/ estudiante' : ''}{HpCharacter.hogwartsStaff ? '/ staff' : ''}</span>
            <div className="bookmarkCard"></div>
          </div>
          <h2>{HpCharacter.name}</h2>
          <div className="detailsCard">
            <p><strong>Cumpleaños: </strong>{HpCharacter.dateOfBirth ? HpCharacter.dateOfBirth : 'unknown'}</p>
            <p><strong>Género: </strong>{HpCharacter.gender}</p>
            <p><strong>Color de ojos: </strong>{HpCharacter.eyeColour ? HpCharacter.eyeColour : 'unknown'}</p>
            <p><strong>Color de pelo: </strong>{HpCharacter.hairColour}</p>
          </div>
        </div>
      </div>
    ));
  };
    return <div className="cardContainer">{renderHpCharacter()}</div>;
    
};
  
export default HpCard;