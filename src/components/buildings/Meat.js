import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import meatStan from '../NFTpics/buildings/Meat/meatStan.jpg';

const meats = [
    {
        id : 'Meat1',
        name : 'Meat Stand',
        description : `Basic cured meats can be found here.`,
        rarity : 'Uncommon',
        total : 600,
        Img : meatStan,
        size : '5x5',
    }
]

let myBuilding = 'Meat'

const Meat = () => {
    return (
        <div>
            {meats.map((Meat) => (
                <div>
                    <Building Building={Meat} />
                </div>
            ))}
        <DisplayBubbles race={meats} myBuilding={myBuilding}/>

        </div>
    )
}

export { Meat, meats}