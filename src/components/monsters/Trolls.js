import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import trol1 from '../NFTpics/monsters/Trolls/Troll1.png';
import trol2 from '../NFTpics/monsters/Trolls/Troll2.png';
import trol3 from '../NFTpics/monsters/Trolls/Troll3.png';



const trolls = [
    {
        id : 'Troll1',
        name : 'Troll',
        description : `Trolls are a race of massive, brute-like creatures that dwell in the world of Mirandus. They are known for their immense strength and towering stature, often standing several times the height of a human. Trolls are typically slow and lumbering, but their brute force and raw power make them formidable foes in combat. They are often armed with massive clubs, which they use to bludgeon their enemies with devastating blows. Despite their slow speed, trolls are feared by other races due to their immense strength and destructive capabilities. They are a formidable enemy to face, especially in large groups.`,
        tavernTales : [`The trolls and the goblins had been bitter enemies for as long as anyone could remember. They had fought countless battles, each side determined to emerge victorious.

        But this time, it was different. The stakes were higher than ever before, and both sides knew that the outcome of this battle would have far-reaching consequences.
        
        The trolls, with their immense strength and towering stature, seemed like they had the upper hand. They swung their massive clubs, crushing the goblins left and right. But the goblins were quick and agile, darting in and out of the trolls' reach and biting and scratching with their sharp claws.
        
        The battle raged on, neither side able to gain the upper hand. It seemed as if it would never end, with both sides suffering heavy casualties.
        
        But then, something changed. The goblins began to communicate with each other in a way that the trolls couldn't understand. They used a series of clicks, chirps, and other noises to convey their plans and strategies. The trolls were confused and disorganized, unable to keep up with the rapid-fire communication of the goblins.
        
        The tide of the battle turned, and the goblins began to emerge victorious. They used their superior communication skills to outmaneuver and defeat the trolls, who fled in defeat.
        
        The goblins rejoiced in their victory, knowing that they had finally defeated their age-old enemy. And it was in this moment that the goblin language was born, a tool that would help them emerge victorious in countless battles to come. The war between the goblins and the trolls was far from over, but the goblins knew they had a secret weapon that would help them from that moment on.`],
        Img : trol1,
        Img2 : trol2,
        Img3 : trol3,
        size : 'much larger than an exemplar',
    } 
]

let myMonster = 'trolls'

const Troll = () => {
    return (
        <div>
            {trolls.map((Troll) => (
                <div>
                    <Monsters monsters={Troll} />
                </div>
            ))}
        <DisplayBubbles race={trolls} myMonster={myMonster}/>

        </div>
    )
}

export { Troll, trolls}