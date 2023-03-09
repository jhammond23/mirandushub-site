import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaDiscord, FaYoutube, FaGlobe } from 'react-icons/fa';

const GuildCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
  };

  const renderIcons = () => {
    const { discord, youtube, website } = props;

    if (!discord && !youtube && !website) {
      return null;
    }

    return (
      <div className='icons'>
        {discord && (
          <a href={discord} target='_blank' className='discord'>
            <FaDiscord size={25} onClick={handleIconClick} />
          </a>
        )}
        {youtube && (
          <a href={youtube} target='_blank' className='youtube'>
            <FaYoutube size={25} onClick={handleIconClick} />
          </a>
        )}
        {website && (
          <a href={website} target='_blank' className='website'>
            <FaGlobe size={25} onClick={handleIconClick} />
          </a>
        )}
      </div>
    );
  };

  // check if the browser is Edge or Chrome
  const isEdgeOrChrome = window.navigator.userAgent.includes('Edge') || window.navigator.userAgent.includes('Chrome');
  
  // use <Tilt /> if the browser is Edge or Chrome, otherwise use a <div>
  const CardComponent = isEdgeOrChrome ? Tilt : 'div';
  
  return (
    <CardComponent className='guildCard-container'>
      <div className={`guildCard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className='card-front'>
          <img className={`guildIMG ${props.needBorder ? 'guildIMGBorder' : ''}`} src={props.imageUrl} alt='' draggable={false} />
          <h2 className='guildName'>{props.name}</h2>
          {renderIcons()}
        </div>
        <div className='card-back'>
          <p className='guildDescription'>{props.description}</p>
          <a href={props.discordLink} target='_blank' rel='noreferrer'>
          </a>
        </div>
      </div>
    </CardComponent>
  );
};

export default GuildCard;
