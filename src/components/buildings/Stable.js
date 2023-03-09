import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import hitc from '../NFTpics/buildings/Hitch/hitc.jpg';
import stab from '../NFTpics/buildings/Stable/stab.jpg';
import largStab from '../NFTpics/buildings/Stable/largStab.jpg';
import granStab from '../NFTpics/buildings/Stable/granStab.jpg';
import majeStab from '../NFTpics/buildings/Stable/majeStab.jpg';
import Building from '../Building';


const stables = [
    {
        id : 'Hitch1',
        name : 'Hitching Post',
        description : `If you left your horse here, it will still be there when you return.`,
        rarity : 'Common',
        total : 1000,
        Img : hitc,
        size : '5x5',
    },
    {
        id : 'Stable1',
        name : 'Stable',
        description : `A decent number of stalls and storage for tack are here.`,
        rarity : 'Uncommon',
        total : 400,
        Img : stab,
        size : '10x10',
    },
    {
        id : 'Stable2',
        name : 'Large Stable',
        description : `A plentiful number of clean stalls and tack are found here.`,
        rarity : 'Epic',
        total : 30,
        Img : largStab,
        size : '10x20',
    },
    {
        id : 'Stable3',
        name : 'Grand Stable',
        description : `Fine steeds rest and breed in this reknowned equestrian center.`,
        rarity : 'Epic',
        total : 20,
        Img : granStab,
        size : '20x20',
    },
    {
        id : 'Stable4',
        name : 'Majestic Stable',
        description : `The cantor of these illustrious steeds is unmistakable. All will feel the power of the destriers from the Majestic Stable.`,
        rarity : 'Legendary',
        total : 10,
        Img : majeStab,
        size : '20x40',
    }
]

let myBuilding = 'Stable'

const Stable = () => {
    return (
        <div>
            {stables.map((Stable) => (
                <div>
                    <Building Building={Stable} />
                </div>
            ))}
        <DisplayBubbles race={stables} myBuilding={myBuilding}/>

        </div>
    )
}

export { Stable, stables}