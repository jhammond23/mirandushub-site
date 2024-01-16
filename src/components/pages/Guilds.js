import React, { useEffect, useState } from 'react';
import GuildList from '../GuildList';
import GuildsArray from '../GuildsArray';
import voxhead from '../../mirandushub/pics/voxHead.png'
import chatBubble from '../../mirandushub/pics/chatBubble.png'

const Guilds = () => {
    const [showChatBubble, setShowChatBubble] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowChatBubble(true);
            setTimeout(() => setShowChatBubble(false), 5000);
        }, 1000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <main className='fullpage'>
            <header>
                <h1 className='guildAppHeader'>Mirandus Guild Hub</h1>
            </header>
            <GuildList guilds={GuildsArray} />
            <div className='vox-container' onMouseEnter={() => setShowChatBubble(true)}>
                <a href='/guild-application' aria-label='Apply to feature your guild'>
                    <img src={voxhead} alt='Everflow Elf Vox' className='vox'></img>
                </a>
                {showChatBubble && <ChatBubble />}
            </div>
        </main>
    )
}

const ChatBubble = () => (
    <a href='/guild-application' aria-label='Guild application chat bubble'>
        <img src={chatBubble} alt='Chat bubble' className='chatBubble'></img>
        <div className='chatBubbleContainer'>
            <div className='chatBubbleText'>Want your guild featured? Click me to fill out the application!</div>
        </div>
    </a>
);

export default Guilds;
