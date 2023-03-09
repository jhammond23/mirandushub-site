import React from 'react'
import Building from '../Building';
import Deed from '../Deed';
import DisplayBubbles from '../DisplayBubbles';

//NFT Img
import brew from '../NFTpics/buildings/Brewery/brew.png';
import largBrew from '../NFTpics/buildings/Brewery/largBrew.png';



const breweries = [
    {
        id : 'Brewery1',
        name : 'Brewery',
        description : `The brewers here take pride in their mead and ale.`,
        rarity : 'Uncommon',
        total : 300,
        Img : brew,
        size : '10x10',
    },
    {
        id : 'Brewery2',
        name : 'Large Brewery',
        description : `The mead and ale produced here and stored in fine oak casks is a mainstay of all quality taverns.`,
        rarity : 'Epic',
        total : 20,
        Img : largBrew,
        size : '10x20',
    }
]

let myBuilding = 'Brewery'

const Brewery = () => {
    return (
        <div>
            {breweries.map((Brewery) => (
                <div>
                    <Building Building={Brewery} />
                </div>
            ))}
        <DisplayBubbles race={breweries} myBuilding={myBuilding}/>

        </div>
    )
}

export { Brewery, breweries}