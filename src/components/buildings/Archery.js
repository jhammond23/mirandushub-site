import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import archStanImg from '../NFTpics/buildings/archery/archStand.png';
import archImg from '../NFTpics/buildings/archery/archery.png';
import largArchImg from '../NFTpics/buildings/archery/largArch.png';
import Building from '../Building';


const archeries = [
    {
        id : 'archery1',
        name : 'Archery Stand',
        description : `A basic stand for crafting bows and fletching arrows.`,
        rarity : 'Uncommon',
        total : 600,
        Img : archStanImg,
        size : '5x5',
    },
    {
        id : 'archery2',
        name : 'Archery',
        description : `Quality bows and crossbows are crafted here.`,
        rarity : 'Uncommon',
        total : 200,
        Img : archImg,
        size : '10x10',
    },
    {
        id : 'archery3',
        name : 'Large Archery',
        description : `At this archery, the truest of arrows are fletched and paired with excellent ranged weapons.`,
        rarity : 'Epic',
        total : 20,
        Img : largArchImg,
        size : '10x20',
    }
]

let myBuilding = 'Archery'

const Archery = () => {
    return (
        <div>
            {archeries.map((archery) => (
                <div>
                    <Building Building={archery} />
                </div>
            ))}
        <DisplayBubbles race={archeries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Archery, archeries}