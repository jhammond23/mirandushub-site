import React from "react";

import MOMLogo from './NFTpics/guilds/MOMLogo.png';
import FarmersLogo from './NFTpics/guilds/FarmersGuildLogo.jpg';
import EverglenLogo from './NFTpics/guilds/EverglenLogo.png';
import SevenSailsLogo from './NFTpics/guilds/SevenSailsLogo.png';
import DrunkenDuckLogo from './NFTpics/guilds/DrunkenDuckLogo.png';
import DestriersLogo from './NFTpics/guilds/DestriersLogo.png';


const GuildsArray = [
  {
    id: 1,
    name: 'Masters of Materium',
    description: `Want to maximize fun and medieval riches? Check out the biggest guild in Mirandus.
    
    THE SIMPLE GOALS OF MOM:

    1. Become the most profitable* Mirandus guild for all our members.
    2. Be the “funnest” Mirandus guild.`,
    imageUrl: MOMLogo,
    discordLink:'https://discord.gg/ZpnFUDVrrN',
    youtubeLink: 'https://www.youtube.com/@mastersofmaterium8077',
    websiteLink: 'https://www.mastersofmaterium.com',
    needBorder: false,
  },
  {
    id: 2,
    name: 'Everglen',
    description: 'Everglen prioritizes fun, success, and community. We are committed to supporting each other, offering guild perks and strategic plot placement to help our members thrive.',
    imageUrl: EverglenLogo,
    discordLink:'https://discord.gg/3zeu9TrzEw',
    youtubeLink: '',
    websiteLink: '',
    needBorder: false,

  },
  {
    id: 3,
    name: 'Mirandus Farmers',
    description: 'The Mirandus Farmers serves as a community hub. Creating communications tools, network pathways and logistical help for all players of the game. We are neutral grounds for helping facilitate and foster relationships within the Mirandus community!',
    imageUrl: FarmersLogo,
    discordLink:'https://discord.gg/hTv3yjSJyX',
    youtubeLink: 'https://www.youtube.com/@farmersguild2384',
    websiteLink: '',
    needBorder: false,
  },
  {
    id: 4,
    name: 'Destrier\'s of Mirandus',
    description: 'We are the largest organized stable / breeders group in Mirandus and growing. We have roots with most all of the major guilds that will be found with in the world of Mirandus. We are breeders and care takers of all and needs. We look to help and support and help to breed the best mounts within Mirandus!',
    imageUrl: DestriersLogo,
    discordLink:'https://discord.gg/S3vbX9UN',
    youtubeLink: '',
    websiteLink: '',
    needBorder: true,
  },
  {
    id: 5,
    name: 'Drunken Duck Taverns',
    description: 'Drunken Duck Taverns are the pride of Mirandus.  Our mission is to provide much needed rest, nourishment and fun to the weary adventurer and farmer throughout the land!',
    imageUrl: DrunkenDuckLogo,
    discordLink:'https://discord.gg/zr27ycPaJk',
    youtubeLink: 'https://www.youtube.com/@OnChainGaming ',
    websiteLink: '',
    needBorder: true,
  },
  {
    id: 6,
    name: 'Seven Sails',
    description: 'Seven Sails is the pride of Mirandus shipping and land transport.  Our mission is to provide speedy and safe travel for adventurers and goods across the seas and lands of Mirandus!',
    imageUrl: SevenSailsLogo,
    discordLink:'https://discord.gg/QJv7suKtTx',
    youtubeLink: 'https://www.youtube.com/@OnChainGaming',
    websiteLink: '',
    needBorder: true,

  },
];
  export default GuildsArray;