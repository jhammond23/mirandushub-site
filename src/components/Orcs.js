import React from 'react'
import { useState } from 'react';
import DisplayBubbles from './DisplayBubbles';
import Exemplar from './Exemplar';

//orc mp4 vids
import beatVid from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.mp4';
import boneVid from './NFTpics/orcs/orc-exemplar-the-bone-orcs.mp4';
import certVid from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.mp4';
import cleaVid from './NFTpics/orcs/orc-exemplar-the-clear-bloods.mp4';
import longVid from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.mp4';

//orc png pics
import beatImg from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.png';
import boneImg from './NFTpics/orcs/orc-exemplar-the-bone-orcs.png';
import certImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.png';
import cleaImg from './NFTpics/orcs/orc-exemplar-the-clear-bloods.png';
import longImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.png';

//orc ability svgs
import beatAbilImg from './NFTpics/orcs/orc-exemplar-the-beating-heart-clan.svg';
import boneAbilImg from './NFTpics/orcs/orc-exemplar-the-bone-orcs.svg';
import certAbilImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-certainty.svg';
import cleaAbilImg from './NFTpics/orcs/orc-exemplar-the-clear-bloods.svg';
import longAbilImg from './NFTpics/orcs/orc-exemplar-the-orcs-of-the-long-hunt.svg';

//tt audio
import ttBeatHearClan from './ttAudio/Orcs/ttBeatHearClan.mp3';
import ttBone from './ttAudio/Orcs/ttBone.mp3';
import ttCert from './ttAudio/Orcs/ttCert.mp3';
import ttCleaBloo from './ttAudio/Orcs/ttCleaBloo.mp3';
import ttLongHunt from './ttAudio/Orcs/ttLongHunt.mp3';

const orcs = [
    {
        id : 16,
        name : 'Beating Heart Clan',
        description : `Orc hunters strike fear into the hearts of those who wander alone in the wilderness, and with good reason. They have a special sense that allows them to perceive the living, to actually see the blood of their prey coursing through its veins. The Exemplars who have turned this sense into a masterful art form are the Beating Heart Clan. Their members can be found anywhere in the world. They are hunters by trade and passion, and they are killers by instinct. These orcs possess the special ability to see the heat signatures of life forms around them when on the hunt.`,
        tavernTales : [`The Beating Heart Clan was a fierce and proud orcish exemplar clan that lived on the harsh, unforgiving plains of Mirandus. They were known for their unique ability to see the heat signatures of all other beings around them, giving them a formidable advantage in combat and hunting.

        One of the most legendary members of the Beating Heart Clan was a young orc named Grondar. He was a fierce warrior with a heart of fire, and he had proven himself time and time again in battle.
        
        However, Grondar's greatest challenge came when he found himself outnumbered and surrounded by a horde of vicious goblins. The goblins had been terrorizing the clans of Mirandus for months, and Grondar had been sent to put an end to their rampage.
        
        As the goblins closed in, Grondar's heart pounded in his chest. He knew that he was outnumbered and outgunned, but he refused to back down. With a fierce battle cry, he charged towards the goblins, his weapon flashing in the sunlight.
        
        The goblins fought with ferocity, but Grondar's ability to easily see each of them gave him a decisive advantage. He was able to anticipate their movements and strike before they could react, cutting down goblin after goblin with ease.
        
        Despite being vastly outnumbered, Grondar stood tall and fought on, his heart beating with the fierce determination of a true warrior. In the end, he emerged victorious, having single-handedly defeated the entire goblin horde and earning the respect and admiration of his clan.
        
        From that day on, Grondar was known as a hero among the Beating Heart Clan, and his legend lived on for generations to come.`],
        ttRead : ttBeatHearClan,
        rarity : 'Epic',
        abilityName : 'Pulse Perception',
        ability : 'Ability to see heat signatures.',
        abilImg : beatAbilImg,
        total : 2000,
        Img : beatImg,
        charVid : beatVid,
    },
    {
        id : 17,
        name : 'Bone Orc',
        description : `In the Bone Orcs’ native lands, the jagged limestone cliffs stretch for countless miles in every direction. Often razor-sharp, these rocks are so prevalent there that bands of orcs have been forced to make their homes within the cracks and crevasses for centuries. Through the strange course of evolution, simply slipping and falling often meant a gashing death, and many orcs died of accidental impalings. 
        
        Because orcs are not known for their incredible dexterity or balance, only those with the toughest flesh and the greatest ability to heal could survive and thrive through the ages. Over great passage of time, the healing orcs of this region became known by outsiders as the Bone Orcs. Their instinctive healing powers are so strong that it is said even their broken bones are mended quickly and with ease. They have now adopted the name as their own with pride, and as Exemplars they possess a trait called Improved Mending. Bone Orcs are always quick to heal and almost entirely immune to bleeding.`,
        tavernTales : [`The Bone Orc clan was once a small and scattered group of orcs, scattered throughout the land of Mirandus. They were known for their rugged, tough appearance and their fierce reputation as warriors. However, they were not particularly well-respected by the other clans, as they were considered to be somewhat of a lesser breed.

        Despite this, the Bone Orcs were determined to prove themselves. They worked tirelessly to hone their skills and refine their fighting techniques, seeking out the toughest battles and the most dangerous opponents. And in time, they began to earn a reputation as some of the strongest and most formidable warriors in all of Mirandus.
        
        One of the most notable Bone Orcs was a warrior named Zargath. Zargath was a massive, hulking orc with a thick, solid build and a fierce, determined expression. He was known for his near-unbreakable spirit and his incredible strength and endurance.
        
        Zargath had always dreamed of adventure and exploration, and when he was chosen to lead an expedition into the unknown lands of Mirandus, he knew that this was his chance to prove himself to the world.
        
        As the team's tank, Zargath took the lead, bravely facing down all manner of dangers and obstacles. He fought off hordes of ferocious beasts and battled powerful magic-wielding foes, always standing strong and unyielding in the face of danger.
        
        Despite the many challenges they faced, Zargath and his team persevered, and they eventually succeeded in their mission, returning home as heroes and earning the respect and admiration of all who knew them.
        
        From that day on, Zargath's name was known throughout Mirandus, and the Bone Orc clan had truly proven themselves to be a force to be reckoned with.`],
        ttRead : ttBone,
        rarity : 'Epic',
        abilityName : 'Improved Mending',
        ability : 'Faster healing and almost immune to bleeding.',
        abilImg : boneAbilImg,
        total : 2000,
        Img : boneImg,
        charVid : boneVid,
    },
    {
        id : 18,
        name : 'Clear Blood',
        description : `Of all tribes of Mirandus orcs, the Clear Bloods are perhaps the most unusual. They are regarded even by their fellow orcs from other tribes with curiosity, and any outsider who observes their rituals tends to find them disturbing to say the least. Unlike the majority of orcs, who are uninterested in the inner workings of their bodies, the Clear Bloods have a strong focus on medicines. But to outsiders, most of their dozens of medicines are considered deadly poisons. 
        
        Through ritual administration of these medicines constantly throughout the life of a Clear Blood, some Clear Bloods are able to develop immunities not only to the effects of those poisons, but all other poisons in the world. Others die in agony during the various ritual processes, but this is all part of the risk an orc must accept to be initiated into the Clear Blood. As Exemplars, Clear Bloods possess a trait called Toxin Release, which makes them immune to almost any poison.`,
        tavernTales : [`In the land of Mirandus, there existed a powerful clan of orcs known as the Clear Blood Orcs. These orcs were feared by all who encountered them, for they possessed an ability that made them almost immune to poison. This ability, known as Toxin Release, allowed the Clear Blood Orcs to release a deadly toxin from their skin, which could kill any creature that came into contact with it.

        For centuries, the Clear Blood Orcs lived in peace, using their Toxin Release ability to defend themselves from any foes that dared to attack them. However, one day, a great darkness descended upon Mirandus. A horde of monsters, led by a powerful demon, swept across the land, laying waste to all in their path.
        
        The Clear Blood Orcs, determined to protect their land and their people, marched forth to face the demon and its minions. Despite their fearsome reputation, the orcs knew that they would be heavily outnumbered and outmatched.
        
        But as the battle raged on, the demon showcased its most ferocious ability yet, an unforgiving cloud of deadly poison. With cries of anguish, every other race of exemplar attempted to retreat. Some successful, others fell to the deadly cloud. However, the Clear Bloods were able to withstand the poisonous shroud and continued sieging the monsters. The monsters fell one by one, until only the demon remained.
        
        The demon, enraged by the orcs' resistance, unleashed its full power against them. But the Clear Blood Orcs, fueled by their determination to protect their home, fought on with all their might. In the end, the demon fell, and the Clear Blood Orcs emerged victorious.
        
        The Clear Blood Orcs returned home as heroes, hailed by all as the saviors of Mirandus. From that day on, they were known as the greatest warriors of all orcish kind, and their Toxin Release ability became legendary.`],
        ttRead : ttCleaBloo,
        rarity : 'Epic',
        abilityName : 'Toxin Release',
        ability : 'Almost immune to poisons.',
        abilImg : cleaAbilImg,
        total : 2000,
        Img : cleaImg,
        charVid : cleaVid,
    },
    {
        id : 19,
        name : 'Orc of Certainty',
        description : `Orcs are creatures of instinct. They are highly intelligent, strong and dangerous in the wild. Because they are able to reason and make difficult choices in the same way as humans, some say that their natural traits give them a distinct advantage. Some tribes of orcs have even learned to amplify their strongest instincts, giving them a definite edge in hunting, survival and combat. The Orcs of Certainty are one such tribe. They have embraced a sense that is entirely beyond the comprehension of humans that allows them to perceive aggression and fear in those around them. These orcs are nearly impossible to doublecross, for they almost always see it coming. 
        
        As Exemplars, Orcs of Certainty have a trait called Trace of Danger, that grants them the ability to sense aggressive creatures and the malice and avarice of those guarding treasure troves.`,
        tavernTales : [`The Orcs of Certainty were a proud and noble clan of exemplars, renowned for their fierce loyalty and unyielding determination. They were known for their their unique ability to sense danger.
        
        The clan lived in a harsh and unforgiving land, where danger lurked around every corner and survival was never guaranteed. But the Orcs of Certainty were not afraid. They were warriors at heart, and they welcomed the challenge of facing their enemies head-on.

        One day, a great raiding party was formed, with the goal of pillaging and plundering the riches of a distant land. The leader of the party knew that success would depend on the strength and bravery of his warriors, and so he called upon the Orcs of Certainty to join him.

        The Orcs were more than happy to oblige. They saw this as a chance to prove their worth and earn honor for their clan. They knew that the journey would be long and treacherous, but they were ready for the challenge.

        As the raiding party set out on their journey, the Orcs of Certainty took on the role of scouts, using their Trace of Danger ability to sense any potential threats that lay ahead. They led the way, forging a path through the wilderness and keeping the raiding party safe from harm.

        As they journeyed deeper into enemy territory, the Orcs' senses grew more and more finely tuned, allowing them to detect even the slightest hint of danger. They became an invaluable asset to the raiding party, using their skills to navigate through enemy territory and strike quickly and efficiently.

        In the end, the raid was a success, and the Orcs of Certainty returned home with their heads held high, their honor and reputation restored. They had proven themselves to be true warriors, and their clan was forever etched into the annals of history as one of the greatest clans of exemplars that ever lived.`],
        ttRead : ttCert,
        rarity : 'Epic',
        abilityName : 'Trace of Danger',
        ability : 'Can sense aggressive creatures.',
        abilImg : certAbilImg,
        total : 2000,
        Img : certImg,
        charVid : certVid,
    },
    {
        id : 20,
        name : 'Long Hunt',
        description : `Long, difficult searches are typical of their people. It provides them with a sense of adventure and excitement for lengthy amounts of time, allowing them to capture the most elusive and valuable game.`,
        tavernTales : [`The Orcs of the Long Hunt were a fierce and honorable clan of exemplars, known throughout the land of Mirandus for their exceptional endurance and strength. They were a proud people, fiercely devoted to their clan and their traditions.

        The clan's name, the Orcs of the Long Hunt, was derived from their legendary hunting expeditions, which often lasted for days or even weeks at a time. The orcs were renowned for their ability to go without food or sleep for extended periods of time, thanks to their innate resilience and hardiness.
        
        One of the most epic tales of the Orcs of the Long Hunt was the time when their clan was caught in a raging storm during a hunting expedition. For days, the orcs battled against the fierce winds and driving rain, fighting to survive in the harsh wilderness.
        
        Despite the odds, the orcs refused to give up. They pushed on, sustained by their fierce determination and their innate ability to endure hunger and fatigue.
        
        As the storm raged on, the orcs began to run low on supplies. Rather than succumb to their own needs, they selflessly gave their food and water to the other members of their party, determined to see them through to safety.
        
        Through sheer force of will and unyielding determination, the Orcs of the Long Hunt finally emerged from the storm battered but victorious. Their bravery and selflessness had inspired their companions and earned them the respect and admiration of all who knew them.
        
        To this day, the Orcs of the Long Hunt are remembered as a clan of exemplars who embody the virtues of strength, honor, and selflessness, and their legend lives on as a testament to their indomitable spirit.`],
        ttRead : ttLongHunt,
        rarity : 'Epic',
        abilityName : 'Satiated',
        ability : 'Can go longer without food or sleep',
        abilImg : longAbilImg,
        total : 2000,
        Img : longImg,
        charVid : longVid,
    }
]

let myRace = 'Orcs'

const Orcs = () => {
    return (
        <div>
            {orcs.map((orc) => (
                <div>
                    <Exemplar exemplar={orc} />
                </div>
            ))}
        <DisplayBubbles race={orcs} myRace={myRace} />

        </div>
    )
}

export { Orcs, orcs}