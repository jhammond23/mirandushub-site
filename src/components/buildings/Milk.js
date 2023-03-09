import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import milkStan from '../NFTpics/buildings/Milk/milkStan.jpg';

const milks = [
    {
        id : 'Milk1',
        name : 'Milk Stand',
        description : `A basic stand for milking cows and sheep.`,
        rarity : 'Uncommon',
        total : 600,
        Img : milkStan,
        size : '5x5',
    }
]

let myBuilding = 'Milk'

const Milk = () => {
    return (
        <div>
            {milks.map((Milk) => (
                <div>
                    <Building Building={Milk} />
                </div>
            ))}
        <DisplayBubbles race={milks} myBuilding={myBuilding}/>

        </div>
    )
}

export { Milk, milks}