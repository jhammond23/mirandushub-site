import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import DisplayLore from './DisplayLore';


const Exemplar = ({ exemplar }) => {
  const [shown, setShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio(exemplar.ttRead));

  const onClick = () => {
    setShown(!shown);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audio.muted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    audio.muted = isMuted;
  }, [isMuted]);


  return (
    <div>
      <section id={exemplar.name} key={exemplar.id}>
        <div className='r-charName'>The {exemplar.name}</div>
        <div className='r-contForVid'>
        <video
          src={exemplar.charVid}
          type='video/mp4'
          className='r-charVid'
          alt={exemplar.name}
          loop
          muted
          webkit-playsinline
          playsinline // add the playsinline attribute here
        ></video>
          <img className='r-charImg' src={exemplar.Img}></img>
          <button
            onClick={onClick}
            className={`tavernTalesBtn ${shown ? 'show' : 'hide'} ${isPlaying ? 'disabled' : ''}`}
          >
            {exemplar.name} Tavern Tales
          </button>
          <button onClick={toggleMute} className='volume tavernTalesBtn'>
            {isMuted ? (
              <i className='fas fa-volume-mute'></i>
            ) : (
              <i className='fas fa-volume-up'></i>
            )}
          </button>
        </div>
        <div className='r-charInfoCont'>
          <div className='r-charDescription'>{exemplar.description}</div>
          <img src={exemplar.abilImg} className='r-abilImg' alt={exemplar.ability}></img>
          <div className='r-abilName'>
            <span>ABILITY NAME:</span> {exemplar.abilityName}
          </div>
          <div className='r-abilDesc'>
            <span>ABILITY DESCRIPTION:</span>
            {exemplar.ability}
          </div>
        </div>
      </section>
      <div className='btnCont'></div>
      <div className={`tavernTalesContainer ${shown ? 'shown' : 'hidden'}`}>
        <div id='tavernTalesBGCover'>
          
          {shown && <DisplayLore exemplar={exemplar} />}
        </div>
      </div>
    </div>
  );
};

export default Exemplar;