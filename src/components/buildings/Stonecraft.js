import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import stonShop from '../NFTpics/buildings/Stonecraft/stonShop.png';
import largSton from '../NFTpics/buildings/Stonecraft/largSton.png';
import Building from '../Building';



const stonecrafters = [
    {
        id : 'Stonecraft1',
        name : 'Stonecraft Shop',
        description : `The stone work here is the foundation of any settlement.`,
        rarity : 'Uncommon',
        total : 12,
        Img : stonShop,
        size : '10x10',
    },
    {
        id : 'Stonecraft2',
        name : 'Large Stonecraft Shop',
        description : `Incredible fineries abound, due to the resident masterworks tailor.`,
        rarity : 'Legendary',
        total : 0,
        Img : largSton,
        size : '10x20',
    }
]

let myBuilding = 'Stonecraft'

const Stonecraft = () => {
    return (
        <div>
            {stonecrafters.map((Stonecraft) => (
                <div>
                    <Building Building={Stonecraft} />
                </div>
            ))}
        <DisplayBubbles race={stonecrafters} myBuilding={myBuilding}/>

        </div>
    )
}

export { Stonecraft, stonecrafters}