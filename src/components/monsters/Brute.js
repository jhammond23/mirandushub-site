import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import unkn1 from '../NFTpics/monsters/Unknown1/Unknown1.png';
import unkn2 from '../NFTpics/monsters/Unknown1/Unknown2.jpg';
import unkn3 from '../../mirandushub/pics/goblinAlter.jfif';
import brutePic from '../../mirandushub/pics/megaBruteHD.png';

const brute = [
    {
        id : 'Brute',
        name : 'Brute/Mega Brute',
        description : `In the fantasy world of Mirandus, the Brute stands as a towering and menacing adversary. First introduced during the 2023 playtest, the Brute and Mega Brute quickly gained notoriety for their agro style and the chaos it brought to the game. This giant creature wields a massive club capable of dealing tremendous damage. Its high health and damage make it a formidable opponent for even the most skilled players.

        A unique aspect of the Brute's behavior was witnessed during its initial debut, where players strategically lured these behemoths to densely populated areas near safe zones. This tactic turned the Brutes into instruments of havoc, exploiting their high health and damage to affect numerous players simultaneously. The chaos created by this strategy underscored the dynamic and unpredictable nature of gameplay in Mirandus.
        
        Moreover, the Brutes are commonly found around the Goblin Mother's cave, adding an extra layer of challenge for adventurers seeking to confront the Goblin Mother. Their presence near this pivotal location reinforces the need for strategic planning and cautious navigation by players venturing into these perilous areas.
        
        The Brute's role in Mirandus exemplifies the game's immersive and dynamic environment, where player actions can significantly impact the gameplay experience for others, creating memorable and challenging encounters within this rich fantasy universe.`,

        tavernTales : [`In the early days of the world of Mirandus, the goblins were a small and scrappy race. They were known for their cunning and their mischievous ways, causing trouble wherever they went.

        But as time passed, the goblins began to evolve. They grew taller and stronger, their bodies becoming more muscular and powerful. They developed a taste for battle and conquest, and they began to see themselves as the dominant force in the world.
        
        The other races of Mirandus took notice of the goblins' transformation, and they began to fear them. The goblins had become a formidable foe, and they were feared by all.
        
        This new race continued to evolve; larger and more powerful than their goblin ancestors, with long, spikey hair on their neck and spiked clubs in their hands. They were a force to be reckoned with, feared by all who encountered them.
        
        They had come a long way from their scrappy, mischievous ancestors. They had evolved into a powerful and fearsome race, one that would stop at nothing to conquer and dominate the world of Mirandus.`],
        Img : brutePic,
        Img2 : unkn2,
        Img3 : unkn3,
        size : 'Significantly larger than an exemplar',
    } 
]

let myMonster = 'Brute / Mega Brute'

const BruteComponent = () => {
    return (
        <div>
            {brute.map((monster) => (
                <div key={monster.id}>
                    <Monsters monsters={monster} />
                </div>
            ))}
            <DisplayBubbles race={brute} myMonster={myMonster}/>
        </div>
    )
}

export { BruteComponent, brute}
