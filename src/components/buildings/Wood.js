import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import woodStan from '../NFTpics/buildings/Wood/woodStan.jpg';
import wood from '../NFTpics/buildings/Wood/wood.jpg';
import largWood from '../NFTpics/buildings/Wood/largWood.jpg';
import Building from '../Building';


const woods = [
    {
        id : 'Wood1',
        name : 'Woodworking Stand',
        description : `A basic stand for small woodworking projects.`,
        rarity : 'Uncommon',
        total : 600,
        Img : woodStan,
        size : '5x5',
    },
    {
        id : 'Wood2',
        name : 'Woodshop',
        description : `Most small settlements rely on these woodworking essentials.`,
        rarity : 'Uncommon',
        total : 200,
        Img : wood,
        size : '10x10',
    },
    {
        id : 'Wood3',
        name : 'Large Woodshop',
        description : `Beams of old growth redwood and illustrious beds and furniture are crafted here.`,
        rarity : 'Epic',
        total : 20,
        Img : largWood,
        size : '10x20',
    }
]

let myBuilding = 'Wood'

const Wood = () => {
    return (
        <div>
            {woods.map((Wood) => (
                <div>
                    <Building Building={Wood} />
                </div>
            ))}
        <DisplayBubbles race={woods} myBuilding={myBuilding}/>

        </div>
    )
}

export { Wood, woods}