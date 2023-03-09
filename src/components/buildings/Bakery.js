import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import bake from '../NFTpics/buildings/bakery/bake.png';
import largBake from '../NFTpics/buildings/bakery/largBake.png';
import breaStan from '../NFTpics/buildings/Bread/breaStan.png';



const bakeries = [
    {
        id : 'Bakery1',
        name : 'Bread Stand',
        description : `Basic baked goods are made here with a modest clay oven.`,
        rarity : 'Uncommon',
        total : 600,
        Img : breaStan,
        size : '5x5',
    },
    {
        id : 'Bakery2',
        name : 'Bakery',
        description : `The stone oven here produces an array of excellent baked goods.`,
        rarity : 'Epic',
        total : 200,
        Img : bake,
        size : '10x10',
    },
    {
        id : 'Bakery3',
        name : 'Large Bakery',
        description : `Capable of providing quality baked goods to the entierty of the village.`,
        rarity : 'Uncommon',
        total : 20,
        Img : largBake,
        size : '10x20',
    }
]

let myBuilding = 'Bakery'

const Bakery = () => {
    return (
        <div>
            {bakeries.map((Bakery) => (
                <div>
                    <Building Building={Bakery} />
                </div>
            ))}
        <DisplayBubbles race={bakeries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Bakery, bakeries}