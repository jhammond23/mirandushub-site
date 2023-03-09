import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import barn from '../NFTpics/buildings/Barns/barn.png';
import largBarn from '../NFTpics/buildings/Barns/largBarn.png';



const barns = [
    {
        id : 'Barns1',
        name : 'Barn',
        description : `A decent sized barn capable of handling the basics of livestock management.`,
        rarity : 'Uncommon',
        total : 1500,
        Img : barn,
        size : '10x10',
    },
    {
        id : 'Barns2',
        name : 'Large Barn',
        description : `A robust haven for livestock, well stocked and ready for all ranching needs.`,
        rarity : 'Rare',
        total : 110,
        Img : largBarn,
        size : '10x20',
    }
]

let myBuilding = 'Barns'

const Barn = () => {
    return (
        <div>
            {barns.map((barn) => (
                <div>
                    <Building Building={barn} />
                </div>
            ))}
        <DisplayBubbles race={barns} myBuilding={myBuilding}/>

        </div>
    )
}

export { Barn, barns}