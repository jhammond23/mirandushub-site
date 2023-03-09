import React from 'react'
import Deed from '../Deed';
import Building from '../Building';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import hitc from '../NFTpics/buildings/Hitch/hitc.jpg';



const hitchingPost = [
    {
        id : 'Hitch1',
        name : 'Hitching Post',
        description : `If you left your horse here, it will still be there when you return.`,
        rarity : 'Common',
        total : 1000,
        Img : hitc,
        size : '5x5',
    }
]

let myBuilding = 'Hitch'

const Hitch = () => {
    return (
        <div>
            {hitchingPost.map((Hitch) => (
                <div>
                    <Building Building={Hitch} />
                </div>
            ))}
        <DisplayBubbles race={hitchingPost} myBuilding={myBuilding}/>

        </div>
    )
}

export { Hitch, hitchingPost}