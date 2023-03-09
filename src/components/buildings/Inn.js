import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import tent from '../NFTpics/buildings/Tent/tent.jpg';
import campImg from '../NFTpics/buildings/camp.png';
import largInn from '../NFTpics/buildings/Inn/largInn.jpg';
import granInn from '../NFTpics/buildings/Inn/granInn.jpg';
import majeInn from '../NFTpics/buildings/Inn/majeInn.jpg';
import Building from '../Building';


const inns = [
    {
        id : 'Tent1',
        name : 'Tent',
        description : `Rudimentary best describes this place to rest.`,
        rarity : 'Common',
        total : 2000,
        Img : tent,
        size : '5x5',
    },
    {
        id : 'camp1',
        name : 'Camp',
        description : `Food and a decent night's sleep are found here.`,
        rarity : 'Common',
        total : 800,
        Img : campImg,
        size : '10x10',
    },
    {
        id : 'Inn1',
        name : 'Large Inn',
        description : `You can enjoy a good meal and a nights sleep at this modest inn.`,
        rarity : 'Epic',
        total : 60,
        Img : largInn,
        size : '10x20',
    },
    {
        id : 'Inn2',
        name : 'Grand Inn',
        description : `A bards song, pint of ale, and excellent meals and bedding make this a preferred stop for weary adventurers.`,
        rarity : 'Epic',
        total : 40,
        Img : granInn,
        size : '20x20',
    },
    {
        id : 'Inn3',
        name : 'Magestic Inn',
        description : `Enjoy a transcendent meal and find yourself renewed as you wake from a slumber matched only by kings.`,
        rarity : 'Epic',
        total : 20,
        Img : majeInn,
        size : '20x40',
    }
]

let myBuilding = 'Inn'

const Inn = () => {
    return (
        <div>
            {inns.map((Inn) => (
                <div>
                    <Building Building={Inn} />
                </div>
            ))}
        <DisplayBubbles race={inns} myBuilding={myBuilding}/>

        </div>
    )
}

export { Inn, inns}