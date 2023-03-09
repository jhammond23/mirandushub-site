import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import simpTane from '../NFTpics/buildings/Tannery/simpTane.png';
import tane from '../NFTpics/buildings/Tannery/tane.png';
import largTane from '../NFTpics/buildings/Tannery/largTane.png';
import Building from '../Building';


const tanneries = [
    {
        id : 'Tannery1',
        name : 'Simple Tannery',
        description : `Basic leather is prepared here.`,
        rarity : 'Uncommon',
        total : 15,
        Img : simpTane,
        size : '5x5',
    },
    {
        id : 'Tannery2',
        name : 'Tannery',
        description : `Leather here is carefully prepared and ready to be crafted into armor, tack, and boots.`,
        rarity : 'Uncommon',
        total : 5,
        Img : tane,
        size : '10x10',
    },
    {
        id : 'Tannery3',
        name : 'Large Tannery',
        description : `All manner of skins are available here and critical in the production of quality leather goods.`,
        rarity : 'Legendary',
        total : 0,
        Img : largTane,
        size : '10x20',
    }
]

let myBuilding = 'Tannery'

const Tannery = () => {
    return (
        <div>
            {tanneries.map((Tannery) => (
                <div>
                    <Building Building={Tannery} />
                </div>
            ))}
        <DisplayBubbles race={tanneries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Tannery, tanneries}