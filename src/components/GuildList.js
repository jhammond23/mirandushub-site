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
    width: '100vw',
    color: '#f6df52',
    backgroundColor: 'tranparent',
    justifyContent: 'center',
    margin: 'auto',
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