import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import jeweStan from '../NFTpics/buildings/Jeweler/jeweStan.jpg';
import jewe from '../NFTpics/buildings/Jeweler/jewe.jpg';
import largJewe from '../NFTpics/buildings/Jeweler/largJewe.jpg';
import Building from '../Building';


const jewelries = [
    {
        id : 'Jeweler1',
        name : 'Jewelry Stand',
        description : `Basic tinkerings are crafted here.`,
        rarity : 'Uncommon',
        total : 200,
        Img : jeweStan,
        size : '5x5',
    },
    {
        id : 'Jeweler2',
        name : 'Jeweler',
        description : `Precious stones and metals are crafted into valuable objects here.`,
        rarity : 'Rare',
        total : 100,
        Img : jewe,
        size : '10x10',
    },
    {
        id : 'Jeweler3',
        name : 'Large Jeweler',
        description : `Here, precious stones are set into the finest of weapons and status symbols.`,
        rarity : 'Legendary',
        total : 10,
        Img : largJewe,
        size : '10x20',
    }
]

let myBuilding = 'Jeweler'

const Jeweler = () => {
    return (
        <div>
            {jewelries.map((Jeweler) => (
                <div>
                    <Building Building={Jeweler} />
                </div>
            ))}
        <DisplayBubbles race={jewelries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Jeweler, jewelries}