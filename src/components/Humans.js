import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Exemplar from './Exemplar';
import DisplayBubbles from './DisplayBubbles';


//videos
import alchVid from './NFTpics/humans/human-exemplar-the-alchemist.mp4';
import rideVid from './NFTpics/humans/human-exemplar-rider-of-the-north.mp4';
import cartVid from './NFTpics/humans/human-exemplar-the-cartographers.mp4';
import goldVid from './NFTpics/humans/human-exemplar-the-goldsmith.mp4';
import greeVid from './NFTpics/humans/human-exemplar-the-greencloaks.mp4';
import pitfVid from './NFTpics/humans/human-exemplar-the-pit-fighters.mp4';
import seafVid from './NFTpics/humans/human-exemplar-the-seafarer.mp4';
import stroVid from './NFTpics/humans/human-exemplar-the-stronghands.mp4';
import trueVid from './NFTpics/humans/human-exemplar-true-provider.mp4';
import weavVid from './NFTpics/humans/human-exemplar-the-weavers.mp4';

//pictures
import alchImg from './NFTpics/humans/human-exemplar-the-alchemist.png';
import rideImg from './NFTpics/humans/human-exemplar-rider-of-the-north.png';
import cartImg from './NFTpics/humans/human-exemplar-the-cartographers.png';
import goldImg from './NFTpics/humans/human-exemplar-the-goldsmith.png';
import greeImg from './NFTpics/humans/human-exemplar-the-greencloaks.png';
import pitfImg from './NFTpics/humans/human-exemplar-the-pit-fighters.png';
import seafImg from './NFTpics/humans/human-exemplar-the-seafarer.png';
import stroImg from './NFTpics/humans/human-exemplar-the-stronghands.png';
import trueImg from './NFTpics/humans/human-exemplar-true-provider.png';
import weavImg from './NFTpics/humans/human-exemplar-the-weavers.png';

//abilities
import alchAbilImg from './NFTpics/humans/alchAbilImg.svg';
import cartAbilImg from './NFTpics/humans/cartAbilImg.svg';
import goldAbilImg from './NFTpics/humans/goldAbilImg.svg';
import greeAbilImg from './NFTpics/humans/greeAbilImg.svg';
import pitfAbilImg from './NFTpics/humans/pitfAbilImg.svg';
import seafAbilImg from './NFTpics/humans/seafAbilImg.svg';
import stroAbilImg from './NFTpics/humans/stroAbilImg.svg';
import trueAbilImg from './NFTpics/humans/trueAbilImg.svg';
import rideAbilImg from './NFTpics/humans/rideAbilImg.svg';
import weavAbilImg from './NFTpics/humans/weavAbilImg.svg';

//tavern tales audio
import ttAlch from './ttAudio/ttAlch.mp3';
import ttCart from './ttAudio/ttCart.mp3';
import ttGoldSmit from './ttAudio/ttGoldSmit.mp3';
import ttGreeCloa from './ttAudio/ttGreeCloa.mp3';
import ttPitFigh from './ttAudio/ttPitFigh.mp3';
import ttSeaf from './ttAudio/ttSeaf.mp3';
import ttStroHand from './ttAudio/ttStroHand.mp3';
import ttTrueProv from './ttAudio/ttTrueProv.mp3';
import ttRideNort from './ttAudio/ttRideNort.mp3';
import ttWeav from './ttAudio/ttWeav.mp3';

let myRace = 'Humans'
const humans = [
    {
        id : 1,
        name : 'Alchemist',
        description : `The art of potion making is never an instinctive skill, but one that must be learned through years of education and experimentation. Mastery of it requires nearly limitless patience and a pure understanding of all elements that make up the world around us. Many agree that the greatest creators of potions are members of the elite human guild known as the Alchemists. Their knowledge is so vast that they can craft the most valued potions and most delicate elixirs from local ingredients no matter their location in the world. Alchemists are good to know, for through their potions they can sometimes help you with impossible tasks. But be warned: They are strikingly aware of their skills and usually carry heavy egos. 
        
        As Exemplars, Alchemists receive a bonus to potion making and are the type of person you want in your group if you plan on exploring some of the more dangerous reaches of Mirandus.`,
        tavernTales : [`The Alchemists have always been a highly respected and admired guild within the world of Mirandus. Their expertise in potion making has saved countless lives and helped adventurers overcome seemingly impossible challenges. However, despite their noble intentions and powerful abilities, the Alchemists have not always been spared from tragedy.

        One such event occurred when a group of Greencloaks, a guild known for their ruthless logging practices and disregard for the natural world, stumbled upon an ancient and rare plant deep in the forests of Mirandus. The Greencloaks, driven by greed and a desire for profit, began to clear the area and chop down the surrounding trees in order to access the plant.
        
        The Alchemists, who relied on the unique properties of this plant for some of their most valuable potions, were devastated by the Greencloaks' actions. They tried to negotiate with the Greencloaks, but the guild was unwilling to listen to reason. In a desperate attempt to save the plant, the Alchemists organized a group of their most skilled potion makers and set out to the forest in an effort to relocate the plant to a safer location.
        
        Unfortunately, their efforts were in vain. The Greencloaks had already destroyed too much of the forest and the plant was lost forever. The Alchemists were heartbroken, not only because they had lost a valuable resource, but because they had also lost a part of their history and cultural identity.
        
        The loss of the plant was a turning point for the Alchemists. It made them realize the importance of protecting the natural world and the delicate balance of its ecosystems. From that point on, they made it their mission to preserve the natural resources of Mirandus and work towards more sustainable and responsible practices.
        
        Despite the challenges they have faced, the Alchemists remain a respected and influential guild within the world of Mirandus. Their skills and knowledge continue to be valued by adventurers and other exemplars, and they continue to use their abilities for the greater good.`],
        ttRead : ttAlch,
        rarity : 'Rare',
        abilityName : 'Potions',
        ability : 'Bonus to potion making.',
        abilImg : alchAbilImg,
        total : 2500,
        Img : alchImg,
        charVid : alchVid,
        
    },
    {
        id : 2,
        name : 'Cartographer',
        description : `It is a powerful gift to view and understand the world from an accurate perspective. Many of the greatest geniuses throughout the generations of Mirandus have possessed this gift, using it to create legendary maps that recount a lesser-known history of the land. 
        
        Without the geographical story that maps can tell, explorers never could have conquered the wild regions, passed through the wastelands or sailed the vast and mighty seas. Today, the legacy of the legendary mapmakers of old lives on through the human Exemplars known as Cartographers. They are born with innate senses of direction, navigation and distances. They are first recognized for their skills when as small children (often toddlers), they are found carefully studying their surroundings and drawing maps in the dirt whose intricacies go beyond their years. 
        
        Once a Cartographer’s skills have been fully developed as an adult, they are able to piece the world together into a tapestry of maps with ease. These Exemplars receive a powerful bonus to all map creation.`,
        tavernTales : [`The Cartographers of Mirandus are a guild of exemplars known for their incredible skills in map making and their innate sense of direction and navigation. From a young age, Cartographers are able to study their surroundings and create detailed and accurate maps, even as toddlers. As they grow and develop their skills, they become masters of their craft, able to piece together the complex and varied landscape of Mirandus into a tapestry of maps with ease.

        However, the origins of the Cartographer guild are shrouded in mystery. It is said that they hailed from a far-off land, a place so distant that it is almost forgotten in the annals of history. According to legend, the Cartographers were a group of travelers and adventurers who set out to explore the unknown reaches of the world.
        
        As they traveled, they encountered all manner of monsters and dangers, including minotaurs, goblins, and giant trolls. Despite the risks, the Cartographers were undaunted and continued on their journey, driven by their thirst for adventure and their desire to chart the unknown.
        
        After many years of travel, the Cartographers finally arrived in Mirandus, a land unlike any they had ever seen before. It was a place of great beauty and wonder, with vast forests, towering mountains, and overflowing with a strange, magical life force, to which they named Materium. The Cartographers were fascinated by this new land and set about exploring and mapping it in great detail.
        
        As they traveled, they encountered all manner of strange and wondrous creatures, each more amazing than the last. They recorded every detail of their journey, creating maps that were both accurate and beautiful. When they finally returned to civilization, they brought with them a collection of maps that told the story of their journey and opened up a new world to exploration.
        
        Today, the legacy of the Cartographers lives on as they continue to explore the corners of Mirandus and create the maps that guide others through the world. Their bravery, determination, and love of exploration are an inspiration to all who know them.`],
        ttRead : ttCart,
        rarity : 'Rare',
        abilityName : 'Cartography',
        ability : 'Bonus to map creation.',
        abilImg : cartAbilImg,
        total : 2500,
        Img : cartImg,
        charVid : cartVid,
    },{
        id : 3,
        name : 'Gold Smith',
        description : `The world of Mirandus is an incredibly abundant place, full of precious metals, valuable resources and priceless jewels and gems. An exemplar guild of humans called Goldsmiths has spent many generations perfecting the crafts of working with precious metals, particularly gold. These metals seem to come to life under the agile fingertips and quality tools of the Goldsmiths. No matter where they roam in the world, a Goldsmith is always able to find work, crafting gold and silver into exquisitely beautiful jewelry. 
        
        As Exemplars, Goldsmiths receive a bonus to jewelry production, which makes them some of the most prized artisans throughout the land.`,
        tavernTales : [`The Goldsmiths of Mirandus are a guild of exemplars known for their incredible skills in working with precious metals, particularly gold. From a young age, Goldsmiths are trained in the craft of metalworking, learning how to shape and mold metals into intricate and beautiful pieces of jewelry. As they grow and develop their skills, they become masters of their craft, able to create exquisite and valuable pieces of jewelry with ease.

        The Goldsmiths have long been allies with other exemplar guilds, particularly the Glimmering Clan and the Hollowers. The Glimmering Clan is a group of dwarves with the ability to mine rare and valuable materials, while the Hollowers are skilled at mining at an incredible speed. Together, the Goldsmiths, Glimmering Clan, and Hollowers form a powerful alliance, working together to gather the resources needed to create the finest jewelry in Mirandus.
        
        The Goldsmiths are known for their wealth and prosperity, and they often reside in citadels and other wealthy land deeds throughout Mirandus. They are highly respected and admired by other exemplars and are often sought out for their expert craftsmanship and ability to create beautiful and valuable pieces of jewelry.
        
        Despite their strong alliances, the Goldsmiths are not without their own challenges. They often reside in wealthy land deeds, such as citadels, which can make them targets for thieves and bandits. In addition, the demand for their craft can be fickle, with trends and styles changing constantly. However, the Goldsmiths are skilled and adaptable, always finding ways to stay ahead of the competition and continue to produce beautiful and valuable pieces of jewelry.

        Overall, the Goldsmiths are a respected and influential guild within the world of Mirandus, known for their artistry and skill in working with precious metals. Their craft is a testament to the abundance of resources and opportunities that exist in the world, and their work is valued by collectors and enthusiasts all over the land.`],
        ttRead : ttGoldSmit,
        rarity : 'Rare',
        abilityName : 'Jewelry',
        ability : 'Bonus to jewelry crafting.',
        abilImg : goldAbilImg,
        total : 2500,
        Img : goldImg,
        charVid : goldVid
    },{
        id : 4,
        name : 'Greencloak',
        description : `Some humans just seem to have an innate sense of the woods. They can listen to the pulse of the trees and know how to push wood to its utmost when it comes to building. It is theorized that The Greencloaks came from a clan deep in the forest, where the noise of the cities and the thrum of civilization could not distract them as they communed with nature. They possess the ability to make wood do things most other craftspeople could only dream of, both in terms of cutting and crafting. 
        
        If you need to clear land to plant a farm, having a Greencloak at your side will give you a substantial bonus in clearing, but also in turning that wood into something useful. As Exemplars, the Greencloaks are unparalleled in their connection to the forests and trees.`,
        tavernTales : [`The Greencloaks of Mirandus are a guild of exemplars known for their innate connection to the forests and trees of the world. From a young age, Greencloaks are trained in the art of cutting and crafting wood, using their skills to build sturdy and durable structures and ships. Their innate understanding of the properties of wood allows them to push it to its limits, creating structures and vessels that are both beautiful and functional.

        One of the most notable features of the Greencloaks is their alliance with the wealthy exemplars of Mirandus. Their skills in building and construction are highly prized, and they are often called upon to create lavish homes, citadels, and other structures for the wealthy and powerful. In return, the Greencloaks are well compensated for their services, allowing them to live comfortable and secure lives.
        
        Despite their close alliance with the wealthy, the Greencloaks are not without their own challenges. One such challenge occurred when they were tasked with colonizing a remote area in the forest that was rumored to contain a rare and valuable plant. The Greencloaks, driven by their desire to extract the maximum value from the land, set out to clear the area and access the plant.
        
        However, they were unaware that the plant was also prized by the Alchemists, a guild of exemplars who relied on it for crafting valuable potions to help explorers in Mirandus. When the Alchemists learned of the Greencloaks' actions, they were devastated and tried to negotiate with the Greencloaks to preserve the plant.
        
        From the Greencloaks' point of view, they saw the plant as a valuable resource that could be exploited for profit, just as the Alchemists were. They were unwilling to compromise their goals and continued to clear the area, ultimately destroying the plant and causing a rift between the two guilds.
        
        Despite the challenges they have faced, the Greencloaks remain a respected and influential guild within the world of Mirandus. Their skills in building and construction are highly prized, and their work is valued by those who can afford their services. While they may have had their differences with the Alchemists in the past, the Greencloaks continue to work towards a brighter future for all exemplars in Mirandus.`],
        ttRead : ttGreeCloa,
        rarity : 'Rare',
        abilityName : 'Woodsman',
        ability : 'Bonus to wood gathering and carpentry.',
        abilImg : greeAbilImg,
        total : 2500,
        Img : greeImg,
        charVid : greeVid,
    },{
        id : 5,
        name : 'Pit Fighter',
        description : `Pit Fighters are said to be the roughest and toughest of the Humans. With a rough beginning, the Pit Fighters are strong in fights in the arena and frequently receive the prize.`,
        tavernTales : [`The Pit Fighters are a race of exemplars known for their strength and ferocity in combat. They hail from the harsh, unforgiving lands of the northern region of Mirandus, where survival is a constant struggle and only the strongest and most skilled warriors can hope to thrive.
        
        The Pit Fighters have a long and storied history, dating back to the earliest days of Mirandus when they were first formed as a warrior tribe. They were known for their brutal fighting style and their willingness to fight barehanded against any foe, be it man or beast. They were feared and respected by all who encountered them, and their reputation as the toughest and most skilled warriors in Mirandus quickly spread throughout the land.
        
        As time passed, the Pit Fighters became more organized and began to participate in organized fighting events around Mirandus. They quickly became a popular attraction, drawing large crowds of spectators who came to see them battle against the monsters and other fearsome creatures that roamed the land. The Pit Fighters reveled in the thrill of combat and the chance to prove their strength and skill, and they quickly became the stars of these events.
        
        Despite their rough beginnings, the Pit Fighters have come to be respected and admired by many in Mirandus. They are known for their fierce loyalty and their unwavering commitment to the cause of justice. They are also known for their generosity and their willingness to help those in need, whether they be fellow Pit Fighters or the common folk of Mirandus.
        
        However, the Pit Fighters do have a deep-seated distain for the magic-wielding elves of Mirandus. They view the elves as arrogant and aloof, and believe that their reliance on magic makes them weak and untrustworthy. This has led to a long-standing rift between the Pit Fighters and the elves, and the two races often find themselves at odds.
        
        Despite their fearsome reputation and their dislike of the elves, the Pit Fighters are a deeply honorable and noble race, and they are an integral part of the fabric of Mirandus. They continue to fight in the arena and on the battlefield, defending the land and its people from all manner of threats, and their legend continues to grow with each passing day.`],
        ttRead : ttPitFigh,
        rarity : 'Rare',
        abilityName : 'Unarmed Melee',
        ability : 'Bonus when fighting empty handed.',
        abilImg : pitfAbilImg,
        total : 2500,
        Img : pitfImg,
        charVid : pitfVid,
    },{
        id : 6,
        name : 'Rider of the North',
        description : `The greatest riders of Mirandus come from the high plains of the north, where it is said that humans are born with the wandering blood. Truly, these nomadic riders take joy in endless travel and free-spirited adventure. 
        
        A Rider of the North travels greater distances in a day than most in their entire lives. Their horses are majestic creatures of breathtaking beauty with whom their riders have a powerful unspoken connection. It is said that a Rider of the North is possessed of such selfless valiance that he will lay down his life for his horse in an instant if necessary. The horses would do the same. Riders of the North receive powerful bonuses to all horse-related skills and abilities.`,
        tavernTales : [`The Riders of the North are a race of exemplars known for their elite horse riding abilities and skills. They hail from the high plains of the northern region of Mirandus, where the rolling grasslands and rugged terrain have bred a hardy and adventurous people.

        The Riders of the North are nomadic by nature, taking joy in endless travel and free-spirited adventure. They are known for their fierce independence and their love of the open road, and they are often seen traversing the vast expanses of Mirandus on their noble Firebrand steeds.
        
        These horses are truly breathtaking creatures, bred for strength, endurance, and beauty. They are the prized possessions of the Riders of the North, and their riders have a deep and unspoken connection to them. It is said that a Rider of the North will lay down their life for their horse in an instant if necessary, and that the horses would do the same for their riders.
        
        The Riders of the North are possessed of a selfless valiance that is rare among exemplars, and they are greatly respected and admired by all who encounter them. They are known for their fierce loyalty and their unwavering commitment to the cause of justice, and they are often called upon to defend the land and its people from all manner of threats.
        
        As a result of their exceptional horsemanship and their deep bond with their horses, the Riders of the North receive powerful bonuses to all horse-related skills and abilities. They are truly masters of the saddle, and their skills are unmatched by any other exemplars in Mirandus.
        
        Despite their nomadic lifestyle, the Riders of the North are an integral part of the fabric of Mirandus. They are a proud and noble race, and their legend continues to grow with each passing day.`],
        ttRead : ttRideNort,
        rarity : 'Rare',
        abilityName : 'Equestrian',
        ability : 'Bonus to all horse skills and abilities.',
        abilImg : rideAbilImg,
        total : 2500,
        Img : rideImg,
        charVid : rideVid,
    },{
        id : 7,
        name : 'Seafarer',
        description : `You are a mariner, a seaman. You’re envied by those who are bound to their landlocked responsibilities, and you’re revered by the most civilized residents of towns and cities. They are ignorant of your existence. They don’t feel the same sense of abandonment as you when you’re gently rocked by the surf. They have no idea of the thrilling rush of adrenaline that comes with a squall as it approaches to swallow your crew and ship into its ravenous chaos. They do not truly reside, as you are well aware.

        Seafarers are compelled to explore beyond the seas with no restrictions. If a Seafarer knows how to get to an uncharted island distant from home, they can go there on their journey without risking too much. Seafarers can travel farther and faster than other players. In fact, if a non-seafaring adventurer of Mirandus has route instructions to a tremendous treasure trove hundreds of miles out to sea, they should connect with a Seafarer to get them there safely… for a price.
        
        On a tossed ship, seamen are at ease, and they navigate by the stars. They can row more effectively and use less energy than other people. They can go further and more securely. They may avoid random encounters and seek out hidden marvels using hints and maps. The Seafarer may find anything in the open sea as long as they know its location.`,
        tavernTales : [`The Seafarers are a race of exemplars known for their elite sailing. They hail from the coastal towns and cities of Mirandus, where the sea is a constant presence and a way of life.

        The Seafarers are a hardy and adventurous people, drawn to the thrill of exploration and the freedom of the open sea. They are known for their love of adventure and their wanderlust, and they are often seen setting out on grand voyages to explore the unknown reaches of Mirandus.
        
        As masters of the sea, the Seafarers are renowned for their exceptional sailing skills. They are able to navigate the choppy waters of Mirandus with ease, using the stars and their innate sense of direction to guide them. They are also skilled at rowing and able to use less energy and travel further and more securely than other exemplars.
        
        In addition to their exceptional sailing skills, the Seafarers are also known for their resourcefulness and their ability to survive in even the most challenging of conditions. They are able to avoid random encounters and seek out hidden marvels using hints and maps, and they are always on the lookout for new treasures and wonders to discover.
        
        One of the most famous and beloved stories about the Seafarers involves a group of them who were searching for a legendary island said to be overflowing with Materium and abundant treasure troves. According to legend, the Seafarers sailed for days through rough seas and treacherous storms, refusing to give up despite the many dangers they faced. When they finally reached the island, they were met with a fierce and formidable dragon, who guarded the island and its treasures.
        
        
        According to the Seafarers, the group of them refused to back down, and they engaged the dragon in a fierce battle. It is told that after a long and grueling fight, they were able to defeat the dragon and claim the treasure for themselves. For many years, this story was set as truth, until a sneaky Neverlook overheard a couple drunken Seafarers, at a Drunken Duck Tavern, laughing about the myth that was spread as truth. The truth was then known that the Seafarers, whom desired more fame and recognition, spread this rumor in order to become heroes among the people of Mirandus. 
        
        The race of Seafarers, regardless of the truthfulness of their past, continue to grow in popularity with each new discovery. They are an essential part of discovering new landscape in Mirandus, and their skills and bravery are greatly respected and admired by all who encounter them... except their ancient, gargantuan friend, Mr. Kraken.`],
        ttRead : ttSeaf,
        rarity : 'Rare',
        abilityName : 'Seafaring',
        ability : 'Bonus to sailing.',
        abilImg : seafAbilImg,
        total : 2500,
        Img : seafImg,
        charVid : seafVid,
    },{
        id : 8,
        name : 'Stronghand',
        description : `No matter where you find yourself in the world of Mirandus, you can always count on the craftsmanship of the human Exemplars known as Stronghands. Stronghands can be found in nearly every town and village. Explorers have relied on the creations of their hands through the darkest nights, the coldest days and the most frightening adventures. 
        
        The legacy of the Stronghands has been handed down through countless generations of the hardest working people in the world. These craftsmen despise lethargy and take delight in their most productive days. For the Stronghands, ingenuity is more than a job; it is a way of life. If you are fortunate enough to have an Stronghand for a friend, your quests and journeys will certainly unfold with greater ease. 
        
        Through a trait called Expediency, these Exemplars receive a speed bonus to all crafting.`,
        tavernTales : [`The Stronghands are a proud and dedicated clan of exemplars known for their exceptional craftsmanship and their ability to create a wide range of durable and reliable items. They are often sought out by traveling traders and other businesses to construct new buildings, weapons, and other objects, and they are known for their ability to complete large and complex projects with speed and efficiency.

        Despite their reputation for being skilled and reliable, the Stronghands are secretly envious of the Greencloaks, another clan of exemplars known for their incredible speed and agility when it comes to carpentry. While the Stronghands pride themselves on the quality and durability of their work, they can't help but be a little jealous of the Greencloaks' ability to complete tasks at a much faster rate. Despite this, the two clans have a good relationship and often work together on large land deeds and construction projects.
        
        In addition to their exceptional craftsmanship, the Stronghands are also known for their trait of expediency, which allows them to work at a faster pace when it comes to crafting. This trait, combined with their dedication and hard work, has helped them to earn a reputation as some of the finest craftsmen in the world of Mirandus. Whether constructing magestic items or a small leather bag, the Stronghands are known for their ability to get the job done quickly and efficiently.`],
        ttRead : ttStroHand,
        rarity : 'Rare',
        abilityName : 'Expediency',
        ability : 'Bonus to all crafting.',
        abilImg : stroAbilImg,
        total : 2500,
        Img : stroImg,
        charVid : stroVid,
    },{
        id : 9,
        name : 'True Provider',
        description : `The greatest skills of farming have always belonged to humans, who experience an overwhelming and inexplicable drive to provide for and nurture those around them. They do not judge and they do not play favorites; they derive their happiness from creating, producing and distributing the fruits of their labors. The most elite of these human servant heroes of the world are the Exemplars known as True Providers. 
        
        The endless joy they derive from their actions result in additional heroic bonuses to all farming and ranching activity.`,
        tavernTales : [`The True Providers are a clan of exemplars known for their exceptional skill in farming and their dedication to providing for their communities. They are often found in small hamlets and rural communities, where they work tirelessly to cultivate crops and raise livestock to feed and sustain the people around them.

        Despite their love of farming and their desire to provide for others, the True Providers have a disdain for larger deeds that do not have enough farming space. They believe that it is important for everyone to have access to fresh, nourishing food, and they are hesitant to work on projects that do not prioritize the production of crops and livestock.
        
        In the past, the True Providers have had dealings with some rogue alchemists who sought to take over the market for certain plants and make them impossible to obtain from any other source. The True Providers were determined to protect their communities and ensure that everyone had access to the food they needed, and they worked tirelessly to foil the alchemists' plans and maintain a healthy and diverse market for their crops.
        
        Despite these challenges, the True Providers remain committed to their work and to the people they serve. Their dedication and joy in providing for others gives them heroic bonuses to all farming and ranching activity, and they are respected and beloved throughout the world of Mirandus for their tireless efforts to nourish and sustain their communities.`],        ttRead : ttTrueProv,
        rarity : 'Rare',
        abilityName : 'Agriculturist',
        ability : 'Bonus to all farming and ranching abilities.',
        abilImg : trueAbilImg,
        total : 2500,
        Img : trueImg,
        charVid : trueVid,
    },{
        id : 10,
        name : 'Weaver',
        description : `The children of The Weavers often are given a shuttle and thread to play with when they are very young, and the first piece of woven material produced by their hands is always a treasured family heirloom. It is said that the weavers have the ability to produce some of the finest garments in the time it takes for an average loom operator to create some simple roughspun. 
        
        Whether it is in the creation of fine woven cloth as a crafting supply, or the manufacture of certain types of armor, the Weavers possess the ability to create something almost before anyone else has even began. As an Exemplar, they will be unparalleled in their cloth production ability, making them very rare indeed!`,
        tavernTales : [`The Weavers are a clan of exemplars known for their exceptional skill in weaving and their ability to create beautiful and intricate fabrics and clothing. They are often sought out by the wealthy and powerful, including the elves of Mirandus, to create luxurious and fashionable items.

        One funny story about the Weavers involves a group of mischievous elves who decided to play a prank on a Weaver who was known for being particularly serious and uptight. The elves snuck into the Weaver's workshop one night and replaced all of the spools of thread with brightly colored yarns in shades of pink, purple, and neon green. The next morning, when the Weaver arrived at work and began to set up for the day, he was shocked to see the colors of his thread had changed overnight.
        
        At first, the Weaver was furious and convinced that someone had deliberately tampered with his supplies. He spent hours searching for the culprit and grumbling about the unprofessionalism of his colleagues. It wasn't until one of the elves finally confessed to the prank that the Weaver realized what had happened.
        
        Despite the initial frustration, the Weaver couldn't help but see the humor in the situation and ended up laughing about it with the elves. From then on, he was known as a good sport and was much more willing to play along with the elves' mischievous antics.
        
        Overall, the Weavers are a skilled and respected clan of exemplars known for their ability to create beautiful and intricate fabrics and clothing. They are often sought out by the wealthy and powerful, and they are known for their exceptional craftsmanship and attention to detail.`],
        ttRead : ttWeav,
        rarity : 'Rare',
        abilityName : 'Clothing',
        ability : 'Bonus to cloth and clothing generation.',
        abilImg : weavAbilImg,
        total : 2500,
        Img : weavImg,
        charVid : weavVid
    }
]

/*name this fetchExemplar and use the race as a prop*/

const Humans = () => {
    return (
        <div>
            {humans.map((human) => (
                <div>
                    <Exemplar exemplar={human} />
                </div>
            ))}

            <DisplayBubbles race={humans} myRace={myRace} />

        </div>
    )
}


export { Humans, humans }