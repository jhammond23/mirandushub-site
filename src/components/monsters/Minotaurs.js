import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import mino1 from '../NFTpics/monsters/Minotaurs/Mino1.jpg';
import DisplayLoreMonster from '../DisplayLoreMonster';




const minotaurs = [
    {
        id : 'Minotaur1',
        name : 'Minotaur',
        description : `Minotaurs are a fearsome race of creatures, known for their immense strength and fierce nature. They stand tall and muscular, with the head and body of a bull and the torso of a human. They have sharp horns on their head and hooves for feet, and they are known for their incredible endurance and physical prowess.
        
        The most well known minotaur in the land of Mirandus has been hailed as the most fearsom beast in all of the land, the Minotaur King.`,
        tavernTales : [`The minotaurs and the goblins had been bitter enemies for as long as anyone could remember. They had fought countless battles, each side determined to emerge victorious.

        But this time, it was different. The stakes were higher than ever before, and both sides knew that the outcome of this battle would have far-reaching consequences.
        
        The minotaurs, with their immense strength and towering stature, seemed like they had the upper hand. They swung their massive clubs, crushing the goblins left and right. But the goblins were quick and agile, darting in and out of the minotaurs' reach and biting and scratching with their sharp claws.
        
        The battle raged on, neither side able to gain the upper hand. It seemed as if it would never end, with both sides suffering heavy casualties.
        
        But then, something changed. The goblins began to communicate with each other in a way that the minotaurs couldn't understand. They used a series of clicks, chirps, and other noises to convey their plans and strategies. The minotaurs were confused and disorganized, unable to keep up with the rapid-fire communication of the goblins.
        
        The tide of the battle turned, and the goblins began to emerge victorious. They used their superior communication skills to outmaneuver and defeat the minotaurs, who fled in defeat.
        
        The goblins rejoiced in their victory, knowing that they had finally defeated their age-old enemy. And it was in this moment that the goblin language was born, a tool that would help them emerge victorious in countless battles to come. The war between the goblins and the minotaurs was far from over, but the goblins knew they had a secret weapon that would help them from that moment on.`],
        Img : mino1,
        size : 'much larger than an exemplar',
    } 
]

let myMonster = 'Minotaurs'

const Minotaur = () => {
    return (
        <div>
            {minotaurs.map((Minotaur) => (
                <div>
                    <Monsters monsters={Minotaur} />
                </div>
            ))}
        <DisplayBubbles race={minotaurs} myMonster={myMonster}/>

        </div>
    )
}

export { Minotaur, minotaurs}