import React from 'react'
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import DisplayLoreMonster from '../DisplayLoreMonster';


const Monster = ({monsters}) => {

  const [shown, setShown] = useState(false);

  const onClick = () => {
      setShown(!shown);
  }


  return (
    <div>
        
      <section id={monsters.name} key={monsters.id}>
        <div className='r-monstersName'>The {monsters.name}</div>
        <div className='r-contForPic'>
          <img src={monsters.Img} className={`r-monsterPic ${monsters.name}Pic`} alt={monsters.name}></img>
      
        </div>
        <div className='r-monstersOuterCont'>
          <div className='r-monstersInfoCont'>
            <div className='r-monstersDescription'>{monsters.description}</div>
          </div>
        </div>              
      </section>
      <div className='btnCont'>
      </div>
    
    </div>
  )
}

export default Monster

/*<button onClick={onClick} className={`tavernTalesBtn ${shown ? 'show' : 'hide'}`}>
          {monsters.name} Tavern Tales
          </button>

{shown === true && ''

        (
        <div className={`tavernTalesContainer ${shown ? 'shown' : 'hidden'}`}>
          <div id='tavernTalesBGCover'>
            <DisplayLore monsters={monsters} />
          </div>
        </div>
        )}
*/