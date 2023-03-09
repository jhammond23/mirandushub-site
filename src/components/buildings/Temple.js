import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import temp from '../NFTpics/buildings/Temple/temp.jpg';
import largTemp from '../NFTpics/buildings/Temple/largTemp.jpg';
import granTemp from '../NFTpics/buildings/Temple/granTemp.jpg';
import majeTemp from '../NFTpics/buildings/Temple/majeTemp.jpg';
import Building from '../Building';


const temples = [
    {
        id : 'Temple1',
        name : 'Simple Temple',
        description : `Healing and blessings can found here, if the offering suffices.`,
        rarity : 'Uncommon',
        total : 500,
        Img : temp,
        size : '10x10',
    },
    {
        id : 'Temple2',
        name : 'Large Temple',
        description : `Great strength and healing are found here, if you have enough coin.`,
        rarity : 'Epic',
        total : 40,
        Img : largTemp,
        size : '10x20',
    },
    {
        id : 'Temple3',
        name : 'Grand Temple',
        description : `Egregious wounds can miraculously heal here, along with blessings of great strength.`,
        rarity : 'Epic',
        total : 30,
        Img : granTemp,
        size : '20x20',
    },
    {
        id : 'Temple4',
        name : 'Majestic Temple',
        description : `For the wealthy, immortality and superhuman blessings are not uncommon here.`,
        rarity : 'Legendary',
        total : 15,
        Img : majeTemp,
        size : '20x40',
    }
]

let myBuilding = 'Temple'

const Temple = () => {
    return (
        <div>
            {temples.map((Temple) => (
                <div>
                    <Building Building={Temple} />
                </div>
            ))}
        <DisplayBubbles race={temples} myBuilding={myBuilding}/>

        </div>
    )
}

export { Temple, temples}