import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import unkn1 from '../NFTpics/monsters/Unknown1/Unknown1.png';
import unkn2 from '../NFTpics/monsters/Unknown1/Unknown2.jpg';
import unkn3 from '../../mirandushub/pics/goblinAlter.jfif';

const unknown1 = [
    {
        id : 'Unknown1',
        name : 'Unknown',
        description : `This mysterious race of creatures is known for their fierce, muscular appearance. They have been seen carrying spiked clubs and have long, spikey hair on their neck. They also bear a strange marking on their chest, a symbol that is unknown to outsiders.

        Their origins and motivations are a mystery, but one thing is clear: they are not to be trifled with. They look to be formidable foes in combat. It is best to avoid encountering these mysterious creatures if possible, for they are a force to be reckoned with.`,
        tavernTales : [`In the early days of the world of Mirandus, the goblins were a small and scrappy race. They were known for their cunning and their mischievous ways, causing trouble wherever they went.

        But as time passed, the goblins began to evolve. They grew taller and stronger, their bodies becoming more muscular and powerful. They developed a taste for battle and conquest, and they began to see themselves as the dominant force in the world.
        
        The other races of Mirandus took notice of the goblins' transformation, and they began to fear them. The goblins had become a formidable foe, and they were feared by all.
        
        This new race continued to evolve; larger and more powerful than their goblin ancestors, with long, spikey hair on their neck and spiked clubs in their hands. They were a force to be reckoned with, feared by all who encountered them.
        
        They had come a long way from their scrappy, mischievous ancestors. They had evolved into a powerful and fearsome race, one that would stop at nothing to conquer and dominate the world of Mirandus.`],
        Img : unkn1,
        Img2 : unkn2,
        Img3 : unkn3,
        size : 'seems to be slighly smaller than an exemplar',
    } 
]

let myMonster = 'Unknown1'

const Unknown1 = () => {
    return (
        <div>
            {unknown1.map((Unknown) => (
                <div>
                    <Monsters monsters={Unknown} />
                </div>
            ))}
        <DisplayBubbles race={unknown1} myMonster={myMonster}/>

        </div>
    )
}

export { Unknown1, unknown1}