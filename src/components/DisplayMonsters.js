import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import { Goblin } from './monsters/Goblins';
import { Troll } from './monsters/Trolls';
import { Unknown1 } from './monsters/Unknown1';
import { Unknown2 } from './monsters/Unknown2';
import { Minotaur } from './monsters/Minotaurs';



const Displaymonsters = () => {

    const [myMonster, setmyMonster] = useState('');
    const monsters = ['Goblins', 'Minotaurs', 'Trolls', 'Unknown1', 'Unknown2']
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='r-background'>
            <div className='r-monstersBG'>
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
                                    <div className='r-monsterNames'>{monster}</div>

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
                    {myMonster === 'Unknown1' && <Unknown1 />}
                    {myMonster === 'Unknown2' && <Unknown2 />}
                </div>
            </div>

        </div>
    )
}

export default Displaymonsters