import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import tent from '../NFTpics/buildings/Tent/tent.jpg';

const tents = [
    {
        id : 'Tent1',
        name : 'Tent',
        description : `Rudimentary best describes this place to rest.`,
        rarity : 'Common',
        total : 2000,
        Img : tent,
        size : '5x5',
    }
]

let myBuilding = 'Tent'

const Tent = () => {
    return (
        <div>
            {tents.map((Tent) => (
                <div>
                    <Building Building={Tent} />
                </div>
            ))}
        <DisplayBubbles race={tents} myBuilding={myBuilding}/>

        </div>
    )
}

export { Tent, tents}