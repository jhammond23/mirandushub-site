import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import butc from '../NFTpics/buildings/Butchery/butc.png';
import largButc from '../NFTpics/buildings/Butchery/largButc.png';
import meatStan from '../NFTpics/buildings/Meat/meatStan.jpg';



const butcheries = [
    {
        id : 'Meat1',
        name : 'Meat Stand',
        description : `Basic cured meats can be found here.`,
        rarity : 'Uncommon',
        total : 600,
        Img : meatStan,
        size : '5x5',
    },
    {
        id : 'Butchery1',
        name : 'Butchery',
        description : `Butchers here slaughter and prepare a decent selection of meats.`,
        rarity : 'Uncommon',
        total : 200,
        Img : butc,
        size : '10x10',
    },
    {
        id : 'Butchery2',
        name : 'Large Butchery',
        description : `Perfect cuts of the finest meats are readily available here, in great quantity.`,
        rarity : 'Epic',
        total : 20,
        Img : largButc,
        size : '10x20',
    }
]

let myBuilding = 'Butchery'

const Butchery = () => {
    return (
        <div>
            {butcheries.map((Butchery) => (
                <div>
                    <Building Building={Butchery} />
                </div>
            ))}
        <DisplayBubbles race={butcheries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Butchery, butcheries}