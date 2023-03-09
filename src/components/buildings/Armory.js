import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import armoStanImg from '../NFTpics/buildings/armory/armoStand.png';
import armoImg from '../NFTpics/buildings/armory/armo.png';
import largArmoImg from '../NFTpics/buildings/armory/largArmo.png';
import granArmoImg from '../NFTpics/buildings/armory/granArmo.png';
import majeArmoImg from '../NFTpics/buildings/armory/majeArmo.png';
import Building from '../Building';


const armories = [
    {
        id : 'Armory1',
        name : 'Armor Stand',
        description : `Basic armor can be purchased here.`,
        rarity : 'Uncommon',
        total : 600,
        Img : armoStanImg,
        size : '5x5',
    },
    {
        id : 'Armory2',
        name : 'Armor Shop',
        description : `A decent selection of armor can be found here.`,
        rarity : 'Uncommon',
        total : 200,
        Img : armoImg,
        size : '10x10',
    },
    {
        id : 'Armory3',
        name : 'Large Armor Shop',
        description : `A good selection of armor is found here.`,
        rarity : 'Epic',
        total : 20,
        Img : largArmoImg,
        size : '10x20',
    },
    {
        id : 'Armory4',
        name : 'Grand Armor Shop',
        description : `High quality armor in great number can be procured here.`,
        rarity : 'Epic',
        total : 15,
        Img : granArmoImg,
        size : '20x20',
    },
    {
        id : 'Armory5',
        name : 'Majestic Armor Shop',
        description : `From a singular need, to outfitting an entire guild, the finest selection and quality can be found here.`,
        rarity : 'Legendary',
        total : 5,
        Img : majeArmoImg,
        size : '20x40',
    }
]

let myBuilding = 'Armory'

const Armory = () => {
    return (
        <div>
            {armories.map((Armory) => (
                <div>
                    <Building Building={Armory} />
                </div>
            ))}
        <DisplayBubbles race={armories} myBuilding={myBuilding}/>

        </div>
    )
}

export { Armory, armories}