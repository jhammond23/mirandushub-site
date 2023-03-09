import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import graiStan from '../NFTpics/buildings/Grain/graiStan.jpg';



const grains = [
    {
        id : 'Grain1',
        name : 'Grain Stand',
        description : `Basic milling can be performed here by hand.`,
        rarity : 'Uncommon',
        total : 600,
        Img : graiStan,
        size : '5x5',
    }
]

let myBuilding = 'Grain'

const Grain = () => {
    return (
        <div>
            {grains.map((Grain) => (
                <div>
                    <Building Building={Grain} />
                </div>
            ))}
        <DisplayBubbles race={grains} myBuilding={myBuilding}/>

        </div>
    )
}

export { Grain, grains}