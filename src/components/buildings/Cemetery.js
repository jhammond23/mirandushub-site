import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import ceme from '../NFTpics/buildings/Cemetery/ceme.png';
import largCeme from '../NFTpics/buildings/Cemetery/largCeme.png';
import granCeme from '../NFTpics/buildings/Cemetery/granCeme.png';
import Building from '../Building';



const cemeteries = [
    {
        id : 'Cemetery1',
        name : 'Cemetery',
        description : `Slain players can slowly return to life here in this modest cemetery.`,
        rarity : 'Common',
        total : 160,
        Img : ceme,
        size : '10x10',
    },
    {
        id : 'Cemetery2',
        name : 'Large Cemetery',
        description : `Many slain players can return to life here in this cemetery.`,
        rarity : 'Rare',
        total : 60,
        Img : largCeme,
        size : '10x20',
    },
    {
        id : 'Cemetery3',
        name : 'Grand Cemetery',
        description : ` A great many slain players can quickly return to life in this sprawling cemetery.`,
        rarity : 'Rare',
        total : 30,
        Img : granCeme,
        size : '20x20',
    }
]

let myBuilding = 'Cemetery'

const Cemetery = () => {
    return (
        <div>
            {cemeteries.map((Cemetery) => (
                <div>
                    <Building Building={Cemetery} />
                </div>
            ))}
        <DisplayBubbles race={cemeteries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Cemetery, cemeteries}