import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import simpGran from '../NFTpics/buildings/Granary/simpGran.jpg';
import gran from '../NFTpics/buildings/Granary/gran.jpg';
import largGran from '../NFTpics/buildings/Granary/largGran.jpg';
import granGran from '../NFTpics/buildings/Granary/granGran.jpg';
import Building from '../Building';

const granaries = [
    {
        id : 'Granary1',
        name : 'Simple Granary',
        description : `A small but necessary structure for storing your harvests.`,
        rarity : 'Uncommon',
        total : 600,
        Img : simpGran,
        size : '5x5',
    },
    {
        id : 'Granary2',
        name : 'Granary',
        description : `A solid support to all farming needs.`,
        rarity : 'Uncommon',
        total : 200,
        Img : gran,
        size : '10x10',
    },
    {
        id : 'Granary3',
        name : 'Large Granary',
        description : `A granary this size is essential to large farming operations.`,
        rarity : 'Epic',
        total : 20,
        Img : largGran,
        size : '10x20',
    },
    {
        id : 'Granary4',
        name : 'Grand Granary',
        description : `A harsh winter is easily shrugged off with these grain stores.`,
        rarity : 'Epic',
        total : 15,
        Img : granGran,
        size : '20x20',
    }
]

let myBuilding = 'Granary'

const Granary = () => {
    return (
        <div>
            {granaries.map((Granary) => (
                <div>
                    <Building Building={Granary} />
                </div>
            ))}
        <DisplayBubbles race={granaries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Granary, granaries}