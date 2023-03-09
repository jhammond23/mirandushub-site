import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';


import convVid from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.mp4';
import deepVid from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.mp4';
import glimVid from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.mp4';
import hollVid from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.mp4';
import ironVid from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.mp4';


import convImg from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.png';
import deepImg from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.png';
import glimImg from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.png';
import hollImg from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.png';
import ironImg from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.png';


import convAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-conveyors.svg';
import deepAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-deep-mountain-clan.svg';
import glimAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-glimmering-clan.svg';
import hollAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-hollowers.svg';
import ironAbilImg from './NFTpics/dwarves/dwarf-exemplar-the-iron-shapers.svg';


//tt audio
import ttConv from './ttAudio/Dwarves/ttConv.mp3';
import ttDeepMounClan from './ttAudio/Dwarves/ttDeepMounClan.mp3';
import ttGlimClan from './ttAudio/Dwarves/ttGlimClan.mp3';
import ttHoll from './ttAudio/Dwarves/ttHoll.mp3';
import ttIronShap from './ttAudio/Dwarves/ttIronShap.mp3';




const dwarves = [
    {
        id : 11,
        name : 'Conveyor',
        description : `The ability to move massive rocks and rich ores is highly prized, as their deity, Gravis is said to hold up the mountains deep within the ground.`,
        tavernTales : [`The Conveyors are a clan of dwarven exemplars known for their exceptional strength and their ability to carry more weight than any other exemplar. They are skilled miners and are often called upon to extract valuable minerals and other resources from the earth.

        One epic story about the Conveyors involves a group of dwarves who were searching for a rare and valuable mineral called mithril. Mithril was highly sought after for its strength and beauty, and it was rumored to be found in the depths of the earth. The Conveyors were determined to find this mineral and bring it to the surface, and they spent years searching for it in the deepest mines and caverns.
        
        Finally, after many long and difficult years of searching, the Conveyors struck mithril. It was a moment of great triumph and celebration, as the dwarves had finally found the mineral they had been seeking for so long.
        
        However, their joy was short-lived, as they soon realized that the mithril was guarded by a group of powerful and dangerous monsters. The Conveyors were determined to extract the mithril and bring it to the surface, but they knew that they would have to fight for it.
        
        The ensuing battle was fierce and epic, as the Conveyors fought against the monsters to protect their discovery. The Conveyors were aided by their exceptional strength and their ability to carry more weight than any other exemplar, which allowed them to carry heavy weapons and armor into battle. In the end, the Conveyors emerged victorious, and they were able to extract the valuable mineral and bring it to the surface.
        
        The tale of the Conveyors' victory over the monsters and their discovery of the mithril is still told throughout Mirandus to this day, and it is a testament to the courage, determination, and strength of the dwarven exemplars.`],
        ttRead : ttConv,
        rarity : 'Epic',
        abilityName : 'Legs of the Pillar',
        ability : 'Bonus to Carrying Weight',
        abilImg : convAbilImg,
        total : 2000,
        Img : convImg,
        charVid : convVid,
    },
    {
        id : 12,
        name : 'Deep Mountain Clan',
        description : `Some say the dwarves of the deep mountains are as numerous as the stones within which they dwell. There are dozens (perhaps hundreds) of clans under the mountains and spread throughout the veins of the planet, and many of them have not seen the sky in countless centuries. They sing songs in hypnotic deep voices of the ancient kings of Mirandus’ past. They work hard in their mines, feast heartily at the slightest occasion, and live fruitful lives of boundless joy.

        The Exemplars known as Deep Mountain Clan have evolved through generations to see without sight in the dark. It is said that a Deep Mountain Clan dwarf can sense their surroundings with great precision, even in the darkest pitch blackness.`,
        tavernTales : [`The Deep Mountain Clan is a clan of dwarven exemplars known for their exceptional vision and their ability to see in pitch black interiors. They are irreplaceable in cave mining adventures and are often called upon when extract valuable minerals and other resources from the depths of the earth.

        One of the most feared tales in all of Mirandus is revered as the Middle Earth Expedition. It involves several Deep Mountain Clan dwarves and a group of others who were exploring a particularly dark and treacherous mine in search of a rare and valuable mineral. As they descended deeper into the earth, they began to feel a sense of foreboding and unease. Despite their ability to see in the darkness, they couldn't shake the feeling that something was watching them from the shadows.
        
        As they continued their journey, the dwarves heard strange noises and whispers in the darkness. They tried to ignore the sounds, but they grew louder and more ominous with each passing moment. Eventually, the dwarves realized that they were not alone in the mine. Something dark and ancient was lurking in the shadows, and it was getting closer with each passing moment.
        
        The exemplars tried to turn back and escape, but it was too late. The creature emerged from the darkness, a massive and terrifying beast with glowing red eyes and sharp teeth. They all fought bravely, but they were no match for the creature. Whether they perished in battle, starved, or succumbed to the darkness, in the end, only a handful of Deep Mountain Clan dwarves managed to escape the mine alive, as they were the only ones with the ability to find their way out. After that, they vowed never to return to the that darkness again.
        
        Although they change every generation, the tales of the Middle Earth Expedition and the encounter with the dark creature in the mine all seem to have one theme in common: a larger than life beast with red eyes means permanent death. This story serves as a warning to all who venture into the depths of the earth.`],
        ttRead : ttDeepMounClan,
        rarity : 'Epic',
        abilityName : 'Surface Sense',
        ability : 'Can see in pitch black interiors.',
        abilImg : deepAbilImg,
        total : 2000,
        Img : deepImg,
        charVid : deepVid,
    },
    {
        id : 13,
        name : 'Glimmering Clan',
        description : `It has been theorized that some of the greatest treasures unearthed in dwarven mining operations have gone unnoticed and been carelessly discarded. Evidence of this lies in the special skills of members of the Glimmering Clan, who are consistently able to prove that there is treasure in the trash and there are riches in the rubble.As if minerals of value call to them through the rocks, these mining experts search through piles of mining debris. No matter the size of the “waste” pile, they can usually find something of value. 
        
        When they appear on a busy mining site, the Glimmering Clan is often a source of frustration for the leaders of the operation because they find the ore that was overlooked. The cleverest mining managers like to hire a member of the Glimmering Clan to sift through the discards of their crew. As Exemplars, these dwarves possess an ability called Ascertain Ore, which offers an exclusive bonus to mining output.`,
        tavernTales : [`The Glimmering Clan was a group of skilled and respected dwarven exemplars who hailed from the heart of the Mirandus mountain range. They were known for their exceptional ability to locate and extract valuable ore, thanks to their unique gift of Ascertain Ore.

        The Glimmering Clan was driven by their love of wealth and rare gems, and they were always on the lookout for new opportunities to increase their riches. They were known for their business acumen and their shrewd negotiating skills, and they were respected (and sometimes feared) by other clans for their ability to get what they wanted.
        
        One dark and stormy night, and the members of the Glimmering Clan were huddled around the fire in their underground hall, listening to the fierce winds and the pounding rain. They were a group of skilled and respected dwarven exemplars, known for their exceptional ability to locate and extract valuable ore thanks to their unique gift.

        Despite the bad weather, the Glimmering Clan was in high spirits, for they had received word of a rich vein of rare gems that had been discovered deep in the Mirandus mountain range. The news had sent ripples of excitement through the clan, and they had immediately begun preparing for a major mining expedition.
        
        The Glimmering Clan knew that they would need help if they were to stand a chance of reaching the vein, and they turned to their allies, the Hollower Clan, a group of dwarven exemplars known for their exceptional speed at mining thanks to their unique ability to mine much faster than any other exemplar.
        
        The Glimmering Clan and the Hollower Clan set out at first light, braving the stormy weather and the treacherous mountain paths. They worked tirelessly, driven by their desire for wealth and their love of rare gems.
        
        As they dug deeper into the mountain, they encountered all sorts of challenges: cave-ins, flash floods, and even the occasional monster. But the Glimmering Clan and the Hollower Clan were determined, and they persevered, driven by their shared goal and their unbreakable bond of friendship.
        
        Finally, after many long weeks of hard work, they reached the vein. It was a veritable treasure trove of rare and precious gems, more wealth than the two clans had ever imagined. They worked around the clock, filling their carts with the sparkling jewels and returning to the surface to sell them.
        
        The Glimmering Clan and the Hollower Clan became the wealthiest and most respected clans in all of Mirandus, and their names were known far and wide. They used their wealth and influence to help others and to improve their communities, and they lived long and happy lives, remembered as heroes and legends in the world of dwarven exemplars.`],
        ttRead : ttGlimClan,
        rarity : 'Epic',
        abilityName : 'Ascertain Ore',
        ability : 'Bonus to mining output.',
        abilImg : glimAbilImg,
        total : 2000,
        Img : glimImg,
        charVid : glimVid,
    },
    {
        id : 14,
        name : 'Hollower',
        description : `Life in the mountains and mines has equipped dwarves with many special skills and abilities, most of which the outside world find incredibly valuable. Searching the stones for the greatest treasures is often a needle-in-a-haystack exercise, especially since small jewels are often valued by their scarcity. In these situations, it is always best to call upon the skills of a Hollower. 
        
        Throughout their ancestry, the Hollowers have made theirs a focus of intuition, developing a sense that allows them to probe stones for weaknesses. Hollowers can perceive unseen cracks within the stones and therefore make the most of every stroke of their hammer or pick. Some even say that the greatest Hollowers can sense the exact location of the sought treasure and uncover it with no wasted time at all. Others simply make the case the Hollowers are consistently lucky. Whatever the explanation, these Exemplars possess a trait called Feel for Fractures, which allows them to mine with a greatly reduced energy cost.`,
        tavernTales : [`The Hollowers were a proud clan of dwarven exemplars who lived deep within the heart of the mountains of Mirandus. They were known throughout the land as the premier miners, able to extract precious Materium from the earth faster than any other exemplar.

        The secret to their speed was their unique connection to the earth and the Materium that flowed within it. They had honed their skills over countless generations, mastering the art of sensing and manipulating the life-like flow of energy through the stones around them.
        
        This ability made them highly sought after by other clans, and they often worked alongside the Glimmering Clan, another group of skilled dwarven exemplars known for their ability to conserve every bit of ore they mined, allowing for more ore mined.
        
        Together, the Hollowers and Glimmering Clan were a formidable force, able to extract and refine Materium at an unprecedented rate. Their combined expertise and speed made them the envy of other exemplars, and they were widely respected and admired throughout Mirandus.
        
        However, the Hollowers were not without their own challenges. As they delved deeper into the earth in search of more Materium, they often encountered dangerous creatures and obstacles that threatened their safety. But they were a determined and hardy people, and they persevered through every challenge, driven by their love of the earth and their desire to provide for their clan.
        
        Despite the dangers they faced, the Hollowers remained steadfast in their mission, continuing to mine and extract Materium at breakneck speeds. And as they did so, they became a symbol of hope and determination to all those who knew of their legend.`],
        ttRead : ttHoll,
        rarity : 'Epic',
        abilityName : 'Feel for Fractures',
        ability : 'Reduced energy costs when mining.',
        abilImg : hollAbilImg,
        total : 2000,
        Img : hollImg,
        charVid : hollVid,
    },
    {
        id : 15,
        name : 'Iron Shaper',
        description : `Although their population is heavily concentrated in caves, not all dwarves live in the depths of the planet. Some have mingled with the many societies of the world for generations, keeping shops, working trades and providing various services to the people of Mirandus. One such dwarven clan is known as the Iron Shapers. Members of this elite clan possess some of the greatest blacksmithing skills in the land, and they dedicate their entire lives to maintaining that superiority. 
        
        The unconventional method by which they raise their children is called the Way of the Hammer. It crafts the ways in which young Iron Shapers see the world, ever focusing on the tools of their trade. The greatest celebration in an Iron Shaper’s life comes suddenly when their first successful hammer strike is made. From all over, Iron Shapers bring gifts to their newest brother or sister, and that day becomes known as their Hammer Day. Unfortunately, many of Iron Shapers were too young to fully remember or understand the significance of their Hammer Day. As Exemplars, 
        
        Iron Shapers possess a trait called Way of the Anvil, which grants them a bonus of reduced energy costs when blacksmithing and allows them to produce high quality weapons and iron implements.`,
        tavernTales : [`The Iron Shapers are a clan of dwarven exemplars who are known for their exceptional skill in blacksmithing and their ability to shape and craft the finest weapons and armor from the purest iron ore. They are renowned throughout the realm of Mirandus for their incredible craftsmanship and their ability to imbue their creations with Materium, infusing them with magical properties that make them highly sought after by warriors and adventurers.

        One of the most famous creations of the Iron Shapers is McCarthy's Lost Hammer, a weapon of extraordinary power and skill that was lost during a daring expedition into the treacherous depths of the Deep Mountain Clan's ancient mines.
        
        The hammer was a massive warhammer, imbued with powerful Materium and imbued with the strength and resilience of the Iron Shapers' ancestors. It was said to be able to shatter steel and stone with a single blow, and its wielder was said to be almost unbeatable in combat.
        
        McCarthy's Lost Hammer was lost during a daring expedition into the famous, Middle Earth expedition, in which all exemplars perished, except a few Deep Mountain Clan dwarves. The expedition was meant for searching for a rare and valuable vein of Materium-rich iron ore. Interupted by a unreal, red-eyed beast, McCarthy's Lost Hammer was laid to rest, disappearing into the darkness of the mines.
        
        Since that fateful day, the Iron Shapers have searched tirelessly for the Lost Hammer, hoping to recover it and restore it to its rightful place among the clan's most prized possessions. Many brave warriors and adventurers have joined the search, hoping to find the Lost Hammer and claim its legendary power for themselves. But so far, the Lost Hammer remains lost, its whereabouts and fate a mystery that continues to haunt the Iron Shapers and the realm of Mirandus.`],
        ttRead : ttIronShap,
        rarity : 'Epic',
        abilityName : 'Way of the Anvil',
        ability : 'Reduced energy costs when blacksmithing.',
        abilImg : ironAbilImg,
        total : 2000,
        Img : ironImg,
        charVid : ironVid,
    }
]

let myRace = 'Dwarves'
/*name this fetchExemplar and use the race as a prop*/

const Dwarves = () => {
    return (
        <div>
            {dwarves.map((dwarf) => (
                <div>
                    <Exemplar exemplar={dwarf} />
                </div>
            ))}
        <DisplayBubbles race={dwarves} myRace={myRace}/>

        </div>
    )
}

export { Dwarves, dwarves}