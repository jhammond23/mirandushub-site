import React, { useState } from 'react';
import GuildCard from './GuildCard';
import Tilt from 'react-parallax-tilt';
import bgpic from '../mirandushub/pics/tavern.jpg'

const GuildList = (props) => {
  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'start',
    width: '95vw',
    color: '#f6df52',
    backgroundColor: '#111',
    borderRadius: '25px',
    justifyContent: 'center',
    margin: 'auto',
    border: '4px solid #ffb700',
    boxShadow: '10px 30px 60px black, inset 0px 0px 400px black',
    filter: 'brightness(90%)',
    padding: '30px',
    zIndex: '-1',
    transformStyle: 'preserve-3d',
  };

  return (
    <div style={gridStyle}>
      {props.guilds.map(guild => (
        <GuildCard
          tiltAngleYInitial={15}
          key={guild.id}
          imageUrl={guild.imageUrl}
          name={guild.name}
          description={guild.description}
          discord={guild.discordLink}
          youtube={guild.youtubeLink}
          website={guild.websiteLink}
          needBorder={guild.needBorder}

        />
      ))}
    </div>
  );
};

export default GuildList;