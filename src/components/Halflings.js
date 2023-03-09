import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//videos
import evenVid from './NFTpics/halflings/halfling-exemplar-the-evenstrides.mp4';
import longSVid from './NFTpics/halflings/halfling-exemplar-the-longsongs.mp4';
import mumsVid from './NFTpics/halflings/halfling-exemplar-the-mumsends.mp4';
import neveVid from './NFTpics/halflings/halfling-exemplar-the-neverlooks.mp4';
import prouVid from './NFTpics/halflings/halfling-exemplar-the-proudhearths.mp4';

//pictures
import evenImg from './NFTpics/halflings/halfling-exemplar-the-evenstrides.png';
import longSImg from './NFTpics/halflings/halfling-exemplar-the-longsongs.png';
import mumsImg from './NFTpics/halflings/halfling-exemplar-the-mumsends.png';
import neveImg from './NFTpics/halflings/halfling-exemplar-the-neverlooks.png';
import prouImg from './NFTpics/halflings/halfling-exemplar-the-proudhearths.png';

//abilities
import evenAbilImg from './NFTpics/halflings/halfling-exemplar-the-evenstrides.svg';
import longSAbilImg from './NFTpics/halflings/halfling-exemplar-the-longsongs.svg';
import mumsAbilImg from './NFTpics/halflings/halfling-exemplar-the-mumsends.svg';
import neveAbilImg from './NFTpics/halflings/halfling-exemplar-the-neverlooks.svg';
import prouAbilImg from './NFTpics/halflings/halfling-exemplar-the-proudhearths.svg';

//tt audio
import ttEvenStri from './ttAudio/Halflings/ttEvenStri.mp3';
import ttLongSong from './ttAudio/Halflings/ttLongSong.mp3';
import ttMumSend from './ttAudio/Halflings/ttMumSend.mp3';
import ttNeveLook from './ttAudio/Halflings/ttNeveLook.mp3';
import ttProuHear from './ttAudio/Halflings/ttProuHear.mp3';


const halflings = [
    {
        id : 21,
        name : 'Evenstrides',
        description : `Running is not always about height or speed, a fact which is excellently exemplified by the halfling clan known as the Evenstrides. Even though halflings are shorter than most humans, these movement specialists are able to perfectly organize the forces involved to create the most efficient method of running, no matter the terrain. They can almost always outrun humans and Halflings both in terms of sprint speed and endurance. 
        
        Through careful control of their weight distribution, Evenstrides also have incredible balance, which allows them to use running as a reliable mode of transportation. If you see a halfling running swiftly across the countryside between villages, chances are it’s an Evenstride. 
        
        As Exemplars, Evenstrides possess the Swiftness trait, which allows them to run with reduced energy cost.`,
        tavernTales : [`The Evenstrides are a clan of halflings who reside in the rolling hills of Mirandus. They are known for their exceptional speed and endurance, making them highly sought after for their services as couriers, scouts, and runners.

        One of the most famous tales of the Evenstrides is the story of how some of the clan narrowly escaped death at the hands of a group of vicious monsters.
        
        It was a dark and stormy night, and the Evenstrides were huddled in their cozy village, seeking shelter from the raging tempest outside. Suddenly, they heard a loud and ominous roar echoing through the hills.
        
        The halflings knew that this was no ordinary storm, but rather the sound of a pack of bloodthirsty beasts. They quickly gathered their belongings and fled, racing through the rain and mud as fast as their legs could carry them.
        
        At the head of the group was a young halfling named Elora, who was renowned for her speed and agility. She led the Evenstrides through a winding maze of narrow ravines and dense forests, always one step ahead of the pursuing monsters.
        
        As the night wore on, the creatures drew closer and closer, their hot breath panting on the heels of the halflings. But Elora refused to give up, pushing herself and her clanmates to their limits as they ran for their lives.
        
        Finally, just as the first light of dawn broke over the horizon, the Evenstrides reached the safety of a nearby town. Exhausted but triumphant, they collapsed in the streets, grateful to have narrowly escaped death at the hands of the ferocious beasts.
        
        The story of Elora and the Evenstrides' escape from the monsters is told and retold throughout Mirandus, a testament to the clan's bravery and determination in the face of unimaginable danger.`],
        ttRead : ttEvenStri,
        rarity : 'Legendary',
        abilityName : 'Swiftness',
        ability : 'Reduced energy costs when running.',
        abilImg : evenAbilImg,
        total : 800,
        Img : evenImg,
        charVid : evenVid,
    },
    {
        id : 22,
        name : 'Longsong',
        description : `Halflings are the merriest people of Mirandus, comprising a majority of its poets, storytellers and musicians. They generally live quiet lives that allow them to create beautiful things without the distractions of a chaotic world. The stories and songs of the halflings can create images, adventures, dreams, even magical spells. 
        
        The halfling Exemplars known as the Longsongs are the most skilled among them, and the friend of a Longsong is one who keeps good company. They say that the Longsongs disguise powerful magic within their tunes, and that the elders can create spells from sound. Halfling Longsongs receive a bonus in the form of reduced energy cost for spells when playing music.`,
        tavernTales : [`The Longsongs were a clan of halflings that hailed from the rolling hills of the Mirandus countryside. They were known throughout the land as skilled musicians and bards, using the power of their music to inspire and uplift those around them.

        But it was not just in peaceful times that the Longsongs proved their worth. In times of war, they were called upon to lend their musical talents to the battlefield, using their melodies to boost the abilities of their allies and demoralize their enemies.
        
        One such instance occurred during a brutal conflict between two rival kingdoms. The Longsongs were summoned to join the ranks of the defending army, and as the battle raged on, they used their music to boost the morale of the soldiers and give them the strength to fight on.
        
        Despite being vastly outnumbered, the defenders held their ground, thanks in large part to the uplifting melodies of the Longsongs. But as the sun began to set and the enemy forces seemed on the verge of victory, all hope seemed lost.
        
        That was when the leader of the Longsongs, a halfling bard named Faelin, stepped forward. With her lute in hand, she began to play a stirring ballad of bravery and courage, her voice ringing out across the battlefield.
        
        The effect was instantaneous. The defenders, invigorated by the song, redoubled their efforts, fighting with renewed vigor. And as the final notes of the ballad faded into the night, the enemy forces broke and fled, driven back by the power of the Longsongs' music.
        
        In the aftermath of the battle, the Longsongs were hailed as heroes, and their reputation as skilled exemplars was solidified. And though they returned to their peaceful lives in the rolling hills, their music would continue to inspire and uplift those around them for generations to come.`],
        ttRead : ttLongSong,
        rarity : 'Legendary',
        abilityName : 'Alacrity of Sound',
        ability : 'Reduced energy costs when playing music.',
        abilImg : longSAbilImg,
        total : 800,
        Img : longSImg,
        charVid : longSVid,
    },
    {
        id : 23,
        name : 'Mumsends',
        description : `Deep in the hills of halfling country there is a small village called Mumsend, sometimes referred to as the quiet village. It is a close-knit community whose residents are made up primarily of the clan known as the Mumsends. These halflings are generally wise observers of their surroundings who speak only rarely. One peculiar result of this strongly held silence through the generations has been the special skill to move silently. In other words, the Mumsends are experts in the art of sneaking up. In fact within their village, society is built around those who are the most skilled not only at sneaking up on others, but resisting being sneaked upon themselves. The game that determines public rank among Mumsend is called Whisper, and as silly as it may seem, the game’s results are binding throughout the town.
        
        Whisper has a complex set of rules, but in summary it is a sneak assassin game in which Mumsends attempt to sneak up on their friends and neighbors and scare them out of their minds with a whispered greeting. Those who elicit the most startles earn the greatest measures of respect from the community. For many Mumsends, the game has proven life-changing, for better or worse. As Exemplars, Mumsends possess a trait called Stilled Passage, which allows them to move in almost complete silence. This can allow them to sneak into areas filled with dangerous creatures or to pick pockets, making it just a bit easier for them to line their purses.`,
        tavernTales : [`The Mumsends are a halfling clan known for their exceptional stealth and speed. They are a close-knit community, and value loyalty and compassion above all else.
        
        One story that is often told within the Mumsends clan is of a young halfling named Grumblefoot. Grumblefoot was known for his clumsiness and tendency to trip over his own feet. One day, while out on a hunting trip, Grumblefoot managed to stumble into a group of bandits.
        
        As the bandits closed in on Grumblefoot, he panicked and accidentally used all of his Materium casting a spell, which he used to enhance his speed and agility. In a flash, Grumblefoot was able to outmaneuver the bandits and make a clean escape.
        
        The Mumsends have always appreciated a good sense of humor, and Grumblefoot's mishap and subsequent bravery became a source of pride for the entire clan. From that day on, Grumblefoot was known as the swiftest and most nimble halfling in the Mumsends clan.`], 
        ttRead : ttMumSend,
        rarity : 'Legendary',
        abilityName : 'Stilled Passage',
        ability : 'Move in almost complete silence.',
        abilImg : mumsAbilImg,
        total : 800,
        Img : mumsImg,
        charVid : mumsVid,
    },
    {
        id : 24,
        name : 'Neverlook',
        description : `Eavesdropping and hiding brings the Neverlooks great pride.  To them, a conversation overheard is meant to be shared — and profited from.`,
        tavernTales : [`The Neverlooks are a proud and honorable halfling clan known for their exceptional skills as exemplars. Their exceptional abilities in combat, stealth, and tracking have made them highly sought after by kings and lords for centuries.

        The Neverlooks are known for their exceptional stealth and ability to move in almost complete silence. This skill has served them well over the years, allowing them to sneak past enemy lines, gather intelligence, and even rescue captives from enemy camps.
        
        One particularly amusing story involving a Neverlook halfling and some drunk Seafarers took place in a crowded tavern on the coast, named the Drunken Duck Tavern. As the halfling sat quietly in a corner, nursing his ale, he overheard a group of Seafarers boasting about a lie they had spread years ago.
        
        According to the Seafarers, they had told a story about sailing to a distant land and nobling slaying a dragon. The Neverlook quickly found out the story was a hoax and the Seafarers only spread the rumor to impress an elven lady.
        
        The Neverlook halfling couldn't help but chuckle to himself as he listened to the Seafarers brag about their deception. Eventually, he couldn't contain himself any longer and burst out laughing, causing the Seafarers to turn and stare at him in confusion.
        
        The halfling quickly composed himself and apologized, explaining that he couldn't help but find their story amusing. The Seafarers, now sobering up, blushed with embarrassment as they realized the halfling had overheard their entire conversation. They sheepishly paid their tab and left the Tavern, vowing to never spread such a ridiculous lie again.`],
        ttRead : ttNeveLook,
        rarity : 'Legendary',
        abilityName : 'Fade',
        ability : 'If crouched and motionless, you are almost invisible.',
        abilImg : neveAbilImg,
        total : 800,
        Img : neveImg,
        charVid : neveVid,
    },
    {
        id : 25,
        name : 'Proudhearths',
        description : `Halflings are well known for not only their seemingly endless capacity for food, but also their great joy and appreciation for eating and drinking. These are peculiar attributes for a people who are so much smaller in stature than humans, but they are nonetheless true. The most skilled halfling cooks are revered as greatly as some cultures treat royalty, and the meals and libations they craft are fit for any Mirandus king. These masters of meals are called the Proudhearths. 
        
        A Proudhearth halfling can cook a massive meal with incredible quickness, no matter the number of guests. It is said that even from a small quantity of ingredients, a Proudhearth can somehow create a many-course feast that will be remembered fondly for the rest of the diners’ lifetimes. As Exemplars, Proudhearths possess a trait called Hearth Master, which reduces their energy costs when cooking or brewing.`,
        tavernTales : [`The Proudhearth clan of halflings is known throughout Mirandus for their exceptional culinary skills. They have a long tradition of cooking and baking, passed down through the generations. The clan's matriarch, Grandma Proudhearth, is considered the greatest chef in all of Mirandus, renowned for her ability to create mouthwatering dishes from even the most mundane ingredients.

        One day, an orc, a dwarf, and a Proudhearth halfling found themselves in a heated cook-off. The stakes were high, as the winner would be crowned the best chef in Mirandus. The orc boasted about his prowess in the kitchen, claiming that he could cook up a storm with his bare hands. The dwarf boasted of his ability to brew the finest ale and create hearty stews with just a few simple ingredients.
        
        But the Proudhearth halfling remained calm and confident. She knew that her family's secret recipes and techniques would give her the edge she needed to win.
        
        As the cook-off began, the orc started a fire and began tossing raw meat into a giant cauldron. The dwarf started brewing a batch of ale, using every pot and pan he could find.
        
        Meanwhile, the Proudhearth halfling set to work preparing a feast fit for a king. She chopped and diced with lightning-fast precision, tossing in just the right amount of spices and herbs to bring out the flavors of each dish.
        
        As the judges tasted each chef's offerings, it was clear that the Proudhearth halfling had outdone her competitors. The judges raved about her perfectly cooked roast, her flavorful soups and stews, and her delectable desserts.
        
        In the end, the Proudhearth halfling was declared the winner, much to the orc and dwarf's dismay. They grudgingly admitted that the halfling had outclassed them in the kitchen, and the Proudhearth clan's reputation as the best cooks in Mirandus was cemented once and for all.`],
        ttRead : ttProuHear,
        rarity : 'Legendary',
        abilityName : 'Hearth Master',
        ability : 'Reduced energy costs when cooking and brewing.',
        abilImg : prouAbilImg,
        total : 800,
        Img : prouImg,
        charVid : prouVid,
    }
]

let myRace= 'Halflings'

const Halflings = () => {
    return (
        <div>
            {halflings.map((halfling) => (
                <div>
                    <Exemplar exemplar={halfling} />
                </div>
            ))}
        <DisplayBubbles race={halflings} myRace={myRace} />

        </div>
    )
}

export { Halflings, halflings}