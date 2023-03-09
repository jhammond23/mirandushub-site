import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import breaStan from '../NFTpics/buildings/Bread/breaStan.png';



const breads = [
    {
        id : 'Bread1',
        name : 'Bread Stand',
        description : `Basic baked goods are made here with a modest clay oven.`,
        rarity : 'Uncommon',
        total : 600,
        Img : breaStan,
        size : '5x5',
    }
]

let myBuilding = 'Bread'

const Bread = () => {
    return (
        <div>
            {breads.map((Bread) => (
                <div>
                    <Building Building={Bread} />
                </div>
            ))}
        <DisplayBubbles race={breads} myBuilding={myBuilding}/>

        </div>
    )
}

export { Bread, breads}