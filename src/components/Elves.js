import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//videos
import allsVid from './NFTpics/elves/elf-exemplar-the-allsight-elves.mp4';
import brigVid from './NFTpics/elves/elf-exemplar-the-brightsun-elves.mp4';
import darkVid from './NFTpics/elves/elf-exemplar-the-darksun-elves.mp4';
import eartVid from './NFTpics/elves/elf-exemplar-the-earthlight-elves.mp4';
import everVid from './NFTpics/elves/elf-exemplar-the-everflow-elf.mp4';

//pictures
import allsImg from './NFTpics/elves/elf-exemplar-the-allsight-elves.png';
import brigImg from './NFTpics/elves/elf-exemplar-the-brightsun-elves.png';
import darkImg from './NFTpics/elves/elf-exemplar-the-darksun-elves.png';
import eartImg from './NFTpics/elves/elf-exemplar-the-earthlight-elves.png';
import everImg from './NFTpics/elves/elf-exemplar-the-everflow-elf.png';

//abilities
import allsAbilImg from './NFTpics/elves/elf-exemplar-the-allsight-elves.svg';
import brigAbilImg from './NFTpics/elves/elf-exemplar-the-brightsun-elves.svg';
import darkAbilImg from './NFTpics/elves/elf-exemplar-the-darksun-elves.svg';
import eartAbilImg from './NFTpics/elves/elf-exemplar-the-earthlight-elves.svg';
import everAbilImg from './NFTpics/elves/elf-exemplar-the-everflow-elf.svg';

//tt audio
import ttAllSigh from './ttAudio/Elves/ttAllSigh.mp3';
import ttBrigSun from './ttAudio/Elves/ttBrigSun.mp3';
import ttDarkSun from './ttAudio/Elves/ttDarkSun.mp3';
import ttEartLigh from './ttAudio/Elves/ttEartLigh.mp3';
import ttEverFlow from './ttAudio/Elves/ttEverFlow.mp3';


const elves = [
    {
        id : 26,
        name : 'Allsight',
        description : `Very little is known about the most mysterious and oldest of the Elven ancestries, the Allsight Elves. Their relationship with magic cannot easily be explained to other Elves, let alone to humans, orcs, halflings or dwarves. Some of the oldest stories in the land hail these Elves as the stewards of time, without whom the people of the world would have perished on many occasions throughout history. It is believed that they exist across all time. If this is true, it has given them a unique and advantageous understanding of not only the past, but the future as well. Greatly enhanced sight allows the Allsights special mastery over projectile weaponry. As Exemplars, Allsight Elves receive a bonus to all ranged weapons. 
        
        However, possibly more importantly, Allsight Elves also have a bonus towards chance encounters that range from opportunities for great fortune to those which grant them the best advantage in combat.`,
        tavernTales : [`The Allsights are a clan of elite elven archers hailing from the ancient forest of Eryndor, which resides outside the Citadel of the Sun. Their name is derived from their exceptional eyesight, which allows them to spot their targets from great distances and shoot with unerring accuracy. The clan is renowned for its skilled warriors, who are trained from a young age in the art of archery and the use of Materium to enhance their abilities.

        The Allsights are known for their bravery and selflessness, always willing to put themselves in harm's way to protect their kin and defend their homeland. One of the most legendary feats of the Allsights occurred during the War of the Minotaurs, when a horde of minotaurs invaded Eryndor with the intention of plundering its riches and enslaving its people.
        
        As the minotaurs stormed through the forest, laying waste to everything in their path, the Allsights mobilized to defend their home. Led by their chief, the mighty arcord Zarrok, the clan stood their ground against the brutal invaders, raining arrows down upon them from the treetops.
        
        Despite their superior numbers, the minotaurs were no match for the Allsights' deadly precision and magical prowess. With each shot, another minotaur fell, until the invaders were all but decimated.
        
        But the Allsights' greatest victory came word Zarrok, standing atop a high branch, took aim at the minotaurs' leader, a monstrous beast with horns as long as a man is tall. With a single shord Zarrok sent an arrow through the beast's heart, felling it and breaking the minotaurs' will to fight.
        
        The remaining minotaurs fled in terror, leaving the Allsights victorious and the forest of Eryndor safe once more. From that day on, the Allsights were hailed as heroes, and their name became synonymous with bravery and skill in the art of archery.`],
        ttRead : ttAllSigh,
        rarity : 'Ancient',
        abilityName : 'Futurus',
        ability : 'Bonus to Ranged Weapons',
        abilImg : allsAbilImg,
        total : 200,
        Img : allsImg,
        charVid : allsVid,
    },
    {
        id : 27,
        name : 'Brightsun',
        description : `Although they are much rarer than humans, dwarves and orcs, elves are sprinkled throughout the land of Mirandus in precise and balanced variety. Each type of elf has a distinct relationship with magic and a unique origin story for their people. 
        
        Although the types differ in many ways and attribute different sources to their powers, they still recognize that they all come from the same elven ancestors. The elves of the sun are known as the Brightsun Elves. They believe that the sun is the source of all power, the provider of everything touched by its rays. They are said to be “clothed in radiant light,” and as Exemplars, they hold a special ability. Called the Satiation of Sol, this ability allows the Brightsuns to convert energy into health whenever the sun is shining.`,
        tavernTales : [`The Brightsun clan was known throughout Mirandus as a group of exceptional elven exemplars, renowned for their powerful connection to the sun and the magic of Materium. Their ability, Satiation of Sol, allowed them to harness the energy of the sun and use it to heal and rejuvenate themselves, making them formidable warriors in battle.

        One fateful day, a group of monsters attacked the Citadel of the Sun, a sacred place revered by all of Mirandus for its powerful magical properties. The defenders of the citadel were brave and skilled, but they were no match for the relentless horde of monsters that swarmed the walls.
        
        As the moon rose high in the sky, the battle for the Citadel of the Sun raged on. The Brightsun clan fought bravely, but the monsters were relentless and their numbers seemed endless. Lady Selenia Brightsun knew that they could not hold out much longer, and the citadel would fall if they did not find a way to turn the tide of the battle.

        She called upon her clan to gather around her, and together they began to channel their energy and focus their magic, using starlight for their conversion. As they stood in a circle, their hands joined and their eyes closed in concentration, a soft glow began to emanate from their bodies. 

        At first, it was just a faint shimmer, but as the minutes passed and the Brightsuns' focus deepened, the glow grew brighter and brighter. Soon, it was a blinding radiance that filled the battlefield, driving back the monsters and illuminating the darkness.

        The monsters howled and recoiled in fear, their eyes unable to withstand the glare of the Brightsuns' magic. Lady Selenia and her clan stood their ground, determined to hold out until dawn, when the full power of their ability, the Satiation of Sol, could be unleashed.

        As the first rays of sunlight peeked over the horizon, the Brightsuns' magic reached its climax, and they unleashed a devastating wave of energy that wiped out the monsters in a single blow. The citadel was saved, and the Brightsuns were hailed as heroes by the people of Mirandus. The combined Brightsun power now resides atop a tower in the Citadel of the Sun as reminder that light conquers dark.

        From that day forward, the Brightsuns were always called upon to defend the citadel and protect the people of Mirandus from threats that threatened to harm their way of life. They became a symbol of hope and light in the darkest of times, and their legacy lived on for generations to come.`],
        ttRead : ttBrigSun,
        rarity : 'Ancient',
        abilityName : 'Satiation of Sol',
        ability : 'In daylight, you can convert energy to health.',
        abilImg : brigAbilImg,
        total : 200,
        Img : brigImg,
        charVid : brigVid,
    },
    {
        id : 28,
        name : 'Darksun',
        description : `The Darksuns are a cult-like order of Elves who dedicate themselves fully to darkness. They’re not evil. On the contrary, Darksuns are generally very compassionate and peaceful, even compared to other ancestries of Elves. They face life with a peculiar peaceful satisfaction and a sense of wise acceptance. This is the main reason the Darksuns are widely thought to be so very old. They are essentially a doomsday religion, and the time is nearly at hand for the apocalypse of darkness that they see as their ultimate rise to power.

        The stories say that the Darksuns broke away from the traditions of the Elves over a thousand years ago. They inverted their clocks, turning night into day. They began waking in the dark and sleeping during the day. After about 10 years in the dark, Darksuns began developing the ability to see at night. Many of the very next generation of Darksun Elves were born with this ability, and today it is innate in all Darksun Elves.`,
        tavernTales : [`The Darksun elves were a proud and noble clan, known for their exceptional skill in Materium manipulation and their extraordinary vision. Their ability to see in the dark, known as Starlight Vision, was a source of great pride for them, and they often used it to navigate the treacherous forests of Mirandus.

        One night, while out walking his dragon familiar, a young Darksun elf named Eladar stumbled upon a curious sight. As he made his way through the woods, his Starlight Vision revealed a group of gnomes attempting to steal a large, magical mushroom from a group of dwarves.
        
        Eladar couldn't help but laugh at the comical sight of the gnomes, who were barely taller than the mushroom itself, struggling to lift it as the dwarves tried to stop them. In the end, the gnomes were unsuccessful in their attempt, and Eladar watched with amusement as they slunk away, empty-handed.
        
        Despite the mishap, Eladar couldn't help but feel a sense of admiration for the clever gnomes and their determination. He made a mental note to keep an eye out for them in the future, knowing that they were sure to have many more misadventures.`],
        ttRead : ttDarkSun,
        rarity : 'Ancient',
        abilityName : 'Starlight Vision',
        ability : 'You see well at night, as long as you are outside.',
        abilImg : darkAbilImg,
        total : 200,
        Img : darkImg,
        charVid : darkVid,
    },
    {
        id : 29,
        name : 'Earthlight',
        description : `Elf magic is typically focused strongly around the sun, but not all elven disciplines rely upon its power for their magical energy. The Earthlight Elves are one such discipline; they enjoy the sun as many of their brethren, but they are equally at one with their magic no matter their surroundings. For these accomplished magic users, spells are still powered by light, but the light upon which they rely is an imperceptible force provided not by the sun, but by the planet itself. As long as they have the Earth underfoot, Earthlight Elves are much more comfortable using magic than even the most experienced human mages. 
        
        As Exemplars, Earthlight Elves come with a trait called Serenity, which reduces the casting cost of all spells.`,
        tavernTales : [`The Earthlight elves were a proud and ancient clan, known for their exceptional abilities in the arcane arts. Their unique connection to the Materium allowed them to cast spells with ease and precision, earning them the title of exemplars among their kin.
        
        The Great War of Mirandus was a long and bloody conflict that lasted for many years, pitting the forces of light against the darkness that threatened to consume the kingdom. At the heart of the darkness was the Witch Queen, a powerful sorceress who commanded an army of demons and other foul creatures.

        As the war raged on, it seemed that all hope was lost. The Witch Queen's forces were relentless, and despite the bravery of the kingdom's defenders, they were being pushed back on all fronts.

        It was at this dire moment that the Earthlight elves were called upon to lend their formidable magical abilities to the cause. Led by the powerful Lord Zarrok, the clan arrived on the battlefield in a blaze of magic and light, ready to face the darkness head on.

        The Earthlight elves fought with a ferocity that belied their slender frames, unleashing devastating spells upon the enemy ranks with ease. Their natural affinity for the Materium allowed them to cast spells with less energy, giving them a significant advantage in the heat of battle.

        Despite being vastly outnumbered, the Earthlight elves never wavered, fighting with all their might to protect their home and their people. In the end, their bravery and determination paid off, as the Witch Queen and her hordes were driven back, and the kingdom was saved.

        The Earthlight elves were hailed as heroes, their deeds remembered and celebrated by generations to come. Their ability to harness the Materium with such ease became the stuff of legend, inspiring countless others to follow in their footsteps and become exemplars themselves.`],
        ttRead : ttEartLigh,
        rarity : 'Ancient',
        abilityName : 'Serenity',
        ability : 'All spells come naturally, costing less energy to cast.',
        abilImg : eartAbilImg,
        total : 200,
        Img : eartImg,
        charVid : eartVid,
    },
    {
        id : 30,
        name : 'Everflow',
        description : `Elves are the rarest of the intelligent creatures that populate the world of Mirandus, and even rarer among them are the magnificent Everflow Elves. Every elf has a deep and intrinsic understanding of magical energy, but the Everflow Elves spend extremely long lifetimes studying and meditating on the conductive flow of magic. They view magic not as a doctrine of “spells” to be cast, but as the natural flow of energy, which when harnessed correctly, can overcome any obstacle and perform even the most challenging task with both strength and ease. 
        
        Everflow Elves are exquisitely beautiful to behold, and those who are fortunate enough to know them personally are sometimes able to share in the benefits of their magic. As Exemplars, Everflow Elves are given a powerful bonus to casting speed.`,
        tavernTales : [`The Everflow elves were a proud and ancient clan of exemplars hailing from the mystical forests of Mirandus. They were known for their exceptional proficiency in the art of magic, and were particularly renowned for their ability to cast spells at lightning-fast speeds. This unique talent earned them the nickname "the Swiftcasters," and their services were highly sought after by those in need of quick and effective spellwork.

        One dark and stormy night, an Everflow elf named Ilmare was returning to her home in the enchanted forest after completing a mission for a noble lord. As she walked through the winding paths of the forest, a sense of unease began to wash over her. The wind howled through the trees, and the shadows seemed to dance and shift in the moonlight.
        
        Ilmare quickened her pace, her senses heightened and her hand hovering over the hilt of her magical sword. She had faced many dangers in her time as an exemplar, but there was something about this night that felt different, as if some unseen force was watching her every move.
        
        Suddenly, a figure emerged from the darkness, its eyes glowing with an otherworldly light. Ilmare froze, her heart racing as she gazed upon the creature standing before her. It was a wraith, a ghostly being known for its ability to drain the life force of its victims.
        
        Ilmare knew she had to act fast if she wanted to survive this encounter. She focused her mind, summoning all of her training and skill as an exemplar. With a fierce cry, she unleashed a series of rapid-fire spells, striking the wraith with a barrage of magic.
        
        The wraith staggered, its ghostly form flickering and dissipating under the assault. Ilmare watched as it vanished into the night, her heart pounding with relief and fear. She had faced many dangers in her time as an exemplar, but she knew that she had never come so close to death.
        
        The tale of Ilmare's encounter with the Shadow Demon became one of the most well-known stories in the Everflow clan, and it served as a reminder of the dangers that lurked in the shadows of Mirandus. But it also cemented the Everflow elves' reputation as brave and skilled magic users, capable of facing even the most terrifying foes and emerging victorious.`],
        ttRead : ttEverFlow,
        rarity : 'Ancient',
        abilityName : 'Aspect of Magic',
        ability : 'Bonus to casting speed.',
        abilImg : everAbilImg,
        total : 200,
        Img : everImg,
        charVid : everVid,
    }
]

let myRace = 'Elves'

const Elves = () => {
    return (
        <div>
            {elves.map((elf) => (
                <div>
                    <Exemplar exemplar={elf} />
                </div>
            ))}
        <DisplayBubbles race={elves} myRace={myRace} />

        </div>
    )
}

export { Elves, elves}