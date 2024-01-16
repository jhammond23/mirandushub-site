import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import { Goblin } from './monsters/Goblins';
import { Troll } from './monsters/Trolls';
import { GoblinMotherComponent } from './monsters/GoblinMother';
import { BruteComponent } from './monsters/Brute';
import { Minotaur } from './monsters/Minotaurs';



const Displaymonsters = () => {

    const [myMonster, setmyMonster] = useState('');
    const monsters = ['Goblins', 'Minotaurs', 'Trolls', 'Brute / Mega Brute', 'Goblin Mother']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='r-background'>
            <div className='r-monstersBG'>
                <br />

                <header className='r-monsterSelectorTitle'>ONSTER</header>


                <br />

                <div className='r-deedSelectorContainer'>
                    <div className='r-monsterSelector' ref={ref}>
                        <button className='r-scrollBtnTL' onClick={() => scroll(-450)}></button>

                        {monsters.map((monster) => (
                            <Tilt>
                                <button className={`card monsters r-${monster}`}
                                    onClick={() => setmyMonster(monster)}
                                    key={monster}
                                >
                                    <div className='r-monsterNames'>
                                        <span className='monster-text'>{monster}</span>
                                    </div>



                                </button>
                            </Tilt>

                        ))}
                        <button className='r-scrollBtnTR' onClick={() => scroll(450)}></button>

                    </div>
                </div>
                <div className='r-background'>
                    {myMonster === 'Goblins' && <Goblin />}
                    {myMonster === 'Trolls' && <Troll />}
                    {myMonster === 'Minotaurs' && <Minotaur />}
                    {myMonster === 'Brute / Mega Brute' && <BruteComponent />}
                    {myMonster === 'Goblin Mother' && <GoblinMotherComponent />}
                </div>
            </div>

        </div>
    )
}

export default Displaymonsters