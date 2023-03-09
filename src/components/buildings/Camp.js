import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import campImg from '../NFTpics/buildings/camp.png';


const camps = [
    {
        id : 'camp1',
        name : 'Camp',
        description : `Food and a decent night's sleep are found here.`,
        rarity : 'Common',
        total : 800,
        Img : campImg,
        size : '10x10',
    }
]

let myBuilding = 'Camp'

const Camp = () => {
    return (
        <div>
            {camps.map((camp) => (
                <div>
                    <Building Building={camp} />
                </div>
            ))}
        <DisplayBubbles race={camps} myBuilding={myBuilding}/>

        </div>
    )
}

export { Camp, camps}