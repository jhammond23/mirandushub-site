import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import simpForg from '../NFTpics/buildings/Forge/simpForg.jpg';
import forg from '../NFTpics/buildings/Forge/forg.png';
import largForg from '../NFTpics/buildings/Forge/largForg.jpg';
import granForg from '../NFTpics/buildings/Forge/granForg.jpg';
import majeForg from '../NFTpics/buildings/Forge/majeForg.jpg';
import Building from '../Building';


const forges = [
    {
        id : 'Forge1',
        name : 'Simple Forge',
        description : `Some heat and a small anvil help provide village basics.`,
        rarity : 'Uncommon',
        total : 800,
        Img : simpForg,
        size : '5x5',
    },
    {
        id : 'Forge2',
        name : 'Forge',
        description : `A decent structure where many fine items have been forged.`,
        rarity : 'Uncommon',
        total : 300,
        Img : forg,
        size : '10x10',
    },
    {
        id : 'Forge3',
        name : 'Large Forge',
        description : `A strong presence in any town, as it's fires are critical to adventurers.`,
        rarity : 'Epic',
        total : 20,
        Img : largForg,
        size : '10x20',
    },
    {
        id : 'Forge4',
        name : 'Grand Forge',
        description : `All blacksmiths know the of the Grand Forge and aspire to create there.`,
        rarity : 'Epic',
        total : 15,
        Img : granForg,
        size : '20x20',
    },
    {
        id : 'Forge5',
        name : 'Majestic Forge',
        description : `The Majestic Forge rivals the sun, easily purifying and shaping the mightiest of weapons and armor.`,
        rarity : 'Legendary',
        total : 5,
        Img : majeForg,
        size : '20x40',
    }
]

let myBuilding = 'Forge'

const Forge = () => {
    return (
        <div>
            {forges.map((Forge) => (
                <div>
                    <Building Building={Forge} />
                </div>
            ))}
        <DisplayBubbles race={forges} myBuilding={myBuilding}/>

        </div>
    )
}

export { Forge, forges}