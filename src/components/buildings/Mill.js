import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import graiStan from '../NFTpics/buildings/Grain/graiStan.jpg';
import mill from '../NFTpics/buildings/Mill/mill.jpg';
import largMill from '../NFTpics/buildings/Mill/largMill.jpg';
import Building from '../Building';


const mills = [
    {
        id : 'Grain1',
        name : 'Grain Stand',
        description : `Basic milling can be performed here by hand.`,
        rarity : 'Uncommon',
        total : 600,
        Img : graiStan,
        size : '5x5',
    },
    {
        id : 'Mill1',
        name : 'Mill',
        description : `A small post mill capable of handling most farms needs.`,
        rarity : 'Uncommon',
        total : 200,
        Img : mill,
        size : '10x10',
    },
    {
        id : 'Mill2',
        name : 'Large Mill',
        description : `The sweeps of this smock mill are visible from miles around.`,
        rarity : 'Epic',
        total : 20,
        Img : largMill,
        size : '10x20',
    }
]

let myBuilding = 'Mill'

const Mill = () => {
    return (
        <div>
            {mills.map((Mill) => (
                <div>
                    <Building Building={Mill} />
                </div>
            ))}
        <DisplayBubbles race={mills} myBuilding={myBuilding}/>

        </div>
    )
}

export { Mill, mills}