import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import tave from '../NFTpics/buildings/Tavern/tave.jpg';
import largTave from '../NFTpics/buildings/Tavern/largTave.jpg';
import granTave from '../NFTpics/buildings/Tavern/granTave.jpg';
import Building from '../Building';



const taverns = [
    {
        id : 'Tavern1',
        name : 'Tavern',
        description : `A basic respite for all weary adventurers and travellers.`,
        rarity : 'Common',
        total : 1400,
        Img : tave,
        size : '10x10',
    },
    {
        id : 'Tavern2',
        name : 'Large Tavern',
        description : `The power of a good meal and a comfortable chair are never lost on a hearty adventurer.`,
        rarity : 'Rare',
        total : 110,
        Img : largTave,
        size : '10x20',
    },
    {
        id : 'Tavern3',
        name : 'Grand Tavern',
        description : `Dining here means brushing shoulders with the most acclaimed heroes of the land.`,
        rarity : 'Rare',
        total : 75,
        Img : granTave,
        size : '20x20',
    }
]

let myBuilding = 'Tavern'

const Tavern = () => {
    return (
        <div>
            {taverns.map((Tavern) => (
                <div>
                    <Building Building={Tavern} />
                </div>
            ))}
        <DisplayBubbles race={taverns} myBuilding={myBuilding}/>

        </div>
    )
}

export { Tavern, taverns}