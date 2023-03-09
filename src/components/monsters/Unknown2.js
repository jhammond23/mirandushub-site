import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import unkn1 from '../NFTpics/monsters/Unknown2/Unknown1.jpg';
import unkn2 from '../NFTpics/monsters/Unknown2/Unknown2.jpg';
import unkn3 from '../NFTpics/monsters/Unknown2/Unknown3.jpg';

const unknown2 = [
    {
        id : 'Unknown2',
        name : 'Unknown',
        description : `These creatures are said to be tall and slender, with shimmering skin and long, flowing hair. They are elegantly dressed, with flowing robes and pointy horns on their head. They carry a magic staff, which they use to unleash powerful spells and unleash destruction upon their foes.

        Little is known about these mysterious enemies, but one thing is clear: they look powerful and dangerous, with abilities and motives that are unknown to outsiders.`,
        tavernTales : [`The kingdom of Mirandus was on edge. Reports had been coming in of strange, otherworldly creatures appearing in the kingdom, wreaking havoc and destruction wherever they went. No one knew where they came from or what they wanted.
        
        The creatures were tall and slender, with shimmering skin and long, flowing hair. They were elegantly dressed, with flowing robes and pointy horns on their head. They carried a magic staff, which they used to unleash powerful spells and unleash destruction upon their foes.
        
        The people of Mirandus knew they had to do something to stop these mysterious invaders. They called upon their bravest and strongest soldiers to defend the kingdom, and together they set out to face the unknown foes.
        
        But as they approached the enemy camp, they were greeted by a sight that sent shivers down their spines. The creatures were not just powerful and dangerous - they were also incredibly intelligent. They seemed to anticipate the exemplars' every move, always one step ahead in the battle.
        
        The defenders of Mirandus knew they were outmatched. They fought with all their might, but it seemed as if nothing could stop these mysterious foes. They were intelligent, powerful, and relentless, and the soldiers knew they were in for the fight of their lives.
        
        As the battle raged on, it seemed as if the creatures would emerge victorious. But in the end, the the creatures haulted their attacks and fled. No one knows why these beautiful, yet destructive beings left, seemingly without a reason. The people of Mirandus lived in constant fear of these intelligent and formidable foes, never knowing when they would strike again.`],
        Img : unkn2,
        Img2 : unkn2,
        Img3 : unkn3,
        size : 'seems to be around the height of an exemplar'
    } 
]

let myMonster = 'Unknown2'

const Unknown2 = () => {
    return (
        <div>
            {unknown2.map((Unknown) => (
                <div>
                    <Monsters monsters={Unknown} />
                </div>
            ))}
        <DisplayBubbles race={unknown2} myMonster={myMonster}/>

        </div>
    )
}

export { Unknown2, unknown2}