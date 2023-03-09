import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import simpSH from '../NFTpics/buildings/StoreHouse/simpSH.jpg';
import SH from '../NFTpics/buildings/StoreHouse/SH.jpg';
import largSH from '../NFTpics/buildings/StoreHouse/largSH.jpg';
import granSH from '../NFTpics/buildings/StoreHouse/granSH.jpg';
import Building from '../Building';

const storeHouses = [
    {
        id : 'StoreHouses1',
        name : 'Simple Storehouse',
        description : `A basic structure for storing crafted goods.`,
        rarity : 'Common',
        total : 1200,
        Img : simpSH,
        size : '5x5',
    },
    {
        id : 'StoreHouses2',
        name : 'Storehouse',
        description : `A decent storehouse for holding perishables and crafted goods.`,
        rarity : 'Uncommon',
        total : 400,
        Img : SH,
        size : '10x10',
    },
    {
        id : 'StoreHouses3',
        name : 'Large Storehouse',
        description : `A large structure, capable of storing a bounty of enticing delictables.`,
        rarity : 'Epic',
        total : 30,
        Img : largSH,
        size : '10x20',
    },
    {
        id : 'StoreHouses4',
        name : 'Grand Storehouse',
        description : ` A large structure, capable of storing a bounty of enticing delictables.`,
        rarity : 'Epic',
        total : 20,
        Img : granSH,
        size : '20x20',
    }
]

let myBuilding = 'StoreHouses'

const StoreHouse = () => {
    return (
        <div>
            {storeHouses.map((StoreHouse) => (
                <div>
                    <Building Building={StoreHouse} />
                </div>
            ))}
        <DisplayBubbles race={storeHouses} myBuilding={myBuilding}/>

        </div>
    )
}

export { StoreHouse, storeHouses}