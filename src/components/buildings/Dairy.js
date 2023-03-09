import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import dair from '../NFTpics/buildings/Dairy/dair.png';
import largDair from '../NFTpics/buildings/Dairy/largDair.png';
import milkStan from '../NFTpics/buildings/Milk/milkStan.jpg';

const daries = [
    {
        id : 'Milk1',
        name : 'Milk Stand',
        description : `A basic stand for milking cows and sheep.`,
        rarity : 'Uncommon',
        total : 600,
        Img : milkStan,
        size : '5x5',
    },
    {
        id: 'Dairy1',
        name: 'Dairy',
        description: `A decent selection of milks and cheese are produced here.`,
        rarity: 'Uncommon',
        total: 200,
        Img: dair,
        size: '10x10',
    },
    {
        id: 'Dairy2',
        name: 'Large Dairy',
        description: `Beaufort, Brie, Camembert, and Cheddar are among the delicacies prepared here.`,
        rarity: 'Epic',
        total: 20,
        Img: largDair,
        size: '10x20',
    }
]

let myBuilding = 'Dairy'

const Dairy = () => {
    return (
        <div>
            {daries.map((Dairy) => (
                <div>
                    <Building Building={Dairy} />
                </div>
            ))}
            <DisplayBubbles race={daries} myBuilding={myBuilding} />

        </div>
    )
}

export { Dairy, daries }