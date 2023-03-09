import React from 'react'
import Monsters from '../pages/Monsters';
import DisplayBubbles from '../DisplayBubbles';

//Imgs
import gobl1 from '../NFTpics/monsters/Goblins/goblin1.jpg';
import gobl2 from '../NFTpics/monsters/Goblins/goblin2.jpg';
import gobl3 from '../NFTpics/monsters/Goblins/goblin3.jpg';
import gobl4 from '../NFTpics/monsters/Goblins/goblin4.jpg';


const goblins = [
    {
        id : 'goblin1',
        name : 'Goblin',
        description : `Goblins are a race of small, agile creatures that dwell in the world of Mirandus. They are known for their cunning and mischievous nature, often causing trouble for those around them. Goblins are typically short in stature and move around on all fours, making them highly agile and able to navigate tight spaces with ease. They are also distinguished by a mysterious symbol on their chest, which takes the form of a smaller upside-down triangle surrounded by a larger upside-down triangle. Some say that this symbol holds great power and is the source of the goblins' mischievous ways. Despite their mischievous tendencies, goblins are often feared by other races due to their cunning and formidable fighting abilities. When it comes to combat, goblins are known to fight in groups, using their numbers and agility to their advantage. They are a formidable enemy to face, especially in larger numbers.`,
        tavernTales : [`The Crusade of the Goblins was a turning point for the kingdom. They had always been a relatively peaceful place, with few threats to their security. But that all changed when the goblins arrived.

        At first, the people of Mirandus thought the goblins were just a nuisance. They were small, mischievous creatures that seemed more interested in causing trouble than causing real harm and usually weren't usually scary in a one-on-one fight. However, the people of Mirandus soon learned that goblins weren't a measly race of fodder.
        
        As more and more of the Goblins began showing up around smaller deeds, the looming threat became much more intense. Hordes of goblins began coming out the woodworks and not only attacking, but severely ravaging every small deed in their path. Making their way across Mirandus, the goblins were more powerful and dangerous than anyone could have imagined. They swarmed their opponents with lightning speed, biting and scratching with their sharp claws. Their numbers were overwhelming, and they moved with such agility and ferocity that even the toughest warriors were no match for them.
        
        The Goblin Crusades were a massacre. The goblins slaughtered the defenders of civilization with ease, and it seemed as if there was no way to stop them. The people of Mirandus lived in fear of the goblins from that day on, knowing that they were a powerful and dangerous enemy. No one was safe from their attacks, and it seemed as if the goblins would remain dominant over small deeds forever.
        
        Survivors of the encounters knew that they had to find a way to defeat the goblins. They searched for any weakness the creatures might have, any way to turn the tide of the conflict. And eventually, they found it. Although originally passed off as an unorganized, unintelligent species, a surviving scholar overheard the beasts making organized sounds, almost like a language.
        
        The scholar studied these sounds and became fluent in the language of the beasts. He began to communicate with them, negotiating a peace treaty that ended the crusades. The people of Mirandus were saved, and the goblins were no longer as much of a threat. The kingdom rejoiced, and the scholar was hailed as a hero. Although the attacks slowed, to this day, they have still not stopped. `],
        Img : gobl1,
        Img2 : gobl2,
        Img3 : gobl3,
        Img4 : gobl4,
        size : 'smaller than an exemplar',
    } 
]

let myMonster = 'Goblins'

const Goblin = () => {
    return (
        <div>
            {goblins.map((Goblin) => (
                <div>
                    <Monsters monsters={Goblin} />
                </div>
            ))}
        <DisplayBubbles race={goblins} myMonster={myMonster}/>

        </div>
    )
}

export { Goblin, goblins}