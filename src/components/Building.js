import React from 'react'
import Tilt from 'react-parallax-tilt';
import DisplayLore from './DisplayLore';
import { useState } from 'react';


const Building = ({Building}) => {

  const [shown, setShown] = useState(false);

  const onClick = () => {
      setShown(!shown);
  }


  return (
    <div className='centerplz'>
        
      <section id={Building.name} key={Building.id}>
        <div className='r-charName'>The {Building.name}</div>
          <img src={Building.Img} className='r-deedPic' alt={Building.name}></img>
        <div className='r-buildingOuterCont'>
          <div className='r-buildingInfoCont'>
            <div className='r-buildingDescription'>{Building.description}</div>
            <div className='r-buildingInfo'>
              <div className='r-buildingSize'>Structure Dimentions: <span>{Building.size}</span></div>
              <div className='r-buildingRarity'>Rarity: <span>{Building.rarity}</span></div>
              <div className='r-buildingTotal'>Current number of {Building.name}s: <span>{Building.total}</span></div>
            </div>
          </div>
        </div>              
      </section>
      <div className='btnCont'>
      </div>
        {shown === true && ''

        (
        <div className={`tavernTalesContainer ${shown ? 'shown' : 'hidden'}`}>
          <div id='tavernTalesBGCover'>
            <DisplayLore Building={Building} />
          </div>
        </div>
        )}
    </div>
  )
}

export default Building