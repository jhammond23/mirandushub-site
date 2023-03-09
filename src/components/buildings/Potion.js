import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import potiStan from '../NFTpics/buildings/Potion/potiStan.jpg';
import potiShop from '../NFTpics/buildings/Potion/potiShop.jpg';
import largPotiShop from '../NFTpics/buildings/Potion/largPotiShop.jpg';
import Building from '../Building';


const potions = [
    {
        id : 'Potion1',
        name : 'Potion Stand',
        description : `Basic potions are crafted and sold here.`,
        rarity : 'Uncommon',
        total : 200,
        Img : potiStan,
        size : '5x5',
    },
    {
        id : 'Potion2',
        name : 'Potion Shop',
        description : `The potions crafted here have a variety of uses.`,
        rarity : 'Rare',
        total : 100,
        Img : potiShop,
        size : '10x10',
    },
    {
        id : 'Potion3',
        name : 'Large Potion Shop',
        description : `Mystical potions, prepared by the finest apothecaries, are found here.`,
        rarity : 'Legendary',
        total : 10,
        Img : largPotiShop,
        size : '10x20',
    }
]

let myBuilding = 'Potion'

const Potion = () => {
    return (
        <div>
            {potions.map((Potion) => (
                <div>
                    <Building Building={Potion} />
                </div>
            ))}
        <DisplayBubbles race={potions} myBuilding={myBuilding}/>

        </div>
    )
}

export { Potion, potions}