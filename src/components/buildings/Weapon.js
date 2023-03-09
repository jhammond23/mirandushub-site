import React from 'react'
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import weapStan from '../NFTpics/buildings/Weapon/weapStan.jpg';
import weapShop from '../NFTpics/buildings/Weapon/weapShop.jpg';
import largWeapShop from '../NFTpics/buildings/Weapon/largWeapShop.jpg';
import granWeapShop from '../NFTpics/buildings/Weapon/granWeapShop.jpg';
import majeWeapShop from '../NFTpics/buildings/Weapon/majeWeapShop.jpg';
import Building from '../Building';


const weapons = [
    {
        id : 'Weapons1',
        name : 'Weapon Stand',
        description : `Basic weapons can be purchased here.`,
        rarity : 'Uncommon',
        total : 600,
        Img : weapStan,
        size : '5x5',
    },
    {
        id : 'Weapons2',
        name : 'Weapon Shop',
        description : `A decent selection of weapons can be found here.`,
        rarity : 'Uncommon',
        total : 200,
        Img : weapShop,
        size : '10x10',
    },
    {
        id : 'Weapons3',
        name : 'Large Weapon Shop',
        description : `A good selection of weapons is found here.`,
        rarity : 'Epic',
        total : 20,
        Img : largWeapShop,
        size : '10x20',
    },
    {
        id : 'Weapons4',
        name : 'Grand Weapon Shop',
        description : `Finely crafted weapons are found here in great numbers.`,
        rarity : 'Epic',
        total : 20,
        Img : granWeapShop,
        size : '20x20',
    },
    {
        id : 'Weapons5',
        name : 'Majestic Weapon Shop',
        description : `The Five Great Kings come here to equip their imperial guard. Nothing more needs to be said.`,
        rarity : 'Legendary',
        total : 5,
        Img : majeWeapShop,
        size : '20x40',
    }
]

let myBuilding = 'Weapons'

const Weapon = () => {
    return (
        <div>
            {weapons.map((Weapons) => (
                <div>
                    <Building Building={Weapons} />
                </div>
            ))}
        <DisplayBubbles race={weapons} myBuilding={myBuilding}/>

        </div>
    )
}

export { Weapon, weapons}