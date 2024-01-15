import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import outf from '../NFTpics/buildings/Outfitter/outf.png';
import largOutf from '../NFTpics/buildings/Outfitter/largOutf.png';
import Building from '../Building';
import clotStan from '../NFTpics/buildings/Outfitter/clotStan.jpg';




const outfitters = [
    
    {
        id : 'Outfitter3',
        name : 'Cloth Stand',
        description : `(5x5) A basic selection of wool and linen goods are found here.`,
        rarity : 'Uncommon',
        total : 8,
        Img : clotStan,
        size : '5x5',
    },
    {
        id : 'Outfitter1',
        name : 'Outfitter',
        description : `Durable clothing is crafted here at the hands of a skilled tailor.`,
        rarity : 'Rare',
        total : 2,
        Img : outf,
        size : '10x10',
    },
    {
        id : 'Outfitter2',
        name : 'Large Outfitter',
        description : `Incredible fineries abound, due to the resident masterworks tailor.`,
        rarity : 'Legendary',
        total : 0,
        Img : largOutf,
        size : '10x20',
    }
]

let myBuilding = 'Outfitter'

const Outfitter = () => {
    return (
        <div>
            {outfitters.map((Outfitter) => (
                <div>
                    <Building Building={Outfitter} />
                </div>
            ))}
        <DisplayBubbles race={outfitters} myBuilding={myBuilding}/>

        </div>
    )
}

export { Outfitter, outfitters}