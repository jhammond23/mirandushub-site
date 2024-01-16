import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import unkn1 from '../NFTpics/monsters/Unknown2/Unknown1.jpg';
import unkn2 from '../NFTpics/monsters/Unknown2/Unknown2.jpg';
import unkn3 from '../NFTpics/monsters/Unknown2/Unknown3.jpg';

const goblinMother = [
    {
        id : 'GoblinMother',
        name : 'GoblinMother',
        description : `The Goblin Mother, introduced in the May 2023 playtest, is a central boss figure in the forests of Mirandus. As the matriarch of the goblin clans, she commands respect and fear among her kin. Found deep within a goblin infested cave, a zone notorious for its high-level challenges, she is surrounded by her loyal goblin minions. Players must navigate through the cave systems and overcome hordes of goblins before facing her. The Goblin Mother is known for her cunning strategies and powerful magic, making her a formidable opponent. Defeating her not only requires high-level gear but also several players. Her defeat promises rare loot, including unique crafting materials and powerful artifacts.`,
        

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

let myMonster = 'Goblin Mother'

const GoblinMotherComponent = () => {
    return (
        <div>
            {goblinMother.map((monster) => (
                <div key={monster.id}>
                    <Monsters monsters={monster} />
                </div>
            ))}
            <DisplayBubbles race={goblinMother} myMonster={myMonster}/>
        </div>
    )
}

export { GoblinMotherComponent, goblinMother}